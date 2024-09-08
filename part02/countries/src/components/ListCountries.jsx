const ListCountries = ({countriesToShow, handleSelectCountry}) => {
  return(
    countriesToShow.map(country => {
      return(
        <p key={country.cca2}>
          {country.name.common}
          <button onClick={()=>handleSelectCountry(country.name.common)}>
            show
          </button>
        </p>
      )
    })
  )
}

export default ListCountries