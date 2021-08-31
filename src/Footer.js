import React from 'react'
import styles from './Footer.Module.css'

export default function Footer(){
    return(
        <div className={styles.footerContainer}>
            <div className={styles.description}>Applications are open for YC Winter 2022</div>
            <div className={styles.links}>
                <span className={styles.link}>Guidlines</span>|
                <span className={styles.link}>FAQ</span>|
                <span className={styles.link}>Lists</span>|
                <span className={styles.link}>API</span>|
                <span className={styles.link}>Security</span>|
                <span className={styles.link}>Legal</span>|
                <span className={styles.link}>Apply to YC</span>|
                <span className={styles.link}>Contact</span>
            </div>
        </div>
    )
}