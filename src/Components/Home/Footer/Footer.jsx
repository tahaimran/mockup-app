import {AiOutlineHome} from 'react-icons/ai';
import {MdPeopleOutline} from 'react-icons/md';
import {BsBookmark} from 'react-icons/bs';
import {CgProfile} from 'react-icons/cg';
import '../Footer/Footer.css';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return(
        <div className="main-footer">
            <AiOutlineHome className='Icon'/>
            <MdPeopleOutline className='Icon'/>
            <BsBookmark className='Icon'/>
           <Link to="/profile"><CgProfile className='Icon'/></Link> 
        </div>
    )
}