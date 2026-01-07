
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Menu items using Bootstrap Icons
const menu = [
  { name: 'Dashboard', href: '/dashboard', icon: 'bi-grid-3x3-gap' },
  { name: 'Users', href: '/dashboard/users', icon: 'bi-people' },
/*   { name: 'Calendar', href: '/dashboard/calendar', icon: 'bi-calendar' },
  { name: 'Document', href: '/dashboard/docs', icon: 'bi-file-text' }, */
]
/* 
const groups = [
  {
    name: 'Setup',
    icon: 'bi-boxes',
    children: [],
  },
  {
    name: 'Transactions',
    icon: 'bi-file-earmark-medical',
    children: [],
  },
  {
    name: 'Reports',
    icon: 'bi-bar-chart-line',
    children: [],
  },
  {
    name: 'Utilities',
    icon: 'bi-beaker',
    children: [],
  },
]
 */
export default function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <aside
      className="
        group flex flex-col justify-between 
        w-20 hover:w-56 transition-all duration-300 
        h-screen sticky top-0 left-0 
        bg-[#010A1F] text-white
      "
    >
      {/* Top logo */}
      <div>
        <div className="p-4 text-xl font-bold border-b border-slate-700">
          D
        </div>

        {/* Main navigation */}
        <nav className="flex flex-col mt-4">
          {menu.map((item) => {
            const isActive = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  flex items-center gap-4 px-4 py-3 m-1 rounded-lg transition
                  ${isActive ? 'bg-slate-800 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}
                `}
                onClick={() => console.log(`${item.name} clicked`)}
              >
                <i className={`bi ${item.icon} text-xl`}></i>

                <span className="opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity duration-300">
                  {item.name}
                </span>
              </Link>
            )
          })}

          {/* Divider */}
          <hr className="my-4 border-slate-700 mx-3" />

          {/* Group menu (Setup, Transactions, Reports, Utilities) */}
  {/*      {groups.map((section) => (
            <button
              key={section.name}
              className="
                flex items-center justify-between gap-4 
                px-4 py-3 m-1 w-[90%]
                rounded-lg text-slate-400 
                hover:bg-slate-800 hover:text-white 
                transition-colors duration-200
              "
              onClick={() => console.log(`${section.name} group clicked`)}
            > */}
             {/*  <div className="flex items-center gap-4">
                <i className={`bi ${section.icon} text-xl`}></i>

                <span className="opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity duration-300">
                  {section.name}
                </span>
              </div> */}

              {/* Caret icon */}
             {/*  <i className="bi bi-caret-down-fill text-xs opacity-0 group-hover:opacity-100"></i>
            </button> */}
      
        </nav>
      </div>

      {/* Logout */}
      <div className="mb-4">
        <button
          className="
            flex items-center gap-4 w-[90%] px-4 py-3 m-1 
            rounded-lg text-slate-400 
            hover:bg-red-600 hover:text-white transition
          "
          onClick={() => console.log("Logout clicked")}
        >
          <i className="bi bi-box-arrow-right text-xl"></i>

          <span className="opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity duration-300">
            Logout
          </span>
        </button>
      </div>
    </aside>
  )
}
