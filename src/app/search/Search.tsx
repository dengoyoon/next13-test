'use client'

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

type Props = {}

function Search({}: Props) {
  const [search, setSearch] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearch('')
    router.push(`/search/${search}`)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder='Input your Search'
        />
        <button
          type='submit'
        >
          Search
        </button>
      </form>
    </div>
  )
}

export default Search