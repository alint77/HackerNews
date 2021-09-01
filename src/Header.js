import React from 'react'
import styles from './Header.Module.css'
import {
    Link
} from "react-router-dom"

export default function Header(){
    return(
        <div className={styles.headerContainer}>
            <div className={styles.logoContainer}>Y</div>
            <div className={styles.linksContainer}>
                <div className={styles.title}><Link to='/top'>Hacker News</Link></div>
                <div className={styles.links}>
                    <span className={styles.link}><Link to='/new'>new</Link></span>|
                    <span className={styles.link}>past</span>|
                    <span className={styles.link}>comments</span>|
                    <span className={styles.link}>ask</span>|
                    <span className={styles.link}>show</span>|
                    <span className={styles.link}>jobs</span>|
                    <span className={styles.link}>submit</span>
                </div>
            </div>
            <div className={styles.login}>Login</div>
        </div>
        
    )
}