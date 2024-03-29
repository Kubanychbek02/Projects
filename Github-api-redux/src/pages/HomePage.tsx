import React, { useEffect, useState } from 'react'
import RepoCard from '../components/RepoCard'
import { useDebounce } from '../hooks/debounce'
import {useLazyGetUserReposQuery, useSearchUsersQuery} from '../store/github/github.api'

export const HomePage = () => {
  const [search, setSearch] = useState('')
  const [dropdown, setDropdown] = useState(false)
  const debounced = useDebounce(search)
  const {data, isError, isLoading} = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3,
    refetchOnFocus: true
  })
  const [fetchRepos, { isLoading: areReposLoading, data: repos }] = useLazyGetUserReposQuery()

  useEffect(() => {
    setDropdown(debounced.length > 3 && data?.length! > 0)
  }, [debounced, data])

  const clickHandler = (username: string) => {
    fetchRepos(username)
    setDropdown(false)
  }
  
  return (
    <div className='flex justify-center pt-10 h-screen w-screen'>
      { isError && <p className='text-center text-red-600'>Error</p>}

      <div className='relative w-[560px]'>
        <input value={search} onChange={e => setSearch(e.target.value)} type="text" className='border py-2 px-4 w-full h-[42px] mb-2' placeholder='Search for username'/>

        {dropdown ? 
          <ul className='list-none absolute top-[42px] left-0 right-0 max-h-[200px] overflow-y-scroll shadow-md bg-white'>
            { isLoading && <p className='text-center'>Lodading...</p>}
            { data?.map(user => (
              <li onClick={() => clickHandler(user.login)} key={user.id} className='py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer'>
                {user.login}
              </li>
            )) }
          </ul> : ''
        }
        <div className='container'>
          { areReposLoading && <p className='text-center'>Repos are loading...</p>}
          { repos?.map(repo => <RepoCard repo={repo} key={repo.id}/>)}
        </div>
      </div>
    </div>
  )
}
