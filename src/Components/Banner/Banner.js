 import axios from '../../axios'
import { API_KEY,imageUrl } from "../../constants/constant";
import  "./Banner.css";
import React from "react";
import { useEffect,useState } from "react";
import urlId from '../Rowpost/Rowpost'
import YouTube from 'react-youtube';

 function Banner(){
  const [movie, setMovie] =useState()
  const [play,setPlay]=useState()
  
   useEffect(() => {
      axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
         
         setMovie(response.data.results[Math.floor(Math.random() * 10) ])
      })
      },[])

      const postId=(id)=>{axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then(response=>{
           if(response.data.results.length!==0){
              setPlay(response.data.results[0])
           }else{
              console.log('Array is empty')
           }
        }) 
        


      }

const opts={
   height:'390',
   width:'100%',

   playerVars:{
      autoplay:0,
   },
}


  


       


   return( 
   <div className='banner'>
     
 {play ? <YouTube className='banner-video' videoId={play.key} opts={opts}/> :
<div onClick={(e)=>postId(movie.id)} className='banner-img' style={{backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path:""})`}} 
src={movie ? imageUrl+movie.backdrop_path:""}  alt="" >
<h1 className='title'>{movie ? movie.title:''}</h1>
<p className='para'>{movie ? movie.overview:''}</p>
</div>}

    </div>

        
   )}

   export default Banner
