import React, { useEffect, useState } from 'react'
import styles from './News.Module.css'

export default function News(props){

    const [newsObj,setNewsObj] = useState({})


    const fetchData = async ()=>{
        const res= await fetch(props.url)
        const data= await res.json()
        setNewsObj(data)
    }
    useEffect( () => {
        fetchData()
        return ()=>{
            setNewsObj([])
        }
    },[])
    
    
    




    function timeDifference(current, previous) {

        var msPerMinute = 60 * 1000;
        var msPerHour = msPerMinute * 60;
        var msPerDay = msPerHour * 24;
        var msPerMonth = msPerDay * 30;
        var msPerYear = msPerDay * 365;
    
        var elapsed = current - previous;
    
        if (elapsed < msPerMinute) {
             return Math.round(elapsed/1000) + ' seconds ago';   
        }
    
        else if (elapsed < msPerHour) {
             return Math.round(elapsed/msPerMinute) + ' minutes ago';   
        }
    
        else if (elapsed < msPerDay ) {
             return Math.round(elapsed/msPerHour ) + ' hours ago';   
        }
    
        else if (elapsed < msPerMonth) {

            if (Math.round(elapsed/msPerDay)>1) return Math.round(elapsed/msPerDay) + ' days ago'
            return '1 day ago'
            
        }
    
        else if (elapsed < msPerYear) {
            return Math.round(elapsed/msPerMonth) + ' months ago';   
        }
    
        else {
            return Math.round(elapsed/msPerYear ) + ' years ago';   
        }
    }
    
   
    function url_domain(data) {
        var    a      = document.createElement('a');
               a.href = data;
        return a.hostname;
      }

    return(
        <div className={styles.newsContainer}>
            <div className={styles.upperContainer}>
                <span className={styles.number}>{props.number}.</span>
                <a href={newsObj.url} className={styles.newsTitle}> {newsObj.title}</a>
                <span className={styles.sourceWebsite}> ({url_domain(newsObj.url)})</span>
            </div>
            <div className={styles.lowerContainer}>
                <span className className="pointsCount">{newsObj.score} points </span>
                <span>by: </span>
                <a href={`https://news.ycombinator.com/user?id=${newsObj.by}`}className={styles.username}>{newsObj.by}</a>
                <span className="timeAgo"> {timeDifference(new Date(),newsObj.time*1000)} </span>
                | hide |  
                {newsObj.kids ? " "+newsObj.kids.length + " comments" : " discuss"}
            </div>
        </div>
    )
}