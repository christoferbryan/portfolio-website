import './style.css';

const About : React.FC = () => {
    return (
        <div className="grid-col" id="about">
            <div className="grid-item">
                <h3>About</h3>
            </div>
            <div className="grid-item">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur.
                </p>
            </div>
        </div>
    )
}

export default About;