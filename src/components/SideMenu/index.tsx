// import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useStateContext } from "../StateContext";
import './style.css';

const SideMenu : React.FC = () => {
    const {sidebarOpen, setSidebarOpen} = useStateContext();
    const handleButtonClick = () => {
        setSidebarOpen(!sidebarOpen);
    }

    return(
        <div className={`menu-toggle-${sidebarOpen ? 'show' : ''}`}>
            <div className="menu">
                <div className="menu-list">
                    <div className="menu-item">
                        <a href=''>Home</a>
                    </div>
                    <div className="menu-item">
                        <HashLink to="/#about">About</HashLink>
                    </div>
                    <div className="menu-item">
                        <HashLink to="/#work">Work</HashLink>
                    </div>
                    <div className="menu-item">
                        {/* <Link to="/contact">Contact</Link> */}
                        <a href=''>Contact</a>
                    </div>
                </div>
                <nav>
                    <ul>
                        <li>Linkedin</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>Webflow</li>
                    </ul>
                </nav>
                <button onClick={handleButtonClick}>
                    <span>
                        <i className='ri-twitter-x-line'></i>
                    </span>
                </button>
            </div>
        </div>
    );
};

export default SideMenu;