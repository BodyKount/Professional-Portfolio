import { Outlet } from 'react-router-dom';
import Nav from './components/Navbar';
import Footer from './components/Footer';
import './assets/styles/App.css';

function App() {
  return(
    <>
    <Nav /> 
    <main className="mx-3"> 
      <Outlet />
    </main>
    <Footer />
    </>
  );
};

export default App;


