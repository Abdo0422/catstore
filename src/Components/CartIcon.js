import React from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import "./CartIcon.css";

function CartIcon(Props){
    return <div id="cart-icon">
        <Link to="/cart">
            <span className="badge bg-white text-danger rounded-pill">{Props.quantity}</span>
            <i className='fa fa-shopping-cart'></i>
        </Link>
    </div>
}

const mapStateToProps = (state) => {
    
    return {
        ...state.cart.item,
        quantity: state.cart.reduce((total, item) => total + parseInt(item.quantity), 0),
    };
}

export default connect(mapStateToProps)(CartIcon);






