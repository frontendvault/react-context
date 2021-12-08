
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Home from './components/Home'
import CartPage from './components/Cart'

function App() {

    return (
        <Router>

            <Header/>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home/> }/>
                    <Route path="/cart" element={<CartPage/>}/>
                </Routes>
            </div>

        </Router>

    );
}

export default App;
