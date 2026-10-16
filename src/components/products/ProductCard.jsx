import PropTypes from 'prop-types';
import TireCard from './TireCard';

/**
 * ProductCard — Reenvía directamente a TireCard para garantizar
 * que todas las tarjetas de la tienda mantengan exactamente el mismo diseño visual,
 * estructura, badges de marca, PVP, IVA, contador y botón de compra.
 */
const ProductCard = ({ product, ...props }) => {
  return <TireCard product={product} {...props} />;
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string,
    brand: PropTypes.string,
    measure: PropTypes.string,
    price: PropTypes.number,
    finalPrice: PropTypes.number,
    discount: PropTypes.number,
    image: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
