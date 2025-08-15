import './Credits.css'

export default function Credits() {
  return (
    <section className="bg-black text-white flex justify-center items-center h-screen overflow-hidden">
      <div className="animate-scroll text-center space-y-4 font-mono text-lg">
        <h1 className="text-4xl mb-8">🎬 Créditos</h1>
        <p>Protagonizado por: <span className="text-yellow-400">Chema</span></p>
        <p>Diseño: 
          <a href="https://tailwindcss.com/">tailwindcss</a>
          <a href="https://uiverse.io/profile/Itskrish01">Itskrish01</a>
          <span className="text-green-400">Chema con mucha cafeína ☕</span>
        </p>
        <p>Art: 
          ChatGPT
        </p>
        <p>Asistente creativo: <span className="text-blue-400">ChatGPT</span></p>
        <p>Música mental: <span className="italic">"Eye of the Tiger" 🎵</span></p>
        <p>Inspirado por: <span className="underline">YouTube, Google y Stack Overflow</span></p>
        <p>Patrocinado por: <span className="text-pink-400">Mi paciencia</span></p>
        <p className="mt-8">Fin... o más bien, ¡Continuará!</p>
      </div>
    </section>
  );
}
