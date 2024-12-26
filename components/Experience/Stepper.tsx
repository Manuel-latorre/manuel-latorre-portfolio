import { BellIcon, BriefcaseBusinessIcon, ChartNoAxesCombinedIcon, CogIcon, CreditCardIcon, DatabaseIcon, FileTextIcon, GlobeIcon, ImageIcon, MapPinIcon, PanelsTopLeftIcon, UsersIcon } from "lucide-react";
import Typescript from "../icons/Typescript";
import Next from "../icons/Next";
import Css from "../icons/Css";
import Tailwind from "../icons/Tailwind";
import Supabase from "../icons/Supabase";
import OpenAI from "../icons/OpenAI";
import React from "../icons/React";

const items = [
    {
        icon: <GlobeIcon width={20} height={20} color="#afaaaa" />,
        title: "Desarrollo del sitio web",
        subtitle: "Fui responsable del desarrollo inicial del sitio web de la empresa."
    },
    {
        icon: <UsersIcon width={20} height={20} color="#afaaaa" />,
        title: "Plataforma para clientes",
        subtitle: "Trabajo en el desarrollo de una plataforma dividida en secciones para administradores y clientes."
    },
    {
        icon: <PanelsTopLeftIcon width={20} height={20} color="#afaaaa" />,
        title: "Desarrollo de la interfaz de usuario",
        subtitle: "Encargado de la creación y mejora de la interfaz de la plataforma."
    },
    {
        icon: <DatabaseIcon width={20} height={20} color="#afaaaa" />,
        title: "Interacciones con base de datos",
        subtitle: "Implementación de funcionalidades complejas basadas en interacciones con la base de datos."
    },
    {
        icon: <FileTextIcon width={20} height={20} color="#afaaaa" />,
        title: "Gestión de documentos",
        subtitle: "Integración de formularios para carga de archivos como imágenes, PDFs y Excel."
    },
    {
        icon: <CreditCardIcon width={20} height={20} color="#afaaaa" />,
        title: "Integración de pagos",
        subtitle: "Participación en la integración de la pasarela de pago para la gestión de subscripciones de clientes."
    },
    {
        icon: <ChartNoAxesCombinedIcon width={20} height={20} color="#afaaaa" />,
        title: "Generador de gráficos dinámicos",
        subtitle: "Desarrollo de un sistema para generar gráficos dinámicos a partir de archivos Excel importados."
    },
    {
        icon: <CogIcon width={20} height={20} color="#afaaaa" />,
        title: "Tareas en segundo plano",
        subtitle: "Implementación de ejecución de tareas en segundo plano utilizando Trigger.dev como servicio externo."
    }
]

const itemsTma = [
    {
        icon: <DatabaseIcon width={20} height={20} color="#afaaaa" />,
        title: "Gestión de Datos",
        subtitle: "Implementación de funcionalidades esenciales utilizando peticiones GET, POST, PUT y DELETE."
    },
    {
        icon: <ImageIcon width={20} height={20} color="#afaaaa" />,
        title: "Carga de Imágenes",
        subtitle: "Incorporación de funcionalidad para que los usuarios carguen imágenes de sus mascotas y de perfil a través de Cloudinary."
    },
    {
        icon: <BellIcon width={20} height={20} color="#afaaaa" />,
        title: "Sistema de Notificaciones",
        subtitle: "Integración de un sistema de notificaciones efectivo mediante React Native Firebase Cloud Messaging."
    }
]

const tmaStack = [
    {
        technology: "Typescript",
        icon: <Typescript height={16} width={16} />
    },
    {
        technology: "React Native",
        icon: <React height={16} width={16} />
    },
    {
        technology: "CSS",
        icon: <Css height={16} width={16} />
    },
]
const tualoStack = [
    {
        technology: "Typescript",
        icon: <Typescript height={16} width={16} />
    },
    {
        technology: "Next js",
        icon: <Next height={16} width={16} />
    },
    {
        technology: "CSS",
        icon: <Css height={16} width={16} />
    },
    {
        technology: "Tailwind css",
        icon: <Tailwind height={16} width={16} />
    },
    {
        technology: "Supabase",
        icon: <Supabase height={16} width={16} />
    },
    {
        technology: "Open AI",
        icon: <OpenAI height={16} width={16} />
    },
]

export default function VerticalSteps() {
    return (
        <div className="m-10">
            <h2 className="sr-only">Steps</h2>

            <ol className="relative border-l-2 border-[#4B4B4B]">
                <li className="mb-16 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-[#585858] rounded-full -left-4 ring-4 ring-[#AFAAAA] dark:ring-gray-900 dark:bg-gray-700">
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400"><BriefcaseBusinessIcon width={20} height={20} color="#AFAAAA" /></span>
                    </span>
                    <div className="flex justify-between px-2">
                        <p className="uppercase font-semibold text-white flex items-center gap-2">tualo <span>|</span> <span className="capitalize flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-[#4DE58F]/25 text-sm"><MapPinIcon width={16} height={16}/> Mexico</span></p>
                        <p className="bg-[#4DE58F]/25 py-2 px-4 rounded-full uppercase text-xs font-medium text-white">abril 2024 - actual</p>
                    </div>
                    <div className="my-3">
                        <p className="text-[#4DE58F] font-medium text-lg">Desarrollador Fullstack</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-gray-300">Startup que utiliza IA para generar reportes financieros y gráficas personalizadas.</p>
                        <p className="text-gray-300 underline underline-offset-4 decoration-[#4DE58F]">Mis responsabilidades incluyen:</p>
                        <ul className="px-2 flex flex-col gap-4">
                            {
                                items.map((data) => (
                                    <li className="flex items-center gap-2">
                                        <div className="p-2 rounded-full bg-[#4DE58F]/25">
                                            {data.icon}
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <p className="font-semibold text-white">{data.title}</p>
                                            <p className="text-sm text-gray-300">{data.subtitle}</p>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="flex flex-col gap-1 px-4 mt-4">
                            <p className="text-gray-300 underline underline-offset-4 decoration-[#4DE58F]">Stack tecnologico</p>
                            <div className="flex items-center gap-4 justify-start flex-wrap mt-4">
                                {
                                    tualoStack.map((data) => (
                                        <div className="px-2 py-1 rounded-full bg-[#4B4B4B] flex items-center gap-2 text-white font-medium text-sm">
                                            {data.icon}
                                            {data.technology}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </li>
                <li className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-[#585858] rounded-full -left-4 ring-4 ring-[#AFAAAA] dark:ring-gray-900 dark:bg-gray-700">
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400"><BriefcaseBusinessIcon width={20} height={20} color="#AFAAAA" /></span>
                    </span>
                    <div className="flex justify-between px-2">
                        <p className="uppercase font-semibold text-white flex items-center gap-2">tu mejor amigo <span>|</span> <span className="capitalize flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-[#4DE58F]/25 text-sm"><MapPinIcon width={16} height={16}/> Mexico</span></p>
                        <p className="bg-[#4DE58F]/25 py-2 px-4 rounded-full uppercase text-xs font-medium text-white">noviembre 2023 - marzo 2024</p>
                    </div>
                    <div className="my-3">
                        <p className="text-[#4DE58F] font-medium text-lg">Desarrollador Frontend</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-gray-300">App que ofrece servicios para el cuidado de las mascotas.</p>
                        <p className="text-gray-300 underline underline-offset-4 decoration-[#4DE58F]">Realice tareas como:</p>
                        <ul className="px-2 flex flex-col gap-4">
                            {
                                itemsTma.map((data) => (
                                    <li className="flex items-center gap-2">
                                        <div className="p-2 rounded-full bg-[#4DE58F]/25">
                                            {data.icon}
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <p className="font-semibold text-white">{data.title}</p>
                                            <p className="text-sm text-gray-300">{data.subtitle}</p>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="flex flex-col gap-1 px-4 mt-4">
                            <p className="text-gray-300 underline underline-offset-4 decoration-[#4DE58F]">Stack tecnologico</p>
                            <div className="flex items-center gap-4 justify-start flex-wrap mt-4">
                                {
                                    tmaStack.map((data) => (
                                        <div className="px-2 py-1 rounded-full bg-[#4B4B4B] flex items-center gap-2 text-white font-medium text-sm">
                                            {data.icon}
                                            {data.technology}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </li>

            </ol>
        </div>
    )
}

