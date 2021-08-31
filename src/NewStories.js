import {useState,useEffect} from 'react'
import News from './Components/News';

export default function NewStories(props){

    const [newStories,setNewStories] = useState([])
    useEffect(async ()=>{
        const res= await fetch("https://hacker-news.firebaseio.com/v0/newstories.json")
        const data= await res.json()
        let resStories=[]
        data.slice(0,30).map((v,i)=>resStories[i]=`https://hacker-news.firebaseio.com/v0/item/${v}.json`)
        setNewStories(resStories)
    },[]);

    const newsComps = newStories.map((v,i)=><News url={v} key={i} number={i+1}></News>)


    return(
        <div>
            {newsComps}
        </div>
    )
}