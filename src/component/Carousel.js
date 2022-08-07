import Carousel from 'react-bootstrap/Carousel';
import bd1 from '../assests/img/banner_old_denver.jpg';
import bd2 from '../assests/img/banner_denver.jpg';
import bd3 from '../assests/img/banner_dashboard.jpg';
import '../assests/css/CarouselSection.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function Carousell() {
  return (
    <div className='cDiv'>
    <Carousel variant="dark">
      <Carousel.Item interval={100}>
        <img
          className="d-block w-100"
          src={bd3}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>EXPERIENCE MATTERS</h1>
          <p>With over 15,000 service calls under our belt, we've probably seen it before.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={100}>
        <img
          className="d-block w-100"
          src={bd2}
          alt="Second slide"
        />
        <Carousel.Caption>
            <h1>OLD SCHOOL DETAIL. NEW SCHOOL SKILLS</h1>
          <p>Our solutions leverage cutting-edge designs and technology.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={100}>
        <img
          className="d-block w-100"
          src={bd1}
          alt="Third slide"
        />
        <Carousel.Caption>
        



          <h1>WE'RE NOT NEW IN TOWN</h1>
          <p>
          We've worked with over 600 companies in Denver and counting.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Carousell;