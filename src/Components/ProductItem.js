import React from 'react';





function ProductItem(props) {

    return (

        <div className="card" style={{ width: "18rem", margin: "5px" }}>
            <img src={props.product.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.product.name}</h5>
                <p className="card-text">Price {props.product.price}$</p>
                <a href={"/products/" + props.product.id} className="btn btn-primary">Détails</a>
            </div>
        </div>
    )
}
export default ProductItem