import React from 'react'
import styles from "./Navbar.module.css"; 
// import logo from "./sv.png"
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';

type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  return (
  <div className={styles.content}>
       <div className={styles.logo}>
          {/* <img src={logo} width={50} height={35} alt=""></img> */}
       </div>
       <div className={styles.navbar}>
         <Router>
             <Link to='/'>Menu</Link>
             <Link to='estadisticas'>Estadisticas</Link>
             <Link to= 'redes'>Redes</Link>  
         </Router>
       </div>
  </div>
  )
}

export default Navbar
