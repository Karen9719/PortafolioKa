import React from 'react'
import { CiFacebook } from "react-icons/ci"
import "../css/Footer.css"

const Footer = () => {
    return(
        <div>
            <br />
            <br />
            <h3>Derechos reservados alumno FRT 2024</h3>
            <br />
            <a href="https://www.fa">
            <CiFacebook style={{whidt:"100px", height:"100px"} }  />
            </a>
            <br />
        </div>
    )
}

export default Footer