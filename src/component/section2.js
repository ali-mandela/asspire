import '../assests/css/Carousell.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import icon1 from '../assests/img/icon1.png';
import icon2 from '../assests/img/icon2.png';
import icon3  from '../assests/img/Icon3.png';
import 'bootstrap/dist/css/bootstrap.min.css';
function Carousel() {
  return (<>
  <div className='carouselMainDiv'>
    <div className='rowdiv1'>
    <h1>BUSINESS IT SERVICES IN DENVER, CO</h1></div>
    <Container className='sec2div'>
   
      <Row>
        <Col  sm={12} md={4} lg={4}><div>
        <img src={icon1}
        alt="icon 1 image"/>
        <h3>EXPERT IT SUPPORT & IT SERVICES</h3>
        <p>Choosing the right provider of IT services in Denver can be challenging and confusing. With a vast number of companies offering IT products and services, it is hard to know which one is the best fit for your company. The cost to continuously switch IT companies can become expensive when you consider their time to get to know your network. Our clients utilize our services for many years.</p>
        <a href='#'>Learn More</a></div></Col>
        <Col  sm={12} md={4} lg={4}> <div>
        <img src={icon2}
        alt="icon 1 image"/>
        <h3>EXPERT IT SUPPORT & IT SERVICES</h3>
        <p>Choosing the right provider of IT services in Denver can be challenging and confusing. With a vast number of companies offering IT products and services, it is hard to know which one is the best fit for your company. The cost to continuously switch IT companies can become expensive when you consider their time to get to know your network. Our clients utilize our services for many years.</p>
        <a href='#'>Learn More</a></div></Col>
        <Col  sm={12} md={4} lg={4}><div>
        <img src={icon3}
        alt="icon 1 image"/>
        <h3>EXPERT IT SUPPORT & IT SERVICES</h3>
        <p>Choosing the right provider of IT services in Denver can be challenging and confusing. With a vast number of companies offering IT products and services, it is hard to know which one is the best fit for your company. The cost to continuously switch IT companies can become expensive when you consider their time to get to know your network. Our clients utilize our services for many years.</p>
        <a href='#'>Learn More</a></div></Col>
      </Row>
      </Container>
      <div  className='sec3div'>
      <Container>
      <Row>
      <div className='rowDiv'>
        <Col sm={12} lg={6}>
         <div className='divBody'> 
         <a href=''>
                <h3>The Aspire Guarantee </h3>
                <p>Service you can trust.</p>
            </a></div>  </Col>
        <Col sm={12}lg={6} > <div className='divBody'> <a href=''>
                <h3>IT & Network Security for SMB</h3>
                <p>Next level cybersecurity.</p>
            </a></div>  </Col>
            </div>
      </Row>
    
    </Container>
    </div>
    </div>
    </>
  );
}

export default Carousel;