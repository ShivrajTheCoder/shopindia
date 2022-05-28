import React from 'react'
import { connect } from 'react-redux'


function Cart({ cart }) {
    return (
        cart.length === 0 ?
            <div>Nothing in the cart</div> :

            cart.map(prod => (
                <div className="card" width={100} key={prod.id}>
                    <img className="card-img-top" src={prod.image} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{prod.title}</h5>
                        <p className="card-text">{prod.description}</p>
                        <a href="#" className="btn btn-primary">Remove from cart</a>
                    </div>
                </div>
            ))
    )
}

const mapStateToProps = state => {
    return {
        cart: state.shop.cart,
    }
}

export default connect(mapStateToProps)(Cart);