import {Link} from 'react-router-dom'

function Nav(){
    return(
        <div>
            <nav>
                <Link to="/">Empresa</Link>
                <Link to="/crearempresa">Crear Empresa</Link>
                <Link to="/departamento">Departamento</Link>
                <Link to="/creardepartamento">Crear Departamento</Link>
                <Link to="/empleado">Empleado</Link>
                <Link to="/crearempleado">Crear Empleado</Link>
            </nav>
        </div>
    )
}

export default Nav