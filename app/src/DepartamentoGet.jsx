import { useEffect, useState } from "react"

function DepartamentoGet(){

    const [departamento,setDepartamento] = useState([])
            
        useEffect(() => {
            fetch('https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/departamento?select=*',{
                headers: {
                    apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998',
                    authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998'
                }
            })
            .then((respuesta) => respuesta.json())
            .then((data) => setDepartamento(data))
        },[])
        
    return(
        <div>
            <h2>LISTADO Departamentos</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Id Empresa</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        departamento.map((dep) => (
                            <tr>
                                <td>{dep.id}</td>
                                <td>{dep.nombre}</td>
                                <td>{dep.descripcion}</td>
                                <td>{dep.empresa_id}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DepartamentoGet