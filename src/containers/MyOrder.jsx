import React, { useContext } from 'react';
import AppContext from '../context/AppContext'
import OrderItem from '../components/OrderItem';
import '../styles/MyOrder.scss';
import flechita from'@icons/flechita.svg';
const MyOrder = () => {
  const { state } = useContext(AppContext);
  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={flechita} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {state.cart.map(product => <OrderItem key={`orderItem-${product.id}`} product={product} />)}
        
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>$560.00</p>
        </div>
        <button className="primary-button">
          Checkout
        </button>
      </div>
    </aside>
  );
};

export default MyOrder;