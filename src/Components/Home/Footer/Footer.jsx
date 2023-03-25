import {AiOutlineHome} from 'react-icons/ai';
import {MdPeopleOutline} from 'react-icons/md';
import {BsBookmark} from 'react-icons/bs';
import {CgProfile} from 'react-icons/cg';
import '../Footer/Footer.css';

export const Footer = () => {
    return(
        <div className="main-footer">
            <AiOutlineHome className='Icon'/>
            <MdPeopleOutline className='Icon'/>
            <BsBookmark className='Icon'/>
            <CgProfile className='Icon'/>
        </div>
    )
}