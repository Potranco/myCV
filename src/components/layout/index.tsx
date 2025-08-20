import Menu from '../menu/index'
import BackToTop from '../buttons/BackToTop'

type props = {
  children: React.ReactNode
  theme: string
  onChangeTheme: () => void
}

export default function Layout({ children, theme, onChangeTheme }:props) {
  return (<>
    <BackToTop />
    <div id="main" className="bg-background text-text font-sans snap-y snap-mandatory h-screen w-screen overflow-y-scroll scroll-smooth Menu">
      <Menu theme={theme} onChangeTheme={onChangeTheme} />
      <main  className="max-w-4xl mx-auto p-6 flex flex-col justify-center items-center">
        {children}
      </main>
      
    </div>
  </>)
}