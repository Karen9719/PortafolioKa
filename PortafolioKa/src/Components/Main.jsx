import React from 'react'
import KarenU from "../assets/KarenU.jpeg"
const Main = () => {

    const Alumno = {
        nombre:"Karen Florencia",
        apellido:"Urueña.",
        edad: 26,
        hobby:"Salir a correr por espacios verdes, leer, ver peliculas, aprender cosas nuevas. ",
        Direccion:"Calle sureste 237 y pasaje Pedro Bereta.",
        tel:"3815565994",
        estadoCivil:"Soltera."
    }



    return(
        <div>
            <br />
            <br />
            <h3>Mi nombre es: {Alumno.nombre} {Alumno.apellido} </h3>
            <img src={KarenU} alt="" width={300} height={500} />
            <h3>Estado Civil: {Alumno.estadoCivil} </h3>
            <h4>Estudiante de la carrera de Programacion en la UTN FRT</h4>
            <br />
            
            <div className="row"  >
                <div className="col-5"></div>
                <div className="col-2"><ul>
                <li>Número de telefono: {Alumno.tel}</li>
                <li>Dirección: {Alumno.Direccion}</li>
                <li>Edad: {Alumno.edad} </li>
                <li>Hobbys: {Alumno.hobby}</li>
            </ul></div>

                <div className="col-5"></div>
            </div>
            
            <br />
        </div>
    )
}

export default Main