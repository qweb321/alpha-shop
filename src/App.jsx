import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <CartProvider>
      <Header />
      <Main />
      <Footer />
    </CartProvider>
  );
}

export default App;
