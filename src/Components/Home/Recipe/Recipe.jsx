import { useState,useEffect  } from 'react';
import './Recipe.css';
import {FiHeart} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../../Configuration/firebase';
export const Recipe = () => {
    const recCollectionRef = collection(db, 'categories');
    const [Recipe,setRecipe]=useState([]);
    useEffect(()=>{
        const getRecipes=async()=>{
            const data = await getDocs(recCollectionRef);
            console.log("fetched : " , data )
            setRecipe(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
          };
          getRecipes();
    },[])

    return(
        <div className="mainDiv">
            <div>{
            Recipe
            .map((rec, i) => {
                return(
                <div className="grid-container">
                <div className="grid-item">
                <Link to={`/ing/${rec.id}`}>
                    <div className='grid-item-internal'>
                    <p>{rec.RecipeName}</p>
                    <FiHeart className='icon'/>
                    </div>
                    <div className='imgRec'><img width="100%" src={rec.ImageLink} alt="" srcset="" /></div>
                    </Link>
                </div>
                
            </div>)
                }
                )}
            
            </div>
        </div>
    )
}