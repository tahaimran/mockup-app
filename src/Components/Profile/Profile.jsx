import './Profile.css';
import {AiOutlineLeft} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import {FiEdit2} from 'react-icons/fi';
import {AiOutlineRight} from 'react-icons/ai';
import {CgDarkMode} from 'react-icons/cg';
import { useState } from 'react';
import { DarkModeToggle } from '@anatoliygatt/dark-mode-toggle';
import {BsGlobe} from 'react-icons/bs';
import {AiOutlineQuestionCircle} from 'react-icons/ai';
import {AiOutlineExclamation} from 'react-icons/ai';
import {AiOutlineLock} from 'react-icons/ai';
import {AiOutlineStar} from 'react-icons/ai';
import {AiOutlineShareAlt} from 'react-icons/ai';

export const Profile = () => {
    const [mode, setMode] = useState('dark');
    return (
        <div className="main-div">
            <header className="header">
                <Link to='/home'><AiOutlineLeft className='left-icon'/></Link>
                <h2>Profile</h2>
            </header>

            <div className='profile-div'>
                <img src='https://cdn-icons-png.flaticon.com/512/16/16363.png?w=740&t=st=1679831031~exp=1679831631~hmac=f624c04149009bf584a9d32565357f11547494466796f319a4f48430d91f02ea' alt='profile icon'/>
                <h3>Gunshot Spam</h3>
                <h4>gunshot@gungo.com</h4>
            </div>

            <div className='edit-div'>
                <FiEdit2 className='edit-icon'/>
                <p>Edit Profile</p>
                <AiOutlineRight className='right-icon'/>
            </div>

            <div className='general-div'>
                <h3>General Settings</h3>
            </div>

            <div className='dark-mode-div'>
                <CgDarkMode className='dark-icon'/>
                <div>
                    <p className='Mode'>Mode</p>
                    <p className='gray'>Dark & Light</p>
                    </div>
                <DarkModeToggle
                        className='dark-icon'
                        mode={mode}
                        dark="Dark"
                        light="Light"
                        size="sm"
                        inactiveTrackColor="#e2e8f0"
                        inactiveTrackColorOnHover="#f8fafc"
                        inactiveTrackColorOnActive="#cbd5e1"
                        activeTrackColor="#334155"
                        activeTrackColorOnHover="#1e293b"
                        activeTrackColorOnActive="#0f172a"
                        inactiveThumbColor="#1e293b"
                        activeThumbColor="#e2e8f0"
                        onChange={(mode) => {
                            setMode(mode);
                        }}
                />    
            </div>

            <div className='saved-div'>
                <BsGlobe className='globe-icon'/>
                <p>Saved</p>
                <AiOutlineRight/>
            </div>
            
            <div className='about-div'>
                <AiOutlineQuestionCircle className='question-icon'/>
                <p>About</p>
                <AiOutlineRight/>
            </div>
            
            <div className='terms-div'>
                <AiOutlineExclamation className='ex-icon'/>
                <p>Terms & Conditions</p>
                <AiOutlineRight/>
            </div>

            <div className='priv-div'>
                <AiOutlineLock className='lock-icon'/>
                <p>Privacy Policy</p>
                <AiOutlineRight/>
            </div>

            <div className='rate-div'>
                <AiOutlineStar className='star-icon'/>
                <p>Rate this App</p>
                <AiOutlineRight/>
            </div>

            <div className='share-div'>
                <AiOutlineShareAlt className='share-icon'/>
                <p>Share this App</p>
                <AiOutlineRight/>
            </div>
        </div>
    )
}