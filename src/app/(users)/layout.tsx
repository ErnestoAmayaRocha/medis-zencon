'use client'

import Link from "next/link"
import { usePathname } from 'next/navigation';
import React from "react";
import { MdOutlineDashboard, MdNotificationsNone } from "react-icons/md";
export default function FinalLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const variants = {
    active: 'text-primary bg-background after:absolute after:right-0 after:bg-primary after:w-1 after:h-full after:top-0',
    inactive: 'text-gray-500 hover:text-primary'
  }

  const pathName = usePathname();

  const options: {
    path: string;
    name: string;
    icon?: React.ReactNode;
  }[] = [
    {
      path: "/doctor/dashboard",
      name: "Dashboard",
      icon: <MdOutlineDashboard />
    },
    {
      path: "/doctor/patient-overview",
      name: "Patient Overview",
      icon: <MdOutlineDashboard />
    },
    {
      path: "/doctor/medical-history",
      name: "Medical History",
      icon: <MdOutlineDashboard />
    },
    {
      path: "/doctor/prescriptions",
      name: "Prescriptions",
      icon: <MdOutlineDashboard />
    },
    {
      path: "/doctor/diagnostic-tools",
      name: "Diagnostic Tools", 
      icon: <MdOutlineDashboard />
    }
  ]

  return (

    <div className="flex justify-between h-full max-w-full max-h-full overflow-hidden font-sans text-font">

      <nav
        className="w-[45px] md:w-[200px] transition-all shadow-light h-[100vh] py-3 overflow-x-hidden bg-secondary z-20 flex flex-col items-center justify-center">
        <div className="relative flex items-center w-40 h-16 bg-black">MEDIS LOGO</div>
        <ul className="flex flex-col items-start justify-start w-full gap-1 h-[75vh]">
          {
            options.map(({ path, name, icon }, index) => (
              <li key={index} className="w-full">
                <Link
                  href={path}
                  className={`relative transition-all cursor-pointer flex justify-start items-center gap-1 px-3 md:px-8 py-3 text-xs font-semibold min-w-[200px] select-none ${path === pathName  ? variants.active : variants.inactive}`} >
                  <div className="w-5 h-5">
                    {
                      React.cloneElement(icon as React.ReactElement, { className: 'w-full h-full' }) 
                    }
                  </div>
                  <p>{name}</p>
                </Link>
              </li>
            ))
          }
        </ul>

        <div className="flex items-center w-full gap-2 p-3 cursor-pointer">
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          <div>
            <p className="text-sm font-bold leading-none">Ángel Cruz</p>
            <span className="text-xs leading-none text-primaryLight">Admin user</span>
          </div>
        </div>
      </nav>

      <div className="flex-1">
        <div
          className="flex items-center w-full h-16 px-14 py-2 bg-primary sticky justify-end"
        >
            <MdNotificationsNone className="w-auto h-8 text-secondary cursor-pointer"/>
        </div>

        <main id="app" className="overflow-y-auto h-full w-full">
          
          {children}
        </main>
      </div>
    </div>
  )
}
