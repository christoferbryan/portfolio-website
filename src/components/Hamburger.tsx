import { useEffect, useState } from "react";
import { useStateContext } from "./StateContext";

const Hamburger : React.FC = () => {
    const {sidebarOpen, setSidebarOpen} = useStateContext();
    const [scroll, setScroll] = useState<boolean>(false);

    const handleButtonClick = () => {
        setSidebarOpen(!sidebarOpen);
    }

    useEffect(() => {
        const handleScroll = () => {
            const headerElement = document.getElementById("header");

            if(window.scrollY > window.innerHeight){
                setScroll(true);
                if(headerElement){
                    headerElement.classList.add("hidden");
                }
            }
            else {
                if(headerElement){
                    headerElement.classList.remove("hidden");
                }
                setScroll(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

    }, [])

    return(
        <>
            <div className={`ham-menu ${scroll ? 'scroll' : ''}`} id="ham-menu">
                <button onClick={handleButtonClick}>
                    <span>
                        <i className='fa fa-bars'></i>
                    </span>
                </button>
            </div>
        </>
    )
}

export default Hamburger;