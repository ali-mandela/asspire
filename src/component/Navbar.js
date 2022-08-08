import '../assests/css/Navbar.css';
import logo from '../assests/img/logo.png';

function Navbar(){

return(<>
<div className="topText">
<div>
<span>CALL US TODAY </span><a href="tel:303.932.8555">303.932.8555</a>
</div>
    
</div>
    <nav id=''> 
    <div className='navbar'>
  <div className='logo'><a href=''><img src={logo} alt='logo of aspire'/></a></div>
    <div className='nav-links'>
    <div className='sidebar-logo' id='sidebarLogo'>
    <i class="fa-solid fa-xmark fa-3x"></i>
    </div>
      <ul className='links'>
        <li><a href="#">Why Aspire</a>
        <ul className='submenu'>
        <li><a href="#">10 Reasons to Aspire</a></li>
        <li><a href="#">Aspire Gaureante</a></li>
        <li><a href="#">Mission</a></li>
        <li><a href="#">Review</a></li>
        <li><a href="#">Blog</a></li>
        </ul></li>
        
        <li><a href="#">IT SERVICES</a>
        <ul className='submenu'>
        <li><a href="#">Hourly IT Services</a></li>
        <li><a href="#">Managed IT Services</a>
        <ul className='sub-submenu'>
        <li><a href="#">Managed Services Packages </a></li>
        <li><a href="#">Software Management </a></li>
        <li><a href="#">Backup system Management</a></li>
        <li><a href="#">Microsoft Exchange Server Set up</a></li>
        <li><a href="#">Microsoft Office 365 Setup</a></li>
        <li><a href="#">Mobile Device Management</a></li>
        <li><a href="#">Network Services </a></li>
        <li><a href="#">Vendor Management</a></li>
        <li><a href="#">Server Management</a></li>
        <li><a href="#">Work Station Management</a></li>
        </ul></li>
        <li><a href="#">Netork Security Consulting</a>
        <ul className='sub-submenu'>
        <li><a href="#">Firewall and Network Service </a></li>
        <li><a href="#">Email Security </a></li>
        </ul></li>
        <li><a href="#">Project Services</a></li>
        </ul></li>
        <li><a href="#">PRODUCTS</a>
        <ul className='submenu'>
        <li><a href="#">Name-Brand Computers</a></li>
        <li><a href="#">Hardware</a></li>
        <li><a href="#">Software</a></li>
        <li><a href="#">Cloud</a></li>
        </ul></li>
        <li><a href="#">CONTACT</a>
        <ul className='submenu'>
        <li><a href="#">Contact info & Location</a></li>
        <li><a href="#">Service Area</a></li>
        </ul></li>
        <li className='libtn'><a href="#"><span>Client</span></a></li>
        <li className='libtn'><a href="#"><span>Remote Support</span></a></li>
      </ul>
    </div>
    <i className="fa-solid fa-bars fa-3x"></i>
    </div>
    </nav>  
    {/* <script>
     
      let menuOpenBtn=document.getElementsByClassName("#root .navbar .fa-bars");
     let CloseOpenBtn=document.querySelector("#root .navbar .fa-xmark");
     let navLinks = document.querySelector("#root .nav-links");

 menuOpenBtn.addEventListener("click",function(){
   navLinks.style.right='0'}
  
 );
 CloseOpenBtn.addEventListener("click",function(){
   navLinks.style.right="-100%"
 });
     
    </script> */}
    </>);
      
  }
  export default Navbar;