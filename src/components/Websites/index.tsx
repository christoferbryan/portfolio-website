import './style.css';
import { DUMMY_WEBSITE } from './dummy_website';
import WebsiteList from './WebsiteList';

const Website : React.FC = () => {
    return (
        <>
            <div className='website-container'>
                <div className='website-grid'>
                    <div className='website-item'>
                        {
                            DUMMY_WEBSITE[0].map( (website) => (
                                <div key={website.id}>
                                    <WebsiteList {...website}/>
                                </div>
                            ))
                        }
                        {
                            DUMMY_WEBSITE[0].map( (website) => (
                                <div key={website.id}>
                                    <WebsiteList {...website}/>
                                </div>
                            ))
                        }
                    </div>
                    <div className='website-item-2'>
                        {
                            DUMMY_WEBSITE[1].map( (website) => (
                                <div key={website.id}>
                                    <WebsiteList {...website}/>
                                </div>
                            ))
                        }
                        {
                            DUMMY_WEBSITE[1].map( (website) => (
                                <div key={website.id}>
                                    <WebsiteList {...website}/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Website;