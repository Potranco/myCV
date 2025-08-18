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
        className='fixed bottom-[-1px] right-4 z-50 p-3 rounded-t-full bg-white border border-black'
        aria-label='Ir arriba'
        title='Ir arriba'
      >
        <div className='arrow-up'></div>
      </div>
    )
  );
}