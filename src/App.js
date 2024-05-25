import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Shop } from './pages/shop/Shop';
import { Cart } from './pages/cart/Cart';
import { Nav } from './components/Nav';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ShopContextProvider } from './context/shopContext';
function App() {
  const client = new QueryClient({defaultOptions : {
    queries : {refetchOnWindowFocus : false},
    mutations : {}
  }})
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <ShopContextProvider>
          <Router>
            <Nav />
            <Routes>
              <Route path='/' element={<Shop />}/>
              <Route path='/cart' element={<Cart />}/>
            </Routes>
          </Router>
          </ShopContextProvider>
        </QueryClientProvider>
      
        
    </div>
  );
}

export default App;
