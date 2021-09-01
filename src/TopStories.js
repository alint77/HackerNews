import {useEffect,useState} from 'react'
import News from './Components/News'

export default function TopStories(props){

    const [topStoriesUrls,setTopStoriesUrls] = useState([])


    
    let p=props.match.params.p

    if(!p)p=0

    let start = p*30
    console.log(p);
    console.log(start);

    const fetchData = async ()=>{
        const res=  await fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
        const data= await res.json()
        let resStories=[]
        data.slice(start,start+30).map((v,i)=>resStories[i]=`https://hacker-news.firebaseio.com/v0/item/${v}.json`)
        setTopStoriesUrls(resStories)
    }
    
    useEffect(()=>{
        fetchData()
    },[]);

    const newsComps = topStoriesUrls.map((v,i)=><News url={v} key={i} number={i+1+start}></News>)



    return(
        <div>
            {newsComps}
        </div>
    )
}