import './App.css'
import CardUser from './components/cards/CardUser'
import Experience from './components/expirience'
import Education from './components/education'
import Skills from './components/Skills'
import { DataProvider } from './context/data'
import { ErrorsProvider } from './context/ErrorsContext'
import Layout from '@/components/layout/index'
import Description from '@/components/description'
import { useEffect, useState } from 'react'

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
          <CardUser />
          <Description />
          <Experience />
          <Education />
          <Skills />
          <section className="text-center mt-10 text-sm text-text">
            <p>
              © 2025 Chema - 
              <a href="mailto:chema@email.com" className="text-blue-600 underline ml-1 mr-1">Contáctame</a>
              - 
              <span onClick={onChangeTheme} className="ml-1 text-blue-600">{theme}</span>
            </p>
          </section>
        </Layout>
      </DataProvider>
    </ErrorsProvider>
  )
}

export default App

