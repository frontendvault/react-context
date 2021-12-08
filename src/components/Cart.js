import {useContext, useState, useEffect} from 'react'
import Product from './Product'
import {Cart}    from '../Context'

const CartPage = () => {

    const {cart} = useContext(Cart)
    const [total, setTotal] = useState();

    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
    }, [cart])
    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <h4>Cart</h4>

                    <h5>
                        Total: {total}
                    </h5>
                </div>
            </div>
            <div className="row rounded shadow-lg bg-light">  {
            cart.map((prod) => (<Product prod={prod} key={prod.id}/>))
}
            </div>
        </div>
    )
}
export default CartPage