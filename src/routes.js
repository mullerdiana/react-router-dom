import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from 'components/Menu';
import PaginaPadrao from 'components/PaginaPadrao';
import Cardapio from 'pages/Cardapio';
import Home from 'pages/Home';
import Sobre from 'pages/Sobre';
import Footer from 'components/Footer';
import NotFound from 'pages/NotFound';

export default function AppRouter() {
  return (
    <main className='container'> 
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<PaginaPadrao />}> 
            <Route index element={<Home />} />
            <Route path="/cardapio" element={<Cardapio />} />
            <Route path='sobre' element={<Sobre />} /> 
          </Route>
          <Route path='*' element={<NotFound />} /> 
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}