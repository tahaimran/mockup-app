import "./registration.css";
import {TbChefHat} from 'react-icons/tb';
import { Link } from "react-router-dom";
export const Registration = () => {
  return (
    <div className="mainPage">
      <div className="topBar">
        <div>12.00</div>
          <div>SB</div>
      </div>
      <div className="bookFish">
        <img src="https://png.pngitem.com/pimgs/s/7-77375_computer-icons-book-clip-art-stack-of-books.png" alt="Logo" />
      </div>
      <div className="bottom">
        <div className="welcomeText">
          <h2>It's <span className="cookText">Cooking</span> <br />Time</h2> 
          <p className="headlineText">Your Private Coach in your Lovely kitchen</p>
        </div>
        <div className="RegButtonSection">
          <button className='regButton'><TbChefHat className="chefIcon"/> Register</button> 
          <Link className="SignLink" to="/login"><p >or Sign</p></Link>
        </div>
      </div>
    </div>
  );
};
