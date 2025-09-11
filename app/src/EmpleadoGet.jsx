import { useEffect, useState } from "react"

function EmpleadoGet(){

    const [empleado,setEmpleado] = useState([])

    useEffect(() => {
        fetch('https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/empleados?select=*',{
            headers: {
                apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998',
                authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998'
            }
        })
        .then((respuesta) => respuesta.json())
        .then((data) => setEmpleado(data))
    },[])

    function Actualizar(id){
        alert(id)
    }

    function Eliminar(id){
        alert(id)
    }

    return(
        <div>
            <h2>LISTADO EMPLEADOS</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Cargo</th>
                        <th>Salario</th>
                        <th>Fecha Ingreso</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        empleado.map((emp) => (
                            <tr>
                                <td>{emp.id}</td>
                                <td>{emp.nombre}</td>
                                <td>{emp.cargo}</td>
                                <td>{emp.salario}</td>
                                <td>{emp.fecha_ingreso}</td>
                                <td>
                                    <button onClick={()=>Actualizar(emp.id)}>Actualizar</button>
                                    <button onClick={()=>Eliminar(emp.id)}>Eliminar</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default EmpleadoGet