import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import News from './Components/News';
import styles from './NewStories.module.css'

export default function NewStories(props){

    const [newStories,setNewStories] = useState([])
    

    

    let pStr=props.match.params.p
    let p
    pStr ? p=parseInt(pStr) : p=0 
    let start =p*30
    const fetchData =  (newStoriesIdsArray)=>{

        let resStories=[]
        newStoriesIdsArray.slice(start,start+30).map((v,i)=>resStories[i]=`https://hacker-news.firebaseio.com/v0/item/${v}.json`)
        setNewStories(resStories)

    }

    useEffect(()=>{
        fetch("https://hacker-news.firebaseio.com/v0/newstories.json")
        .then(e=>e.json())
        .then(e=>fetchData(e))

    },[props])

    const newsComps= newStories.map((v,i)=><News url={v} key={v} number={i+1+start}></News>)

    return(
        <div>
            {newsComps}
            <div className={styles.more}>
                <Link to={'/new/'+(p+1)}>More</Link>
            </div>
        </div>
    )
}