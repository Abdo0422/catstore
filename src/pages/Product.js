import React from 'react';
import { useParams } from "react-router-dom";
import { getbyId } from '../api/products';
import {connect} from 'react-redux';
import {addToCart} from '../store/actions/action';






function withParams(Component) {
    return (props) => <Component {...props} params={useParams()} />;

}





class Product extends React.Component {
    state = {
        loading: true,
        product: {},quantity:0
    }

    componentDidMount() {
        const id = this.props.params.id


        getbyId(parseInt(id))
            .then(product => {
                this.setState({
                    product,
                    loading: false
                });
            })
    }
    handlequantity = (event) => {
        const value = event.target.value
        if(value<0) 
            return;
        
        this.setState({
            quantity: value
        })

    }
    addToCart=(product)=>{
        this.props.addToCart(product,this.state.quantity)
    }





 render(){
    if (this.state.loading)
        return 'loading...'

    const product = this.state.product;
    const quantity = this.state.quantity;




    return (
        <div className='row'>
            <div className='col-lg-6'>
                <img src={product.image} width="100%" alt="" />
            </div>
            <div className='col-lg-6'>
                <h1>{product.name}</h1>
                <p> Price: {product.price}$</p>

                <p>{product.description}</p>

                <br /><br />

                <input type="number" value={quantity} onChange={this.handlequantity}/>

                <br /><br />

                <p> total: {parseInt(quantity) * parseInt(product.price)}$</p>
                <button className='btn btn-primary'  onClick={this.addToCart} >
                    Add to Cart
                </button>
            </div>
        </div>
    )
}


}






export default withParams(connect(null,{addToCart})(Product));

