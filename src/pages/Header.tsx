import {NavLink, Outlet } from 'react-router'

export default function Header() {
  return (
    <div>
    <nav className="p-4 border-b border-gray-300">
      <NavLink
        to="/"
        className={({ isActive }) =>
        `mr-4 hover:underline ${isActive ? 'text-blue-800 font-bold' : 'text-blue-600'}`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/users"
        className={({ isActive }) =>
        `hover:underline ${isActive ? 'text-blue-800 font-bold' : 'text-blue-600'}`
        }
      >
        Users
      </NavLink>
    </nav>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
