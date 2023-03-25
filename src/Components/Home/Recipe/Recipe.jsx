import './Recipe.css';
import {FiHeart} from 'react-icons/fi';


export const Recipe = () => {
    return(
        <div className="mainDiv">
            <div className="grid-container">
                <div className="grid-item">
                    <p>Briyani</p>
                    <FiHeart className='icon'/>
                    <div><img src="" alt="" /></div>
                    <div className='addition'><button>+</button></div>
                </div>

                <div className="grid-item">
                    <p>Pulao</p>
                    <FiHeart className='icon'/>
                    <div><img src="" alt="" /></div>
                    <div className='addition2'><button>+</button></div>
                </div>

                <div className="grid-item">
                    <p>Karahi</p>
                    <FiHeart className='icon'/>
                    <div><img src="" alt="" /></div>
                    <div className='addition3'><button>+</button></div>
                </div>

                <div className="grid-item">
                    <p>Cheese</p>
                    <p>Burger</p>
                    <FiHeart className='icon'/>
                    <div><img src="" alt="" /></div>
                    <div className='addition4'><button>+</button></div>
                </div>

                <div className="grid-item">
                    <p>Beef</p>
                    <p>Burger</p>
                    <FiHeart className='icon'/>
                    <div><img src="" alt="" /></div>
                    <div className='addition5'><button>+</button></div>
                </div>

                <div className="grid-item">
                    <p>Milk</p>
                    <p>Shake</p>
                    <FiHeart className='icon'/>
                    <div><img src="" alt="" /></div>
                    <div className='addition6'><button>+</button></div>
                    
                </div>
                
            </div>
        </div>
    )
}