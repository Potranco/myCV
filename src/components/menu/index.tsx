import { useState, useRef } from 'react';
import { useClickOutside } from '@/hooks/useClickOutside';
import PDFButton from "../buttons/PDFButton";
import './style.css'
type props = {
  theme: string
  onChangeTheme: () => void
}

export default function Menu({theme, onChangeTheme}:props) {
  const [viewMenu, setViewMenu] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null);
  
  useClickOutside(menuRef, () => setViewMenu(false))
  
  return (
    <aside ref={menuRef} className={`Menu fixed top-0 pt-10 w-xs h-screen bg-background z-100 border-2 duration-200 ${viewMenu ? 'left-0' : 'left-[-320px]'}`}>
        <div className='menu-icon' onClick={() => setViewMenu(!viewMenu)} title={`${viewMenu ? 'Cerrar' : 'Abrir'} Menu`}>
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
        
        <div onClick={onChangeTheme} className="absolute left-[-2px] right-3 bottom-[-2px] bg-blue-600 text-white font-bold py-2 px-4  w-full uppercase">{theme}</div>
        <PDFButton />
    </aside>
  )
}