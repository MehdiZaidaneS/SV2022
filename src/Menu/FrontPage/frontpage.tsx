import React from 'react'
import styles from "./frontpage.module.css"


type FrontpageProps = {
  img: string,
  titular: string
}

const Frontpage: React.FC<FrontpageProps> = ({img, titular}) => {
  return (
    <div className={styles.frontPageBlock}>
      <div className={styles.frontpage}>
        <img src={img} alt=""></img>
       </div> 
      <h1>{titular}</h1>
    </div>
    
  )
}

export default Frontpage
