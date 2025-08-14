import { useState } from 'react';
import './style.css'

export default function Menu() {
  const [viewMenu, setViewMenu] = useState(false)
  
  const handleOnClick = (e:any) => {
    e.stopPropagation()
    e.preventDefault()
    setViewMenu(!viewMenu)
  }

  return (
    <aside className={`Menu fixed top-0 pt-10 w-xs h-screen bg-background z-100 border-2 duration-200 ${viewMenu ? 'left-0' : 'left-[-320px]'}`}>
        <div className='menu-icon' onClick={handleOnClick}>
          <div className="bar1 bg-foreground"></div>
          <div className="bar2 bg-foreground"></div>
          <div className="bar3 bg-foreground"></div>
        </div>
        <nav className='p-10 w-full flex flex-col space-y-3'>
          <a href="#init" className='text-blue-600'>Inicio</a>
          <a href="#expirience">Experiencia</a>
          <a href="#education">Formación</a>
          <a href="#skills">Skills</a>
          <a href="#footer">Fin</a>
        </nav>
    </aside>
  )
}