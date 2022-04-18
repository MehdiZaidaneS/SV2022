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
        <img src={img} alt="" ></img>
       </div>
       <div className={styles.textFrontPage}>
         <h1>{titular}</h1>
         <p>Cada vez falta menos para el estreno de ' Supervivientes 2022', el concurso estrella de Telecinco. Los concursantes ya confirmados para esta edición empiezan a llegar a Madrid y esperan a poner rumbo a Honduras. Aunque la fecha de estreno no es oficial, en 'Sálvame', Adela González y Nuria Marín han desvelado que el reality llegará el próximo jueves, 21 de abril.<br></br><br></br>
        Estos son los concursantes confirmados hasta ahora:</p>
       </div>
      
    </div>
    
  )
}

export default Frontpage
