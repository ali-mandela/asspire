import '../assests/css/CompanyLogo.css';
import logo1 from '../assests/img/a.png';
import logo2 from '../assests/img/b.png';
import logo3 from '../assests/img/c.png';
import logo4 from '../assests/img/e.png';
import logo5 from '../assests/img/f.png';


function CompanyLogo(){
    return(<><div className='sidebutton'>
    <h4>Remote Support </h4>
  </div>
    <div className="CLdiv">
    
    <img src={logo1}
    alt="image of company 1">
    </img>
    <img src={logo2}
    alt="image of company 1">
    </img>
    <img src={logo3}
    alt="image of company 1">
    </img>
    <img src={logo4}
    alt="image of company 1">
    </img>
    <img src={logo5}
    alt="image of company 1">
    </img>

    </div>

    </>);
}


export default CompanyLogo;