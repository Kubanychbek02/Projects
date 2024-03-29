import React from 'react'
import { useAppSelector } from '../hooks/redux'

export const Favourites = () => {
  const {favourites} = useAppSelector(state => state.github)

  if (favourites.length === 0) return <p className='tex-center'>No items.</p>
  return (
    <div className='flex justify-center pt-10 h-screen w-screen'>
      <ul className='list-none'>
        { favourites.map(f => (
          <li key={f}>
            <a href={f}>{f}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
