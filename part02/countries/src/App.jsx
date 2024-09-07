import { useEffect, useState } from 'react'
import countryService from './services/countries'
import Filter from './components/Filter'
import CountryDetail from './components/CountryDetail'
import './index.css'

const App = () => {

  const [ countries, setCountries ] = useState([])
  const [search, setSearch ] = useState('')

  useEffect(()=>{
    countryService
      .getAll()
      .then(countriesList => {
        setCountries(countriesList)
      })
  }, [])

  const handleSearch = (e) => setSearch(e.target.value)
  const countriesToShow = countries.filter(c => {
    const currentCountry = c.name.common.toLowerCase()
    const countryToSearch = search.toLowerCase()
    return currentCountry.includes(countryToSearch)
  })

  if(countriesToShow.length === 1)
    return(
      <>
        <Filter search={search} handleSearch={handleSearch} />
        <CountryDetail country={countriesToShow[0]}/>
      </>
    )
  if(countriesToShow.length === 0)
    return(
      <>
        <Filter search={search} handleSearch={handleSearch} />
        <p>No results</p>
      </>
    )

  return (
    <>
      <Filter search={search} handleSearch={handleSearch} />
      {
        countriesToShow.length >= 10
          ? <p>Too many matches, specify another filter</p>
          : countriesToShow.map(country => <p key={country.cca2}>{country.name.common}</p>)
      }
    </>
  )
}

export default App
