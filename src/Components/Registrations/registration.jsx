import "./registration.css";
import {TbChefHat} from 'react-icons/tb';
import { Link } from "react-router-dom";
import { signInWithGoogle } from "../../Configuration/firebase";
import { Navigate } from "react-router-dom";
import {useState} from 'react'
//import { useHistory } from 'react-router-dom'


export const Registration = () => {
  
//const history = useHistory()
let [ isSignedIn , setIsSignedIn ] = useState(false) 

const handleSignIn = async () => {
    let res = await signInWithGoogle()
    setIsSignedIn( res )
    console.log("signed in : " , isSignedIn)
    
    //history.push("/home")
};
  return (
    <div className="mainPage">
      {
        isSignedIn ? <Navigate replace to="/home" /> :<></>

      }
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
          <button onClick ={handleSignIn} className='regButton'><TbChefHat className="chefIcon"/> Sign In with Google</button>
        </div>
      </div>
    </div>
  );
};