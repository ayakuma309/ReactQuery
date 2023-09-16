import { FC } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { ChevronDoubleLeftIcon } from '@heroicons/react/solid'
import { Todo } from '../types/types'

export const ReactQueryB: FC = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const data = queryClient.getQueryData<Todo[]>(['todos'])
  console.log('rendered ReactQueryB')
  return (
    <>
      <p className="my-3 font-bold">ReactQueryB</p>
      {data?.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
      <ChevronDoubleLeftIcon
        onClick={() => navigate('/')}
        className="mt-2 h-5 w-5 cursor-pointer text-blue-500"
      />
      <p className="text-sm">react query A</p>
    </>
  )
}
