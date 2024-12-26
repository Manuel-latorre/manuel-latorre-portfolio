import React from 'react'
import Html from '../icons/Html'
import Css from '../icons/Css'
import Tailwind from '../icons/Tailwind'
import Javascript from '../icons/Javascript'
import Typescript from '../icons/Typescript'
import Node from '../icons/Node'
import Postgresql from '../icons/Postgresql'
import Supabase from '../icons/Supabase'
import ReactIcon from '../icons/React'
import Next from '../icons/Next'
import Express from '../icons/Express'

const techs = [
  {
    technology: "HTML",
    icon: <Html height={16} width={16} />
  },
  {
    technology: "CSS",
    icon: <Css height={16} width={16} />
  },
  {
    technology: "Typescript",
    icon: <Typescript height={16} width={16} />
  },
  {
    technology: "Javascript",
    icon: <Javascript height={16} width={16} />
  },
  {
    technology: "React",
    icon: <ReactIcon height={16} width={16} />
  },
  {
    technology: "Next js",
    icon: <Next height={16} width={16} />
  },
  {
    technology: "Tailwind css",
    icon: <Tailwind height={16} width={16} />
  },
  {
    technology: "Node",
    icon: <Node height={16} width={16} />
  },
  {
    technology: "Supabase",
    icon: <Supabase height={16} width={16} />
  },
  {
    technology: "Express",
    icon: <Express height={16} width={16} />
  },

  {
    technology: "PostgreSQL",
    icon: <Postgresql height={16} width={16} />
  },
]

const Technologies = () => {
  return (
    <div className='flex flex-col px-10'>
      <p className='titles mb-2 mt-8'>Tecnologías</p>
      <div className='greenBar'></div>

      <div className="flex items-center justify-start flex-wrap gap-2 my-4">
        {
          techs.map((data) => (
            <div className="px-2 py-1 rounded-full bg-[#4B4B4B] flex items-center gap-2 text-white font-medium text-sm">
              {data.icon}
              {data.technology}
            </div>
          ))
        }
      </div>


    </div>

  )
}

export default Technologies