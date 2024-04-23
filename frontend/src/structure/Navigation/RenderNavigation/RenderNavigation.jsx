import { Link, Route, Routes } from "react-router-dom";
import { nav } from "../Links";
import React, { useState, useEffect } from 'react';
import styles from "./RenderNavigation.module.css"


export const RenderRoutes = () => {
    return (
         <Routes>
         { nav.map((r, i) => {
                return <Route key={i} path={r.path} element={r.element}/>
         })}
         </Routes>
    )
}

export  const RenderMenu = () => {
 const [scrollPosition, setScrollPosition] = useState(0);
 const stickyScrollPosition = 50; 

 useEffect(() => {
     const handleScroll = () => {
         setScrollPosition(window.scrollY);
     };

     window.addEventListener('scroll', handleScroll);

     return () => {
         window.removeEventListener('scroll', handleScroll);
     };
 }, []);


 const MenuItem = ({ r }) => {
     return (
         <div className={styles.menuItem}>
             <Link to={r.path}>{r.name}</Link>
         </div>
     );
 };

 return (
     <div className={`${styles.menu} ${scrollPosition > stickyScrollPosition ? styles.sticky : ''}`}>
         {nav.map((r, i) => {
             if (r.isMenu) {
                return <MenuItem key={i} r={r} />;
             } else {
                return null
             }
         })}
     </div>
 );
};