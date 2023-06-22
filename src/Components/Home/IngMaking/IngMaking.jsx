import React from "react";
import "./IngMaking.css";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { AiFillPlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState,useEffect  } from 'react';
import { getDocs, collection,addDoc } from 'firebase/firestore';
import { db } from '../../../Configuration/firebase';
import {useParams} from 'react-router-dom'
import { getAuth } from "firebase/auth";


export const IngMaking = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  //const user = Auth() ;
  const [userInfo, setUserInfo] = useState(null);
  const [recipeInfo, setRecipeInfo] = useState(null);
  console.log(user.uid);
  const handlebookmarks = () => {
    setUserInfo(user.uid);
    setRecipeInfo(id);
    {createBookmark()}
  }
  const { id } = useParams() 
  const bookmarkCollectionRef = collection(db, "Bookmarks");
  const createBookmark = async () => {
    await addDoc(bookmarkCollectionRef, {
      userId: user.uid,
      recipeId: id,
    });
    alert("Data Has Been Added");
    setUserInfo(null);
    setRecipeInfo(null);
  };
  const recCollectionRef = collection(db, 'categories');
  const [Recipe,setRecipe]=useState([]);

    useEffect(()=>{
        const getRecipes=async()=>{
            const data = await getDocs(recCollectionRef);
            setRecipe(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
          };
          getRecipes();
    },[])
  return (
    <div>{
      Recipe
      .filter( recipe => recipe.id === id )
      .map((rec, i) => {
          return (
            <div className="IngMaking">
              <div>
                <Link to="/home">
                  <BsFillArrowLeftCircleFill />
                </Link>
                <h1>{rec.RecipeName}</h1>
              </div>
              <div className='imgRec'><img width="100%" src={rec.ImageLink} alt="" srcset="" /></div>
              <div>
                <p>Serving People : 4-6</p>
                <h3>Ingredients</h3>
              </div>
              <div className="recipe-ingredient-wrapper">
                <ol>
                  {rec.Ingredient.map((recs, i) => {
                    return <li>{recs}</li>;
                  })}
                </ol>
                <ol>
                  {rec.Quantity.map((recs, i) => {
                    return <li>{recs}</li>;
                  })}
                </ol>
              </div>
              <AiFillPlusCircle onClick={handlebookmarks} className="circle" />
            </div>
          );})
    }
    </div>
  );
};
