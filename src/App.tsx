import './App.css'
import Experience from './components/expirience'
import Education from './components/education'
import Skills from './components/Skills'
import { DataProvider } from './context/data'
import { ErrorsProvider } from './context/ErrorsContext'
import Layout from '@/components/layout/index'
import { useEffect, useState } from 'react'
import InitPage from './components/page/InitPage'

function App() {
  const [theme, setTheme] = useState('ligth')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  const onChangeTheme = () => {
    setTheme(theme === 'dark' ? 'ligth' : 'dark')
  }
  return (
    <ErrorsProvider>
      <DataProvider>
        <Layout>
          <InitPage />
          <Experience />
          <Education />
          <Skills />
          <section id="footer" className="snap-start mt-10 text-sm text-text">
            <p className='flex flex-row gap-2'>
              <span>© 2025 Chema</span> - 
              <a href="mailto:chema@email.com" className="text-blue-600 underline">Contáctame</a>
              - 
              <span onClick={onChangeTheme} className=" text-blue-600">{theme}</span>
            </p>
          </section>
        </Layout>
      </DataProvider>
    </ErrorsProvider>
  )
}

export default App

