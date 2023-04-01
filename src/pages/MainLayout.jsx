import { Outlet } from 'react-router-dom'

// components
import Header from '../components/Header';
import Footer from '../components/Footer';

function MainLayout() {
  return (
    <div>

        <Header />
        <Outlet />
        <Footer />
        
    </div>
  )
}

export default MainLayout