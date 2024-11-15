import './style.css';
import { useStateContext } from '../StateContext';
import man from '../../assets/man.png'
import hand from '../../assets/hand.png';

const Hero : React.FC = () => {
    const { sidebarOpen, setSidebarOpen } = useStateContext() ;

    const handleButtonClick = () => {
        setSidebarOpen(!sidebarOpen);
    }

    return (
        <>
            <div className='hero-section'>
                <div className='picture'>
                    <img src={man} />
                </div>
                <div className='hero-desc'>
                    <h1>WebFlow Developer - UI / UX</h1>
                </div>
                <div className='interact'>
                    <button onClick={handleButtonClick}>Hi I'm Bryan</button>
                    <div className='icon'>
                        <img src={hand} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;