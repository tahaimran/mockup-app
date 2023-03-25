import './login.css';
import { Link } from 'react-router-dom';
export const Login = () => {
    // To Do:
    // 1- Hooks to save Name and Password 
    // 2- Display password option

    return(
        <div className="maincont">
            <div className="uphalf">
                <h2>Cook Book</h2>
                <p>Explore endless flavors with our recipe app!</p>
            </div>
            <div className="botthalf">
                <h2>Login</h2>
                <p>Sign in to continue.</p>
                <form for='Input'>
                    <label>
                        Name
                        <input type='text' className="name"></input>
                    </label>

                    <label>
                        Password
                        <input type='password' className="password"></input>
                    </label>
                </form>
                <Link className="SignLink" to="/home"><p >Homeeeee</p></Link>

            </div>
        </div>
    )
}