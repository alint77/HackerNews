import React, { useEffect, useState } from "react";
import styles from "./News.Module.css";
import timeDifference from "../UnixToRelativeTime";

export default function News(props) {
  const [newsObj, setNewsObj] = useState({});

  const fetchData = async () => {
    const res = await fetch(props.url);
    let data = await res.json();
    if(!data){
        data = {
            url:"#",
            title:"Undefined",
            score:0,
            by:"Null",
            time:Date.now()/1000,
            kids:[]
        }
         
    }


    setNewsObj(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.newsContainer}>
      <div className={styles.upperContainer}>
        <span className={styles.number}>{props.number}.</span>
        <a href={newsObj.url} className={styles.newsTitle}>
          {" "}
          {newsObj.title}
        </a>
        <span className={styles.sourceWebsite}>
          {" "}
          ({url_domain(newsObj.url)})
        </span>
      </div>
      <div className={styles.lowerContainer}>
        <span className="pointsCount">{newsObj.score} points </span>
        <span>by: </span>
        <a
          href={`https://news.ycombinator.com/user?id=${newsObj.by}`}
          className={styles.username}
        >
          {newsObj.by}
        </a>
        <span className="timeAgo">
          {" "}
          {timeDifference(new Date(), newsObj.time * 1000)}{" "}
        </span>
        | hide |
        {newsObj.kids ? " " + newsObj.kids.length + " comments" : " discuss"}
      </div>
    </div>
  );
}

function url_domain(data) {
    var a = document.createElement("a");
    a.href = data;
    return a.hostname;
}