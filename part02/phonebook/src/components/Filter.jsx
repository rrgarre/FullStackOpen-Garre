const Filter = ({search, setSearch}) => {
  return (
    <div>
      <input value={search} onChange={(e)=>setSearch(e.target.value)} />
    </div>
  )
}

export default Filter