import { Link } from "react-router-dom";
import './style.css';

interface WorkProps {
    title : string;
    desc: string;
    link: string;
}

const Work : React.FC<WorkProps> = ( { title, desc, link }) => {
    return (
        <>
            <div className="work-container">
                <div className="work-item">
                    <div className="work-desc">
                        <h1>{ title }</h1>
                        <p>{ desc }</p>
                    </div>
                    <div className="work-button">
                        {/* <Link to={ link } target="_blank"> */}
                            <button>
                                <span>
                                    <i className='ri-arrow-right-up-line'></i>
                                </span>
                            </button>
                        {/* </Link> */}
                    </div>
                </div>
                <hr />
            </div>
        </>
    )
}

export default Work;