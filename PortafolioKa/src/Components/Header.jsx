import React from 'react'
import { Titulo } from '../Constants/constants'
import "../css/Header.css"

const Header=()=>{


    return(
        <div className='header'>
            <br />
            <h1>{Titulo}</h1>
            <br />
            <br />
            <hr />
        </div>
    )
}

export default Header