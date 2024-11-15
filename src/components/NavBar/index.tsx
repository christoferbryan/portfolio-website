import './style.css';
import { HashLink } from 'react-router-hash-link';
// import { Link } from 'react-router-dom';

const NavBar : React.FC = () => {
    return (
        <>
            <div id='header' className='header'>
                <nav>
                <h3>Christofer Bryan Natanael</h3>
                <ul>
                    <li>
                        <HashLink smooth to='/#about'>About</HashLink>
                    </li>
                    <li>
                        <HashLink smooth to='/#work'>Work</HashLink>
                    </li>
                    <li>
                        {/* <Link to='/contact'>Contact</Link> */}
                        <a href=''>Contact</a>
                    </li>
                </ul>
                </nav>
            </div>
        </>
    );
};

export default NavBar;