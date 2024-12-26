import React from 'react'

const Skills = () => {
    return (
        <div className='flex flex-col px-10'>
            <p className='titles mb-2 mt-8'>Habilidades</p>
            <div className='greenBar'></div>

            <div className="text-justify leading-relaxed text space-y-4 mt-4">
                <p className="">
                    Poseo una fuerte capacidad de trabajo en equipo, adaptándome fácilmente a entornos colaborativos para alcanzar objetivos comunes.
                </p>
                <p>
                    Soy una persona proactiva, siempre buscando nuevas formas de optimizar procesos y anticipar necesidades, y tengo un excelente manejo de la comunicación tanto con clientes como con compañeros de trabajo.
                </p>
                <p>
                    Mi enfoque en la resolución de problemas me permite encontrar soluciones creativas ante los desafíos que surgen en los proyectos.
                </p>
            </div>
        </div>
    )
}

export default Skills