import React from 'react'
import { Todo } from '../types/types'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'


const getTodos =async () => {
  const {data} = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
  return data
}

export const useQueryTasks = () => {
  return useQuery<Todo[], Error>({
    queryKey: ['todos'],
    queryFn: getTodos,
    cacheTime: 1000,
    staleTime: 0,
  })
}
