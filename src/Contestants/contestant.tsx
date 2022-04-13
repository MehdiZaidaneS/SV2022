import React from 'react'
import styles from "./contestant.module.css"

type ContestantProps = {
  img: string,
  name: string,
  age: number,
  profession: string,
  realitys: number,
  wonRealitys: number
}

const Contestant: React.FC<ContestantProps> = ({name, age, profession, realitys, wonRealitys, img}) => {
  return (
    <div className={styles.contestantsBlock}>
      {/* <img src={img} width={150} height={150} alt=""></img> */}
      {/* <ul>
          <li>Nombre: {name}</li>
          <li>Edad: {age}</li>
          <li>Profesion: {profession}</li>
          <li>Realitys participado: {realitys}</li>
          <li>Realitys ganados: {wonRealitys}</li>
      </ul> */}

      
      <tr>
          <td>{name}</td>
          <td>{age}</td>
          <td>{profession}</td>
          <td>{realitys}</td>
          <td>{wonRealitys}</td>
      </tr>        
    </div>
  )
}

export default Contestant
