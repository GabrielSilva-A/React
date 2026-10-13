import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import './Layout.css';
import { Outlet } from 'react-router-dom';

export function Layout({ children }) {
return (
    <div>

    <Header /> 
    
        <main>

            <Outlet />
        
        </main>

    <Footer/>

    </div>
);
}