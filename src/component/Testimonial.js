import '../assests/css/Testimonial.css';
import img from '../assests/img/testimonial.png';

function Testimonial(){
 
    return(<>
    <div className='testimonialDiv'>
    <div>
    <img 
        src={img}
        />
        <i class="fa-solid fa-quote-left fa-3x"></i>
        <p>Aspire Solutions has top notch people and service.
         Angie, Ian and Zach are all professional, caring and spend the time you need. 
         Being someone who is not computer savvy I appreciate having a team that will provide me with 
         honest information and choices where I can do it myself or have them do it for me.</p>
         <p>computer Science </p>
         <p>Date</p>
         <span className='testispan'><i className="fa-solid fa-quote-right fa-3x"></i></span>
         <h3>Muhammad Ali</h3>

    </div>
        
    </div>


    </>);

}


export default Testimonial;