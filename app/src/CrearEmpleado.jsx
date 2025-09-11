import { useState } from "react"

function CrearEmpleado(){
    const [nombre, setNombre] = useState("")
    const [cargo, setCargo] = useState("")
    const [salario, setSalario] = useState("")
    const [fecha, setFecha] = useState("")

    async function guardar(event){
        event.preventDefault()
            await fetch('https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/empleados?select=*',{
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                    apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998',
                    authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998'
                },
                body:JSON.stringify({nombre:nombre,cargo:cargo,salario:salario,fecha_ingreso:fecha})
            })
    }
    return(
        <div>
            <h2>CREAR EMPLEADO</h2>
            <form onSubmit={guardar}>
                <input type="text" placeholder="Nombre" onChange={(event) => setNombre(event.target.value)}/>
                <input type="text" placeholder="Cargo" onChange={(event) => setCargo(event.target.value)}/>
                <input type="text" placeholder="Salario" onChange={(event) => setSalario(event.target.value)}/>
                <input type="date" placeholder="Fecha Ingreso" onChange={(event) => setFecha(event.target.value)}/>
                <button type="submit">Guardar</button>
            </form>
        </div>
    )
}

export default CrearEmpleado