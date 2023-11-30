import PropTypes from 'prop-types';


function formatPrice(value) {
  const priceFormatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
  return priceFormatter.format(value)
}

export default function ShopItemFunc( { item } ) {
  ShopItemFunc.propTypes = {
    item: PropTypes.object.isRequired,
  };
  
  return (
    <div className="main-content">
      <h2>{item.brand}</h2>
      <h1>{item.title}</h1>
      <h3>{item.description}</h3>
      <div className="description">
        {item.descriptionFull}
      </div>
      <div className="highlight-window mobile">
        <div className="highlight-overlay">
        </div>
      </div>
      <div className="divider"></div>
      <div className="purchase-info">
        <div className="price">
          {item.currency}{formatPrice(item.price)}
        </div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  )
}