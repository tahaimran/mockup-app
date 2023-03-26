import './Recipe.css';
import {FiHeart} from 'react-icons/fi';
import { Link } from 'react-router-dom';

export const Recipe = () => {
    return(
        <div className="mainDiv">
            <div className="grid-container">
                <div className="grid-item">
                <Link to='/ing'>
                    <div className='grid-item-internal'>
                    <p>Briyani</p>
                    <FiHeart className='icon'/>
                    </div>
                    <div className='imgRec'><img src="https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01-750x750.jpg" alt="Briyani" /></div>
                    </Link>
                </div>

                <div className="grid-item">
                    <div className='grid-item-internal'>
                    <p>Briyani</p>
                    <FiHeart className='icon'/>
                    </div>
                    <div className='imgRec'><img src="https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01-750x750.jpg" alt="Briyani" /></div>
                </div>
                <div className="grid-item">
                    <div className='grid-item-internal'>
                    <p>Briyani</p>
                    <FiHeart className='icon'/>
                    </div>
                    <div className='imgRec'><img src="https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01-750x750.jpg" alt="Briyani" /></div>
                </div>
                <div className="grid-item">
                    <div className='grid-item-internal'>
                    <p>Briyani</p>
                    <FiHeart className='icon'/>
                    </div>
                    <div className='imgRec'><img src="https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01-750x750.jpg" alt="Briyani" /></div>
                </div>
                <div className="grid-item">
                    <div className='grid-item-internal'>
                    <p>Briyani</p>
                    <FiHeart className='icon'/>
                    </div>
                    <div className='imgRec'><img src="https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01-750x750.jpg" alt="Briyani" /></div>
                </div>
                <div className="grid-item">
                    <div className='grid-item-internal'>
                    <p>Briyani</p>
                    <FiHeart className='icon'/>
                    </div>
                    <div className='imgRec'><img src="https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01-750x750.jpg" alt="Briyani" /></div>
                </div>
            </div>
        </div>
    )
}