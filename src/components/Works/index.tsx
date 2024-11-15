import Work from "./Work";
import './style.css';

const Works : React.FC = () => {
    return (
        <div className="grid-col-work" id="work">
            <div className="grid-item">
                <h3>Recent Work</h3>
            </div>
            <div className="grid-item">
                <Work 
                 title='Decodable.co'
                 desc='Brand Design - Webflow Development - Web Design'
                 link='https://www.decodable.co/'
                />
                <Work
                title='Gofirefly.io'
                desc='Brand Design - Webflow Development - Web Design'
                link='https://www.firefly.ai/'
                />
                <Work
                title='Blinkops.com'
                desc='Brand Design - Webflow Development - Web Design'
                link='https://www.blinkops.com/'
                />
                <Work
                title='Withkanvas.com'
                desc='Brand Design - Webflow Development - Web Design'
                link='https://www.withkanvas.com/'
                />
            </div>
        </div>
    )
}

export default Works;