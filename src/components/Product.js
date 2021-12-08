import React, {useContext} from 'react'
import {Cart} from '../Context'

const Product = ({prod}) => {

    const { cart, setCart } = useContext(Cart)
    return (
        <div className="col col-md-3 col-xl-2 pb-2 border rounded m-3 p-2 shadow-sm">
            <img src={prod.image} alt={prod.name} className="img-fluid"/>
            <h5 className="mt-2 mb-1">
                {prod.name}
            </h5>
            <p className="mb-1">
                 {prod.price.substring(0, 3)}
            </p>

            {cart.includes(prod)
                ? (
                    <button
                        className="btn btn-outline-danger btn-sm btn-block d-flex"
                        onClick={() => {
                        setCart(cart.filter(cate => cate.id !== prod.id))
                    }}>Remove from Cart</button>
                )
                : (
                    <button
                        className="btn btn-outline-secondary btn-sm btn-block d-flex"
                        onClick={() => {
                        setCart([
                            ...cart,
                            prod
                        ])
                    }}>Add to Cart</button>
                )}

        </div>
    )
}

export default Product
