import faker from 'faker'
import React, {useState, useContext} from 'react'
import {Cart} from '../Context'
import Product from './Product'

faker.seed(100);

const Home = () => {

        // const { cart, setCart } = useContext(Cart)

    const productsArray = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.random.image()
    }))


    const [products] = useState(productsArray)

    return (
        <div className="row">
            {products.map((prod) => (<Product prod={prod} key={prod.id} />))}

            
        </div>
    )
}
export default Home;