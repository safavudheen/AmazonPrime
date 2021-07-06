import axios from '../../axios'
import { API_KEY,imageUrl } from "../../constants/constant";
import  "./Banner.css";
import React from "react";
import { useEffect,useState } from "react";
import urlId from '../Rowpost/Rowpost'
import YouTube from 'react-youtube';

 function Banner(){
  const [movie, setMovie] =useState()
  
   useEffect(() => {
      axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
         
         setMovie(response.data.results[1])
      })
      },[])



       


   return( 
   <div className='banner'>
     
    
<img className='banner-img'src={movie ? imageUrl+movie.backdrop_path:""}  alt="" />


<h1 className='title'>{movie ? movie.title:''}</h1>
<p className='para'>{movie ? movie.overview:''}</p>
<div className='fade'></div>
    </div>

        
   )}

   export default Banner
