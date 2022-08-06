import Carousel from 'react-bootstrap/Carousel';
import '../assests/css/CarouselSection.css';
import cimg from '../assests/img/banner.png';

function CarouselSection() {
  return (
    <div className='CarouselDiv'>
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={cimg}
          alt="First slide"
          width="100%"
        />
        </Carousel.Item>
      
    </Carousel>
    </div>
  );
}

export default CarouselSection;