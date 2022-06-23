import { useState, useEffect } from "react"
import Formulario from "./component/Formulario"
import Header from "./component/Header"
import ListadoPacientes from "./component/ListadoPacientes"

function App() {

  
  
  const [ pacientes, SetPacientes ] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);
  const [ paciente, SetPaciente ] = useState({})

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes ));
  }, [pacientes])


  const EliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id)
    SetPacientes(pacientesActualizados) 
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-20 md:flex">
        <Formulario 
        pacientes = { pacientes }
        SetPacientes={ SetPacientes }
        paciente={paciente}
        SetPaciente={SetPaciente}
        />
        <ListadoPacientes 
         pacientes = { pacientes }
         SetPaciente = { SetPaciente }
         EliminarPaciente={ EliminarPaciente }
        />
      </div>
    </div>
  )
}

export default App
