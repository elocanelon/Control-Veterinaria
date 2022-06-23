const Paciente = ({paciente, SetPaciente, EliminarPaciente}) => {
    
    const {nombre, propietario, email, fecha, sintomas, id} = paciente 

    const handleEliminar = (nombre) => {
        const respuesta = confirm(`Desea eliminare este paciente`);

        if(respuesta){
            EliminarPaciente(id)
        }
    }

    return(
    <div>
        <div className="m-3 bg-white px-10 py-5 rounder-xl shadow-md">
                <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                     <span className="font-normal normal-case">{nombre}</span></p>
            </div>
            <div className="m-3 bg-white px-10 py-5 rounder-xl shadow-md">
                <p className="font-bold mb-3 text-gray-700 uppercase">Propietaro {''}
                     <span className="font-normal normal-case">{propietario}</span></p>
            </div>
            <div className="m-3 bg-white px-10 py-5 rounder-xl shadow-md">
                <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
                     <span className="font-normal normal-case">{email}</span></p>
            </div>
            <div className="m-3 bg-white px-10 py-5 rounder-xl shadow-md">
                <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
                     <span className="font-normal normal-case">{fecha}</span></p>
            </div>
            <div className="m-3 bg-white px-10 py-5 rounder-xl shadow-md">
                <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
                     <span className="font-normal normal-case">{sintomas}</span></p>
            </div>
           <div className="flex justify-between mt-10">
            <button type="button" className="py-2 px-10 bg-indigo-600 hover:bg-indigo-800 text-white font-bold uppercase rounder-lg" onClick={() => SetPaciente(paciente)}> Editar </button>
            <button type="button" className="py-2 px-10 bg-red-600 hover:bg-red-800 text-white font-bold uppercase rounder-lg" onClick={handleEliminar}>Eliminar</button>
           </div>
        </div>
    )
}

export default Paciente