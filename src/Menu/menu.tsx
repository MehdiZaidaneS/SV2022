import React from 'react'
import Frontpage from './FrontPage/frontpage'
import noticia from "./Pics/Supervivientes.jpg"
import Contestant from './Contestants/contestant'

// import styles from "./menu.module.css"

type MenuProps = {
}

const Menu: React.FC<MenuProps> = () => {
  return (
    <div>
      <Frontpage img={noticia} titular={"COMIENZA SUPERVIVIENTES 2022!"}></Frontpage>
       <Contestant></Contestant>
    </div>
  )
}

export default Menu
