import { FC } from 'react'
import './App.css'
import { Layout } from './components/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ClassicalFetchA } from './components/ClassicalFetchA'
import { ClassicalFetchB } from './components/ClassicalFetchB'
import { StateProvider } from './context/StateProvider'

const App: FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <StateProvider>
          <Layout>
            <Routes>
              <Route path="/fetch-a" element={<ClassicalFetchA />} />
              <Route path="/fetch-b" element={<ClassicalFetchB />} />
            </Routes>
          </Layout>
        </StateProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
