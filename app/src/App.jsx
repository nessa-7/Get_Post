import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import './App.css'
import CrearDepartamento from './CrearDepartamento'
import CrearEmpleado from './CrearEmpleado'
import CrearEmpresa from './CrearEmpresa'
import DepartamentoGet from './DepartamentoGet'
import EmpleadoGet from './EmpleadoGet'
import EmpresaGet from './EmpresaGet'
import Nav from "./Nav";
import ActualizarEmpleado from "./ActualizarEmpleado";
import ActualizarEmpresa from "./ActualizarEmpresa";

function App() {

  return (

      <div>

        <BrowserRouter>
          <Nav></Nav>
          <Routes>
            <Route path="/" element={<EmpresaGet></EmpresaGet>}></Route>
            <Route path="/crearempresa" element={<CrearEmpresa></CrearEmpresa>}></Route>
            <Route path="/departamento" element={<DepartamentoGet></DepartamentoGet>}></Route>
            <Route path="/creardepartamento" element={<CrearDepartamento></CrearDepartamento>}></Route>
            <Route path="/empleado" element={<EmpleadoGet></EmpleadoGet>}></Route>
            <Route path="/crearempleado" element={<CrearEmpleado></CrearEmpleado>}></Route>
            <Route path="/empleado/:idemp" element={<ActualizarEmpleado></ActualizarEmpleado>}></Route>
            <Route path="/empresa/:idempresa" element={<ActualizarEmpresa></ActualizarEmpresa>}></Route>
          </Routes>
        </BrowserRouter>

      </div>
      

  )
}

export default App

