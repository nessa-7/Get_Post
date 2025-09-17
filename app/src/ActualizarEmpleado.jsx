import { useState } from "react"
import { useParams } from "react-router-dom"

function ActualizarEmpleado(){

    let {idemp} = useParams()

    const [nombre, setNombre] = useState("")
    const [cargo, setCargo] = useState("")
    const [salario, setSalario] = useState("")
    const [fecha, setFecha] = useState("")

    async function actualizar(e){
        e.preventDefault()
        await fetch(`https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/empleados?id=eq.${idemp}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998',
                authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998'
            },
            body:JSON.stringify({nombre: nombre, cargo: cargo, salario: salario, fecha_ingreso: fecha})
        }).then((respuesta) => respuesta.json())
    }

    return(
        <div>
            <h2>ACTUALIZAR EMPLEADO</h2>
            <form onSubmit={actualizar}>
                <input type="text" placeholder="Nombre" onChange={(event) => setNombre(event.target.value)}/>
                <input type="text" placeholder="Cargo" onChange={(event) => setCargo(event.target.value)}/>
                <input type="text" placeholder="Salario" onChange={(event) => setSalario(event.target.value)}/>
                <input type="date" placeholder="Fecha Ingreso" onChange={(event) => setFecha(event.target.value)}/>
                <button type="submit">Actualizar</button>
            </form>
        </div>
    )
}

export default ActualizarEmpleado