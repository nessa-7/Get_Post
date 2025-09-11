import { useState } from "react"

function CrearEmpresa(){
    const [nombre, setNombre] = useState("")
    const [nit, setNit] = useState("")
    const [direccion, setDireccion] = useState("")
    const [telefono, setTelefono] = useState("")
    const [fecha, setFecha] = useState("")

    async function guardar(event){
        event.preventDefault()
            await fetch('https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/empresa?select=*',{
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                    apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998',
                    authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998'
                },
                body:JSON.stringify({nombre:nombre,nit:nit,direccion:direccion,telefono:telefono,fecha_creacion:fecha})
            })
    }
    return(
        <div>
            <h2>CREAR EMPRESA</h2>
            <form onSubmit={guardar}>
                <input type="text" placeholder="Nombre" onChange={(event) => setNombre(event.target.value)}/>
                <input type="text" placeholder="Nit" onChange={(event) => setNit(event.target.value)}/>
                <input type="text" placeholder="Direccion" onChange={(event) => setDireccion(event.target.value)}/>
                <input type="text" placeholder="Telefono" onChange={(event) => setTelefono(event.target.value)}/>
                <input type="date" placeholder="Fecha Creacion" onChange={(event) => setFecha(event.target.value)}/>
                <button type="submit">Guardar</button>
            </form>
        </div>
    )
}

export default CrearEmpresa