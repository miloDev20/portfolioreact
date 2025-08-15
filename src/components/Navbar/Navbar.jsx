import React from "react";
import styles from "./Navbar.module.css"
import { getImageUrl } from "../../utils";

export const Navbar = () => {
    return <nav className={styles.navbar}>
        <a className={styles.title} href="/">Inicio</a>
        <div className={styles.menu}>
            <ul className={styles.menuitems}>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li> 
                <li>
                    <a href="#projects">Projects</a>
                </li>          
            
            </ul>

        </div>
    </nav>;
};