
import axios from '../../axios'
import { API_KEY,imageUrl } from '../../constants/constant'
import React,{useEffect,useState} from 'react'
import './Rowpost.css'
import YouTube from 'react-youtube'





function Rowpost(props) {

    const [movie,setMovie]=useState([])
    const [urlId,setUrlId]=useState('')

    useEffect(()=>{
        axios.get(props.url).then(response=>{
            console.log(response.data)
            setMovie(response.data.results)
        })
    }, [])
  
    const opts = {
        height: '390',
        width: '100%',
        
        playerVars: {   
          autoplay: 0,
        },
      }; 
  


      const handleMovie = (id)=>{
        console.log(id) 
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
            if(response.data.results.length!==0){
                setUrlId(response.data.results[0])
            }else {
                console.log('Array is empty')
            }
       })
   }   
    
 console.log(urlId)
    return (
        <div className='row1'>
            
            <div className='posters'>
            <h2 className='prime'>prime</h2><h2 className='h2'>{props.title}</h2>
            {urlId && <YouTube videoId={urlId.key} opts={opts} />}
            <div className='postrow'>
                
              {movie.map((obj)=>
              <img onClick={(e)=>handleMovie(obj.id)} className={props.isMedium ? 'postTwo':'post'}  
              src={`${imageUrl+obj.poster_path}`} alt=""  />
                    
                )}
                
            </div> 
            
            </div>
            <div>
            
            </div>
        </div>
    )
}

export default Rowpost
