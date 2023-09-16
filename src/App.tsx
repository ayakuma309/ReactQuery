import { FC } from 'react'
import './App.css'
import { Layout } from './components/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ClassicalFetchA } from './components/ClassicalFetchA'
import { ClassicalFetchB } from './components/ClassicalFetchB'
import { StateProvider } from './context/StateProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryA } from './components/ReactQueryA'
import { ReactQueryB } from './components/ReactQueryB'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { MainContext } from './components/MainContext'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      //3回までリトライするを無効化
      retry: false,
      //過剰なリフェッチを防ぐ
      refetchOnWindowFocus: false,
    },
  },
})
const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <StateProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<ReactQueryA />} />
              <Route path="/query-b" element={<ReactQueryB />} />
              <Route path="/fetch-a" element={<ClassicalFetchA />} />
              <Route path="/fetch-b" element={<ClassicalFetchB />} />
              <Route path="/main-context" element={<MainContext />} />
            </Routes>
          </Layout>
        </StateProvider>
      </BrowserRouter>
      {/* ReactQuery のでdeveloper toolsが立ち上がるので最初はfalseに設定する */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
