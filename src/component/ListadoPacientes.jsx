import { useEffect } from "react"
import Paciente from "./Paciente"

function ListadoPacientes({ pacientes, SetPaciente, EliminarPaciente }){
  

    
    return(

        <div className="md:w-1/2 lg:w-3/5 h-screen overflow-scroll">
    
        {pacientes.length === 0 ? (
            <div>
            <h2 className="font-black text-2xl text-center">Listado Pacientes </h2>
           
            <p className="text-xl mt-5 mb-10 text-center">No hay pacientes para agregar.</p>
            </div>
        ): (
            <div>
            <h2 className="font-black text-2xl text-center">Listado Pacientes</h2>
           
           <p className="text-xl mt-5 mb-10 text-center">Administra tus <span className="text-indigo-600 font-bold">Pacientes y citas</span></p>
         
         {pacientes.map( (paciente)=> 
          <Paciente key={paciente.id}
          paciente={paciente}
          SetPaciente={SetPaciente}
          EliminarPaciente={ EliminarPaciente }
          />
          )}
          </div>
        )}
            
            

        
           
        </div>
    )
} 

export default ListadoPacientes