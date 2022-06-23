import { useEffect, useState } from "react";
import Error from './Error'


const Formulario = ({ pacientes, SetPacientes, paciente, SetPaciente }) => {


    const [ nombre, setNombre] = useState('');
    const [ propietario, setPropietario] = useState('');
    const [ email, setEmail] = useState('');
    const [ fecha, setFecha] = useState('');
    const [ sintomas, setSintomas] = useState('');   
    
    const [error, setError] = useState(false)

// Acceder a la informacion del objeto para editar 
    useEffect(() => {
        if(Object.keys(pacientes).length > 0){
        setNombre(paciente.nombre)
        setPropietario(paciente.propietario)
        setEmail(paciente.email)
        setFecha(paciente.fecha)
        setSintomas(paciente.sintomas)
    } 
    }, [paciente])

// generar el ID unico del usuario
    const generarId = () => {
        const random = Math.random().toString(36).substring(2)
        const date = Date.now().toString(36)

        return random + date

    }
    
// Requerir que todos los campos sean llenados y cargar el paciente a memoria
    const handleSubmit = (e) => {
       e.preventDefault() 
        
        if ([nombre, propietario, email, fecha, sintomas].includes("")){

            setError(true)
        } else {
            setError(false)
            
            const objetoPaciente = {
                nombre,
                propietario,
                email,
                fecha,
                sintomas,
               
            }           
        
            if(paciente.id){
                // Editar registro
                 objetoPaciente.id = paciente.id
                
                 const pacientesActualizado = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)

                SetPacientes(pacientesActualizado)
                SetPaciente({})
        
            } else {
               // Crear Registro
               console.log("Nuevo Registro")

               objetoPaciente.id = generarId()
               SetPacientes([...pacientes, objetoPaciente])
            }

            //reiniciar formulario
            setNombre('')
            setPropietario('')
            setEmail('')
            setFecha('')
            setSintomas('')


           }
    }

  
    
    return(
        <div className="mx-4 md:w-1/2 lg:w-2/5">
            <h1 className="font-black text-2xl text-center">Seguimiento Pacientes</h1>
            <p className="text-lg text-center mt-5 mb-2 ">Añadir Paciente y <span className="text-indigo-600 font-bold">Administralos</span></p>
        
            <form className="bg-white shadow-md rounded-lg py-10 px-5" onSubmit={handleSubmit}>
                { error &&  <Error mensaje="Todos los campos son obligatorios"/>}
                <div>
                    <label htmlFor="mascota" className="block text-gray-700 font-bold uppercase">Nombre Mascota</label>
                    <input id="mascota" type="text" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Nombre de la Mascota" value={nombre} onChange={ (e) => setNombre(e.target.value)} />
                </div>
                <div className="mt-5">
                    <label htmlFor="propietario" className="block text-gray-700 font-bold uppercase">Propietario</label>
                    <input id="propietario" type="text" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Nombre del Propietario" value={propietario} onChange={ (e) => setPropietario(e.target.value)}/>
                </div>
                <div className="mt-5">
                    <label htmlFor="email" className="block text-gray-700 font-bold uppercase">Email</label>
                    <input id="email" type="email" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Email de Contacto" value={email} onChange={ (e) => setEmail(e.target.value)}/>
                </div>
                <div className="mt-5">
                    <label htmlFor="Alta" className="block text-gray-700 font-bold uppercase">Fecha de Alta</label>
                    <input id="Alta" type="date" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" value={fecha} onChange={ (e) => setFecha(e.target.value)}/>
                </div>
                <div className="mt-5">
                    <label htmlFor="sintomas" className="block text-gray-700 font-bold uppercase">Sintomas</label>
                    <textarea id="sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Describa los sintomas" value={sintomas} onChange={ (e) => setSintomas(e.target.value)}/>
                </div>

                <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" value={ paciente.id ? "Editar Paciente" : "Agregar Paciente"} />
            </form>
        </div>
    )
}

export default Formulario