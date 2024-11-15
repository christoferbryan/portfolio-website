import pic from '../../assets/pic.png'
import './style.css';

const Footer : React.FC = () => {
    return (
        <>
            <div className="footer-container">
                <div className="footer-grid">

                    <div className="footer-item">
                        <div className="footer-title">
                            <h2>Have something in mind?</h2>
                            <div className="footer-details">
                                <img src={ pic } />
                                <h2>let's build it together.</h2>
                            </div>
                        </div>
                        <p>Built with 💖 by Bryan</p>
                    </div>

                    <div className='footer-item-2'>
                        <div className='footer-button'>
                            <button>
                                <span>Get in touch</span>
                            </button>
                        </div>
                        <nav>
                            <ul>
                                <li>LinkedIn</li>
                                <li>Twitter</li>
                                <li>Instagram</li>
                                <li>Webflow</li>
                            </ul>
                        </nav>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer;