import React from 'react';
import './Cart.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class Cart extends React.Component {
    render() {
        return(
            <div className = "container">
               <Header />
               <Footer />
            </div>
        );
    }
}

export default Cart;