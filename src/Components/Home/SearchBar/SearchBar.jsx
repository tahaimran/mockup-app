import {FiSearch} from 'react-icons/fi';
import './Searchbar.css';

export const SearchBar = () => {
    return(
        <div className="Search">
            <input type='text' placeholder="What are you looking for?" className='inputfield'/>
            <div className="SearchIcon">
                <FiSearch/>
            </div>
        </div>
    )
}