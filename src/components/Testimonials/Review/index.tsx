import './style.css';

interface ReviewProps {
    testimony : string;
    img : any;
    name : string;
    position : string;
}

const Review : React.FC<ReviewProps> = ({ testimony, img, name, position }) => {
    return(
        <>
            <div className='container'>
                <p>{ testimony }</p>
                <div className='reviewer'>
                    <img src = { img } />
                    <div className='description'>
                        <h2>{ name }</h2>
                        <p>{ position }</p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Review;