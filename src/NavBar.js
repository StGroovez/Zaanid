import './navbar.css';
import zaanidlogo from './images/zaanid-logo.png';

function NavBar() {
    return(
        <div className= 'full-container'>        
            <div className='logo-container'>
                <img className='logo' src={zaanidlogo} alt='zaanid-logo' />
                Zaanid
            </div>

            <div className='options-container'>
                <div className='buy-property'>Comprar</div>
                <div className='rent-property'>Rentar</div>
                <div className='sell-property'>Vende con nosotros</div>
                <div className='about-us'>¿Quiénes somos?</div>
            </div>
        </div>
    ); 
};

export { NavBar };