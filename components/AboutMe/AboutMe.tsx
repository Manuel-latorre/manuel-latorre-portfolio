import React from 'react'

const AboutMe = () => {
    return (
        <div className='flex flex-col px-10'>
            <p className='titles mb-2 mt-8'>Sobre mí</p>
            <div className='greenBar'></div>

            <div className='mt-4'>
                <p className="text-justify leading-relaxed text space-y-4">
                    <span className="block">
                        Actualmente soy estudiante de la carrera de <span className='text-[#4DE58F] font-semibold'>Ingeniería en Sistemas</span>, lo que complementa mi experiencia en el desarrollo de diversos tipos de aplicaciones, incluyendo sitios web y plataformas de administración de datos.
                    </span>
                    <span className="block">
                        Mi enfoque se centra en crear soluciones tecnológicas que mejoren la eficiencia y la experiencia del usuario.
                    </span>
                    <span className="block">
                        Trabajo en <span className='font-semibold'>Tualo</span> y también realizo proyectos freelance, lo que me permite aplicar mis conocimientos y habilidades en diferentes entornos y desafíos tecnológicos.
                    </span>
                </p>
            </div>
        </div>
    )
}

export default AboutMe