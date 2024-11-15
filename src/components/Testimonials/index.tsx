import './style.css'
import Review from './Review';
import pic1 from '../../assets/pic1.png';
import pic2 from '../../assets/pic2.png';

const Testimonial : React.FC = () => {
    return (
        <>
            <div className="testimonial-container">
                <div className="testimonial-grid">
                    <div className="testimonial-item">
                        <h3>Testimonials</h3>
                    </div>
                    <div className="testimonial-item">
                        <Review 
                        testimony='“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."'
                        img={pic1}
                        name='Ayush Raj'
                        position='VP of Marketing @ Webflow'
                        />
                        <Review 
                        testimony='“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."'
                        img={pic2}
                        name='Alex Cattoni'
                        position='Founder @ ABC'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial;