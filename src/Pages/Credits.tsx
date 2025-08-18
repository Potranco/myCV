import './Credits.css'

export default function Credits() {
  return (
    <section className="bg-black text-white flex justify-center items-center h-screen overflow-hidden">
      <div className="animate-scroll text-center space-y-4 font-mono text-lg">
        <h1 className="text-4xl mb-8">🎬 Créditos</h1>
        <h2>Protagonizado por:</h2>
        <p><span className="text-yellow-400">Chema</span></p>
        <h2>Directores:</h2>
        <p>
          La vida<br/>
          El aburrimiento<br/>
          Ganas de mejorar
        </p>

        <h2>Diseño:</h2>
        <p>
          <a href="https://tailwindcss.com/">tailwindcss</a>
          <br/>
          <a href="https://uiverse.io/profile/Itskrish01">Itskrish01</a>
          <br/>
          <span className="text-green-400">Chema con mucha cafeína ☕</span>
        </p>
        <h2>Arte:</h2>
        <p>
          La mano derecha
          <br/>
          <a href="https://chatgpt.com/">ChatGPT</a>
        </p>
        <h2>Asistente creativo:</h2>
        <p>
          <a href="https://chatgpt.com/">ChatGPT</a>
          <br/>
          <a href="https://www.marioaguiar.net/es/blog/add-a-back-to-top-button-in-react">Mario Aguiar</a>
          <br/>
          <a href="https://codepen.io/GioAc96">GioAc96</a>
          <br/>
          <a href="https://ui.shadcn.com/">shadcn</a>
        </p>
        <h2>Producción:</h2>
        <p>
          <a href="https://duckduckgo.com/?q=duck+duck+ia&atb=v422-1&t=chromentp&ia=chat">Duck.ai</a>
          <br/>
          <a href="https://chatgpt.com/">ChatGPT</a>
        </p>
        <h2>Control de calidad:</h2>
        <p>
          <a href="https://github.com/features/copilot">GitHub Copilot</a>
          <br/>
          <a href="https://jestjs.io/">Jest</a>
          <br/>
          <a href="https://testing-library.com/docs/react-testing-library/intro/">Testing Library</a>
          <br/>
          <a href="https://developer.chrome.com/docs/lighthouse?hl=es-419">Lighthouse</a>
        </p>
        <p>Música mental: <span className="italic">"Eye of the Tiger" 🎵</span></p>
        <p>Inspirado por: <span className="underline">YouTube, Google y Stack Overflow</span></p>
        <p>Patrocinado por: <span className="text-pink-400">Mi paciencia</span></p>
        <p>
          Si me olvide de mencionarte y use tus ideas,<br/>
          tu codigo, tu alma o algo mejor, no fue intencional.<br/>
          Mi edad ya no me permite recordar todo, demasiada información acumulada (especialmente MEMES).</p>
        <p className="mt-8">Fin... o más bien, ¡Continuará!</p>
      </div>
    </section>
  );
}
