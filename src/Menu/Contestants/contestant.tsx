import React, { useState } from 'react'
import Marta from "../Pics/MartaPenate.jpg"
import Kiko from "../Pics/KikoMatamoros.jpg"
import Ainhoa from "../Pics/AinhoaCantalapiedra.jpg"
import Nacho from "../Pics/NachoPalau.jpg"
import Ignacio from "../Pics/IgnacioDeBorbon.jpg"
import Anabel from "../Pics/AnabelPantoja.jpg"
import Anuar from "../Pics/AnuarBeno.jpg"
import Ruben from "../Pics/RubenSanchez.jpg"
import Charo from "../Pics/CharoVega.jpg"
import Ana from "../Pics/AnaLuque.jpg"
import Mariana from "../Pics/MarianaRodriguez.jpg"
import Alejandro from "../Pics/AlejandroNieto.jpg"
import Desiree from "../Pics/DesireeRodriguez.jpg"
import Juan from "../Pics/JuanMunoz.jpg"
import Tania from "../Pics/TaniaMedina.jpg"
import Yulen from "../Pics/YulenPereira.jpg"
import styles from "./contestant.module.css"

type ContestantProps = {
  name: string
          age: number
          profession: string
          realitys: number
          wonRealitys: number
          img: string
          id: number
}

const Contestant: React.FC<any> = (props) => {

   const contestants: ContestantProps[] = [
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
          profession: "Artista",
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
            profession: "Bloguera",
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
            profession: "Actor",
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
   const [currentItem, setCurrentItem] = useState<ContestantProps|null>(null);
   
  

 
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
       
    
     const nextImg= (project: ContestantProps) =>{
         let nextIndex = 0;
         let currentIndex = contestants.findIndex(x => project.id === x.id)
         nextIndex = currentIndex === contestants.length - 1 ?  0  : currentIndex + 1;
         setCurrentItem(contestants[nextIndex]);
        }

        const previousImg= (project: ContestantProps) =>{
          let nextIndex = 0;
          let currentIndex = contestants.findIndex(x => project.id === x.id)
          nextIndex = currentIndex === 0 ? contestants.length - 1 :  currentIndex - 1;
          setCurrentItem(contestants[nextIndex]);
        }
            


  return (
    <div>
      {
      currentItem &&
        <div className={styles.picture}>
            <button onClick={()=> previousImg(currentItem)}>Left</button>
            <img src={currentItem.img} alt=""></img>
            <button onClick={() => nextImg(currentItem)}>Right</button>
        </div>

      }
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
                   <td><button onClick={() => setCurrentItem(x)}>{x.name}</button></td>
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
