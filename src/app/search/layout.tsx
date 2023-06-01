import Search from './Search'

type Props = {
  children: React.ReactNode,
}

function SearchLayout({ children }: Props) {
  return (
    <div>
      <div>
        <h1>Search</h1>
      </div>
      <div>
        <Search />
        <div>{children}</div>
      </div>
    </div>
  )
}

export default SearchLayout