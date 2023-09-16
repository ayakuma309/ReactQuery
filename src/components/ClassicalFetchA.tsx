import { FC } from 'react'
import { useClassicalFetch } from '../hooks/useClassicalFetch'
import { useNavigate } from 'react-router-dom'
import { ChevronDoubleRightIcon } from '@heroicons/react/solid'

export const ClassicalFetchA: FC = () => {
  const navigate = useNavigate()
  const { isLoading, isError, todos } = useClassicalFetch()
  // console.log('rendered ClassicalFetchA')
  if (isLoading) return <div>{'Loading...'}</div>
  if (isError) return <div>{'Error'}</div>
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="mb-3 text-center font-bold">ClassicalFetchA</p>
      {todos?.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
      <ChevronDoubleRightIcon
        onClick={() => navigate('/fetch-b')}
        className="mt-2 h-5 w-5 cursor-pointer text-blue-500"
      />
      <p className="text-sm">fetch B</p>
    </div>
  )
}
