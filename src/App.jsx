import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import { CartProvider } from './context/CartContext'
import { OrderProvider } from './context/OrderContext';

function App() {
  return (
    <OrderProvider>
      <CartProvider>
        <Header />
        <Main />
        <Footer />
      </CartProvider>
    </OrderProvider>
  );
}

export default App;
