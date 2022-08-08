import '../assests/css/NewNavbar.css';
import logo from '../assests/img/logo.png';

function NewNavbar(){
    return(<>
    <nav className='main-nav'>
        <div className='logo'>
            <img src={logo}/>
        </div>
        <div className='nav-links'>
            <ul>
                <li><a href=''>Why Aspire</a></li>
                <li><a href=''>IT Services</a></li>
                <li><a href=''>Produts</a></li>
                <li><a href=''>Contact</a></li>
                <li className='buttons'><a href=""/>BTN</li>
                <li className='buttons'><a href=""/>BTN</li>
            </ul>
        </div>
    </nav>

    </>);
}

export default NewNavbar;