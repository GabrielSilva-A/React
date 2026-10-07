import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import './Layout.css';

export function Layout({ children }) {
return (
<div>
<Header /> 
<main>
{children}
</main>
<div className="footer-container">
<Footer/>
</div>
</div>
);
}