import { useContext, useState, createContext, ReactNode, FC } from 'react'
import { Todo } from '../types/types'

interface StateContextType{
  todos: Todo[] | null
  dark: boolean
  setTodos: React.Dispatch<React.SetStateAction<Todo[] | null>>
  setDark: React.Dispatch<React.SetStateAction<boolean>>
}

const StateContext = createContext({} as StateContextType)
interface Props {
  children: ReactNode
}

export const StateProvider:FC<Props>= ({ children}) => {
  const [todos, setTodos] = useState<Todo[] | null>(null)
  const [dark, setDark] = useState<boolean>(false)
  return (
    <StateContext.Provider value={{ todos, setTodos, dark, setDark }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = (): StateContextType => useContext(StateContext)
