import './App.css'
import Experience from './components/expirience'
import Education from './components/education'
import Skills from './components/Skills'
import Footer from './components/footer'
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
        <Layout onChangeTheme={onChangeTheme} theme={theme}>
          <InitPage />
          <Experience />
          <Education />
          <Skills />
          <Footer onChangeTheme={onChangeTheme} theme={theme} />
        </Layout>
      </DataProvider>
    </ErrorsProvider>
  )
}

export default App

