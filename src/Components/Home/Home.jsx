import {FiSearch} from 'react-icons/fi';
import { SearchBar } from './SearchBar/SearchBar';
import './home.css';
import { Recipe } from './Recipe/Recipe';

export const Home = () => {
    return(
        <div>
            <div className='headingdiv1'>
                <h2 className='heading1'> Check It Out </h2>

                <SearchBar/>

            </div>


            <div className='headingdiv2'>
                <h2 className='heading2'>Pick the recipe</h2>
                <Recipe/>
            </div>
        </div>  
    )
}