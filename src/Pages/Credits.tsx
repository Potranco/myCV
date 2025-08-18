import './Credits.css'

export default function Credits() {
  return (
    <section className="bg-black text-white flex justify-center items-center h-screen overflow-hidden">
      <div className="animate-scroll text-center space-y-4 font-mono text-lg">
        <h1 className="text-4xl mb-8">🎬 Créditos</h1>
        <p>Protagonizado por: <span className="text-yellow-400">Chema</span></p>
        <p>Directores:
          La vida, el aburrimiento y ganas de mejorar
        </p>
        <p>Diseño: 
          <a href="https://tailwindcss.com/">tailwindcss</a>
          <a href="https://uiverse.io/profile/Itskrish01">Itskrish01</a>
          <span className="text-green-400">Chema con mucha cafeína ☕</span>
        </p>
        <p>Art: 
          La mano derecha
        </p>
        <p>Asistente creativo:
          <span className="text-blue-400">ChatGPT</span>
          https://www.marioaguiar.net/es/blog/add-a-back-to-top-button-in-react
          https://codepen.io/GioAc96
          shadcn

        </p>
        <p>Producción:
          Duck.ai
          ChatGPT
        </p>
        <p>Control de calidad:
          Copilot
          Jest
          Testing Linrary
          Lighthouse
        </p>
        <p>Música mental: <span className="italic">"Eye of the Tiger" 🎵</span></p>
        <p>Inspirado por: <span className="underline">YouTube, Google y Stack Overflow</span></p>
        <p>Patrocinado por: <span className="text-pink-400">Mi paciencia</span></p>
        <p>Si me olvide de mencionarte y use tus ideas, tu codigo, tu alma o algo mejor, no fue intencional. Mi edad ya no me permite recordar todo, demasiada información acumulada (especialmente MEMES).</p>
        <p className="mt-8">Fin... o más bien, ¡Continuará!</p>
      </div>
    </section>
  );
}
