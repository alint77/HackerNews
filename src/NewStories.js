import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import News from './Components/News';
import styles from './NewStories.module.css'

export default function NewStories(props){

    const [newStories,setNewStories] = useState([])
    const [p,setP] = useState(props.match.params.p ? parseInt(props.match.params.p) : 0)

    
    console.log(p);
    let start =p*30
    let newsComps
    const fetchData = async ()=>{
        console.log('fetch');
        const res=  await fetch("https://hacker-news.firebaseio.com/v0/newstories.json")
        const data= await res.json()
        let resStories=[]
        data.slice(start,start+30).map((v,i)=>resStories[i]=`https://hacker-news.firebaseio.com/v0/item/${v}.json`)


        newsComps= resStories.map((v,i)=><News url={v} key={i} number={i+1+start}></News>)
        setNewStories(newsComps)

    }

    useEffect(()=>{
        fetchData()
        return ()=>{}
    },[p])

    
    const inc = ()=>{
        setP(p+1)
    }
    return(
        <div>
            {newStories}
            <div className={styles.more}>
                <a onClick={inc}>More</a>
            </div>
        </div>
    )
}