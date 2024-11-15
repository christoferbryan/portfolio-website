import './style.css';

interface WebsiteListProps{
    image : any
    link? : string
}


const WebsiteList : React.FC<WebsiteListProps> = ( {image} ) => {
    return (
        <>
            <div className='container-website'>
                <img src={image} />
                <div className='container-website-button'>
                    <button>
                        <span>
                            Visit the website <i className='ri-arrow-right-up-line'></i>
                        </span>
                    </button>
                </div>
            </div>
        </>

    )
}

export default WebsiteList;