import { useEffect, useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion as Motion, useReducedMotion } from 'motion/react';
import './ExpandableValuesButton.css';

// Resorte de la expansión — duración explícita en vez de stiffness/damping
// para poder ajustar "más lento / más rápido" de forma directa e intuitiva.
// bounce=0 sería lineal-suave; un poco de bounce le da sensación fluida/premium.
const SPRING = { type: 'spring', duration: 0.9, bounce: 0.15 };
const FADE_DURATION = 0.65; // color de fondo y sombra, sincronizado con el resorte

/**
 * Botón "VER TODOS LOS VALORES" que se expande en el lugar hasta convertirse
 * en el modal (animación de elemento compartido con Motion) y se encoge de
 * vuelta al botón al cerrar.
 *
 * - prefix: prefijo de clases del buscador ('ts' | 'vs') para reutilizar sus estilos
 * - children: función (cerrar) => contenido del modal
 */
const ExpandableValuesButton = ({ prefix, label, title, collapsedColor = '#111111', children }) => {
  const btnRef = useRef(null);
  const closeBtnRef = useRef(null);
  const [phase, setPhase] = useState('closed'); // closed | opening | open | closing
  const [rect, setRect] = useState(null);
  const reduceMotion = useReducedMotion();
  const titleId = useId();

  const medir = () => {
    const r = btnRef.current?.getBoundingClientRect();
    return r ? { top: r.top, left: r.left, width: r.width, height: r.height } : null;
  };

  const abrir = () => {
    const r = medir();
    if (!r || reduceMotion) {
      setPhase('open');
      return;
    }
    setRect(r);
    setPhase('opening');
  };

  const terminarCierre = () => {
    setPhase('closed');
    btnRef.current?.focus();
  };

  const cerrar = () => {
    if (phase === 'closed' || phase === 'closing') return;
    const r = medir();
    if (!r || reduceMotion) {
      terminarCierre();
      return;
    }
    setRect(r); // el botón pudo moverse (scroll) mientras el modal estaba abierto
    setPhase('closing');
  };

  // Primer cuadro en la posición del botón y en el siguiente se expande
  useEffect(() => {
    if (phase !== 'opening') return;
    const id = requestAnimationFrame(() => setPhase('open'));
    return () => cancelAnimationFrame(id);
  }, [phase]);

  // Red de seguridad: si la animación de cierre no avisa (pestaña oculta), cerrar igual
  useEffect(() => {
    if (phase !== 'closing') return;
    const id = setTimeout(terminarCierre, 900);
    return () => clearTimeout(id);
  }, [phase]);

  // Escape cierra; al abrir se enfoca el botón de cerrar
  useEffect(() => {
    if (phase !== 'open') return;
    closeBtnRef.current?.focus();
    const onKey = (e) => e.key === 'Escape' && cerrar();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  const colapsado = phase === 'opening' || phase === 'closing';
  const cerrando = phase === 'closing';

  return (
    <>
      <button
        ref={btnRef}
        data-slot="show-all"
        className={`${prefix}-show-all`}
        style={{ visibility: phase === 'closed' ? 'visible' : 'hidden' }}
        onClick={abrir}
        aria-haspopup="dialog"
        aria-expanded={phase !== 'closed'}
      >
        {label}
      </button>

      {phase !== 'closed' &&
        createPortal(
          <Motion.div
            className={`${prefix}-modal-backdrop evb-backdrop`}
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === 'closing' ? 0 : 1 }}
            transition={{ duration: 0.25 }}
            onClick={cerrar}
          >
            <Motion.div
              layout
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              className={`${prefix}-modal evb-panel`}
              style={
                colapsado && rect
                  ? {
                      position: 'fixed',
                      top: rect.top,
                      left: rect.left,
                      width: rect.width,
                      height: rect.height,
                      maxWidth: 'none',
                      maxHeight: 'none',
                    }
                  : undefined
              }
              initial={{ backgroundColor: collapsedColor, boxShadow: '0 0 0 rgba(0,0,0,0)' }}
              animate={{
                backgroundColor: colapsado ? collapsedColor : '#FFFFFF',
                boxShadow: colapsado ? '0 0 0 rgba(0,0,0,0)' : '0 16px 48px rgba(0,0,0,0.3)',
              }}
              transition={{ layout: SPRING, default: { duration: FADE_DURATION } }}
              onLayoutAnimationComplete={() => {
                if (phase === 'closing') terminarCierre();
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence initial={false}>
                {colapsado ? (
                  <Motion.span
                    key="label"
                    layout
                    className="evb-label"
                    initial={{ opacity: 0 }}
                    // Al cerrar la etiqueta debe volver a aparecer pronto (sin hueco
                    // vacío mientras la caja se encoge); al abrir puede esperar un
                    // poco porque el usuario ya está viendo la caja crecer.
                    animate={{ opacity: 1, transition: { delay: cerrando ? 0.13 : 0.36, duration: 0.3 } }}
                    exit={{ opacity: 0, transition: { duration: 0.2 } }}
                  >
                    {label}
                  </Motion.span>
                ) : (
                  <Motion.div
                    key="content"
                    layout
                    className="evb-content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.26, duration: 0.36 } }}
                    // Al cerrar, el contenido se desvanece acompañando el encogido
                    // de la caja (no de golpe) — antes duraba solo 80ms y parecía
                    // que todo desaparecía antes de que la caja terminara de encoger.
                    exit={{ opacity: 0, transition: { duration: cerrando ? 0.36 : 0.2 } }}
                  >
                    <div className={`${prefix}-modal-header`}>
                      <span id={titleId} className={`${prefix}-modal-title`}>{title}</span>
                      <button
                        ref={closeBtnRef}
                        data-slot="modal-close"
                        className={`${prefix}-modal-close`}
                        onClick={cerrar}
                        aria-label="Cerrar"
                      >
                        ✕
                      </button>
                    </div>
                    <div className={`${prefix}-modal-body`}>{children(cerrar)}</div>
                  </Motion.div>
                )}
              </AnimatePresence>
            </Motion.div>
          </Motion.div>,
          document.body
        )}
    </>
  );
};

export default ExpandableValuesButton;
