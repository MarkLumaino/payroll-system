'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HomeIcon, UserIcon, Cog6ToothIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline'

const menu = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'Users', href: '/dashboard/users', icon: UserIcon },
  { name: 'Settings', href: '/dashboard/settings', icon: Cog6ToothIcon },
]

export default function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <aside className="group flex flex-col justify-between w-20 hover:w-56 transition-all duration-300 h-screen bg-slate-900 text-white">
      {/* Top menu */}
      <div>
        <div className="p-4 text-xl font-bold border-b border-slate-700">
          D
        </div>

        <nav className="flex flex-col mt-4">
          {menu.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  flex items-center gap-4 px-4 py-3 m-1 rounded-lg transition-colors duration-200
                  ${isActive ? 'bg-slate-800 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}
                `}
              >
                <Icon className="w-6 h-6 flex-shrink-0" />
                <span className="opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity duration-300">
                  {item.name}
                </span>
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Logout button at bottom */}
      <div className="mb-4">
        <button
          className="flex items-center gap-4 w-full px-4 py-3 m-1 rounded-lg text-slate-400 hover:bg-red-600 hover:text-white transition-colors duration-200"
          onClick={() => {
            // Add your logout logic here
            console.log('Logout clicked')
          }}
        >
          <ArrowRightOnRectangleIcon className="w-6 h-6 flex-shrink-0" />
          <span className="opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity duration-300">
            Logout
          </span>
        </button>
      </div>
    </aside>
  )
}
