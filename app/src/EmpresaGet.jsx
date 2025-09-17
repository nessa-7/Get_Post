import { useEffect, useState } from "react"

function EmpresaGet(){

    const [empresa,setEmpresa] = useState([])
            
        useEffect(() => {
            fetch('https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/empresa?select=*',{
                headers: {
                    apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998',
                    authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998'
                }
            })
            .then((respuesta) => respuesta.json())
            .then((data) => setEmpresa(data))
        },[])
        
    return(
        <div>
            <h2>LISTADO EMPRESAS</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Nit</th>
                        <th>Direccion</th>
                        <th>Telefono</th>
                        <th>Fecha Creacion</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        empresa.map((emp) => (
                            <tr>
                                <td>{emp.id}</td>
                                <td>{emp.nombre}</td>
                                <td>{emp.nit}</td>
                                <td>{emp.direccion}</td>
                                <td>{emp.telefono}</td>
                                <td>{emp.fecha_creacion}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default EmpresaGet

