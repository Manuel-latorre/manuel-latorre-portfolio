import { FileUserIcon, GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const contacts = [
    {
        title: "linkedin",
        username: "Manuel Latorre",
        icon: <LinkedinIcon width={30} height={30} color='#AFAAAA'/>,
        url: "https://www.linkedin.com/in/manuel-latorre-936b72223/"
    },
    {
        title: "github",
        username: "Manuel-latorre",
        icon: <GithubIcon width={30} height={30} color='#AFAAAA'/>,
        url: "https://github.com/Manuel-latorre"
    },
    {
        title: "email",
        username: "manuel.latorre11@gmail.com",
        icon: <MailIcon width={30} height={30} color='#AFAAAA'/>,
        url: "mailto:manuel.latorre11@gmail.com"
    },
    {
        title: "cv",
        username: "Manuel Latorre",
        icon: <FileUserIcon width={30} height={30} color='#AFAAAA'/>,
        url: ""
    }
]

const Contacts = () => {
  return (
    <div className='flex flex-col gap-4 w-full justify-start'>
        {
            contacts.map((data) => (
                <Link key={data.title} href={data.url} className='flex items-center gap-4' target='_blank'>
                    {data.icon}
                    <div className='flex flex-col gap-1'>
                        <p className='uppercase font-medium text-white text-sm'>{data.title}</p>
                        <p className='text-white font-medium text-sm'>{data.username}</p>
                    </div>
                </Link>
            ))
        }
    </div>
  )
}

export default Contacts