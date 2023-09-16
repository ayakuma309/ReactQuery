import { useState, useEffect } from 'react'
import { useStateContext } from '../context/StateProvider'
import axios from 'axios'

export const useClassicalFetch = () => {
  //contextから取得
  const { todos, setTodos } = useStateContext()

  //loading and error states
  const [isLoading, setLoading] = useState(false)
  const [isError, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setError(false)
      setLoading(true)
      try {
        const res = await axios('https://jsonplaceholder.typicode.com/todos')
        setTodos(res.data)
      } catch (error) {
        setError(true)
      }
      setLoading(false)
    }
    fetchData()
  }, [setTodos])

  return { todos, isLoading, isError }
}
