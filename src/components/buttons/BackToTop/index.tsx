import { useState, useEffect } from 'react';
import './style.css'

export default function BackToTop() {
  const [showButton, setShowButton] = useState(false);
  
  useEffect(() => {
    // Función para mostrar el botón cuando el usuario haya bajado más de 100px.
    const element = document.getElementById('main')
    const toggleVisibility = () => {
      setShowButton(element && (element.scrollTop > 100)
        ? true
        : false
      )
    };

    // Agregamos el evento scroll.
    element?.addEventListener('scroll', toggleVisibility);

    // Limpiamos el evento cuando el componente se desmonte.
    return () => {
      element?.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const handleClick = () => {
    document.getElementById('main')?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    showButton && (
      <div
        onClick={handleClick}
        className='fixed bottom-4 right-4 z-50 rounded-full shadow-lg border border-black/10 bg-white dark:bg-neutral-900 p-2 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500'
        aria-label='ir arriba'
      >
        <img src={`${import.meta.env.BASE_URL}goToTop.png`} alt='Ir arriba' className='max-h-12'/>
      </div>
    )
  );
}