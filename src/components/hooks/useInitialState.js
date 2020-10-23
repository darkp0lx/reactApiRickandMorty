import {useState,useEffect} from 'react'

const useInitialState=(API)=>{
  const[videos,setVideos]=useState([]);
  useEffect(()=>{
    window.fetch(API)
      .then(response=>response.json())
      .then(data=>setVideos(data.results))
  },[])
  return videos
}
export default useInitialState
