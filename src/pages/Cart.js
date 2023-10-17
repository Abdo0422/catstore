import React from 'react';
import CartItem from '../Components/CartItem';
import {connect} from 'react-redux';
import {ClearCart} from '../store/actions/action';


class Cart extends React.Component {
         placeorder= () =>
         {
            this.props.ClearCart()
            alert('we received your order and weare working on it.')
         }
    render() {
        return (
            <div>
                <h1>Cart</h1>

                <div className='row'>
                    {this.props.cartItem.map((item, index) =>
 
                        <div className={'col-3'} key ={index}>
                            <CartItem item={item} index={index}/>
                        </div>
                    )}
                </div>

                <br />

                <h3>Total: {this.props.total}</h3>

                <div className="d-grid gap-2">

                    <button className="btn btn-primary" type="button" onClick={this.placeorder}>Place Order</button>

                </div>


            </div>

        )
    }
}




const mapStateToProps = (state)=> {
    return{
        cartItem :state.cart,
        total : state.cart.reduce((total,item) => total + item.quantity * item.product.price,0)
    }
}
const mapDispatchToProps = (dispatch)=> {
    return{
        ClearCart : () => dispatch(ClearCart()),
    }
};



export default connect(mapStateToProps,mapDispatchToProps)(Cart);