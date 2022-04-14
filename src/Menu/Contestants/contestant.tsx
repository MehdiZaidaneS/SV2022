import React, { useState } from 'react'
import Marta from "../Pics/Marta.jpg"
import Kiko from "../Pics/Kiko.jpg"
import Ainhoa from "../Pics/Ainhoa.jpg"
import Nacho from "../Pics/Nacho.jpg"
import Ignacio from "../Pics/Ignacio.jpg"
import Anabel from "../Pics/Anabel.jpg"
import Anuar from "../Pics/Anuar.jpeg"
import Ruben from "../Pics/Ruben.jpeg"
import Charo from "../Pics/Charo.jpg"
import Ana from "../Pics/Ana.png"
import Mariana from "../Pics/Mariana.jpeg"
import Alejandro from "../Pics/Alejandro.jpg"
import Desiree from "../Pics/Desiree.png"
import Juan from "../Pics/Juan.jpg"
import Tania from "../Pics/Tania.png"
import Yulen from "../Pics/Yulen.jpg"
import styles from "./contestant.module.css"

type MenuProps = {
}

const Contestant: React.FC<MenuProps> = () => {

   const contestants = [
        {
          name: "Yulen Pereira",
          age: 26,
          profession: "Esgrimista",
          realitys: 0,
          wonRealitys: 0,
          img: Yulen,
          id: 15
        },
        {
          name: "Tania Medina",
          age: 23,
          profession: "Influencer",
          realitys: 1,
          wonRealitys: 0,
          img: Tania,
          id: 14
        },
        {
          name: "Desiree Rodriguez",
          age: 36,
          profession: "-",
          realitys: 1,
          wonRealitys: 0,
          img: Desiree,
          id: 13
        },
        {
          name: "Alejandro Nieto",
          age: 32,
          profession: "Modelo",
          realitys: 2,
          wonRealitys: 0,
          img: Alejandro,
          id: 12
        },
        {
          name: "Juan Muñoz",
          age: 56,
          profession: "Actor y humorista",
          realitys: 0,
          wonRealitys: 0,
          img: Juan,
          id: 11
        },
        {
            name: "Ana Luque",
            age: 42,
            profession: "-",
            realitys: 0,
            wonRealitys: 0,
            img: Ana,
            id: 10
        },
        {
            name: "Ruben Sanchez",
            age: 40,
            profession: "Culturista",
            realitys: 0,
            wonRealitys: 0,
            img: Ruben,
            id: 9
        },
        {
            name: "Anuar Beno",
            age: 23,
            profession: "-",
            realitys: 0,
            wonRealitys: 0,
            img: Anuar,
            id: 8
        },
        {
            name: "Charo Vega",
            age: 65,
            profession: "-",
            realitys: 0,
            wonRealitys: 0,
            img: Charo,
            id: 7
        },
        {
            name: "Mariana Rodriguez",
            age: 31,
            profession: "Modelo",
            realitys: 1,
            wonRealitys: 0,
            img: Mariana,
            id: 6
        },
        {
            name: "Ignacio de Borbon",
            age: 21,
            profession: "Modelo",
            realitys: 0,
            wonRealitys: 0,
            img: Ignacio,
            id: 5
        },
        {
           name: "Anabel Pantoja",
           age: 35,
           profession: "Colaboradora de TV",
           realitys: 3,
           wonRealitys: 0,
           img: Anabel,
           id: 4
       },
       {
           name: "Marta Peñate",
           age: 30,
           profession: "Influencer",
           realitys: 3,
           wonRealitys: 0,
           img: Marta,
           id: 3
       },
       {
          name: "Ainhoa Cantalapiedra",
          age: 41,
          profession: "Cantante",
          realitys: 1,
          wonRealitys: 1,
          img: Ainhoa,
          id: 2
         },
         {
          name: "Kiko Matamoros",
          age: 65,
          profession: "Colaborador de TV",
          realitys: 1,
          wonRealitys: 0,
          img: Kiko,
          id: 1
         },
         {
          name: "Nacho Palau",
          age: 51,
          profession: "Escultor",
          realitys: 0,
          wonRealitys: 0,
          img: Nacho,
          id: 0
         }
   ]
  
   const [select, setSelect] = useState("Name");
  

 
    if(select === "Age"){
      contestants.sort((a,b) => b.age - a.age)
    }else if(select === "Name"){
      contestants.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    }else if(select === "Age2"){
      contestants.sort((a,b) => a.age - b.age)
    }else if(select === "Reality Won"){
      contestants.sort((a,b) => b.wonRealitys - a.wonRealitys)
    }else if(select === "Reality Won2"){
      contestants.sort((a,b) => a.wonRealitys - b.wonRealitys)
    }else if(select === "Realitys"){
      contestants.sort((a,b) => b.realitys - a.realitys)
    }else if(select === "Realitys2"){
      contestants.sort((a,b) => a.realitys - b.realitys)
    }else if(select === "Name2"){
      contestants.sort((a,b) => (b.name > a.name) ? 1 : ((a.name > b.name) ? -1 : 0))
    }
       
    
         
            


  return (
    <div>
      <h1>Concursantes oficiales:</h1>
      <div className={styles.contestant}>
         <table className={styles.contestants}>
           <tr>
               <th><button onClick={() =>select === "Name"? setSelect("Name2"): setSelect("Name")}>Nombre</button></th>
               <th><button onClick={() => select=== "Age"? setSelect("Age2"): setSelect("Age")}>Edad</button></th>
               <th><button>Profesion</button></th>
               <th><button onClick={() => select === "Realitys"? setSelect("Realitys2"): setSelect("Realitys")}>Realitys participados</button></th>
               <th><button onClick={() => select === "Reality Won"? setSelect("Reality Won2"): setSelect("Reality Won")}>Realitys ganados</button></th>
           </tr>
         {
             contestants.map(x => {
               return(
                 <tr key={x.id}>
                   <td>{x.name}</td>
                   <td>{x.age}</td>
                   <td>{x.profession}</td>
                   <td>{x.realitys}</td>
                   <td>{x.wonRealitys}</td>
                 </tr>
             )})
         }
         </table>  
      </div>
    </div>
  )
}

export default Contestant
