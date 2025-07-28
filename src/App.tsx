import './App.css'
import CardUser from './components/cards/CardUser'
import Experience from './components/expirience'
import Education from './components/education'
import Skills from './components/Skills'
import { DataProvider } from './context/data'
import { ErrorsProvider } from './context/ErrorsContext'
import Layout from '@/components/layout/index'
import Description from '@/components/description'

function App() {
  return (
    <ErrorsProvider>
      <DataProvider>
        <Layout>
          <CardUser />
          <Description />
          <Experience />
          <Education />
          <Skills />
          <section className="text-center mt-10 text-sm text-gray-600">
            <p>© 2025 Chema · <a href="mailto:chema@email.com" className="text-blue-600 underline">Contáctame</a></p>
          </section>
        </Layout>
      </DataProvider>
    </ErrorsProvider>
  )
}

export default App

