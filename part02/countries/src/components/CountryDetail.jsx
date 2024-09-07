const CountryDetail = ({country}) => {
  const langs = []
  for (let clave in country.languages) {       
    let valor = country.languages[clave]
    langs.push(valor)
  } 
  return(
    <>
      <h2>{country.name.common}</h2>
      <p>capital {country.capital[0]}</p>
      <p>area {country.area}</p>

      <h3>languages:</h3>
      <ul>
        {
          langs.map(lang => <li key={lang}>{lang}</li>)
        }
      </ul>

      <img className="flag" src={country.flags.png} />
    </>
  )
}

export default CountryDetail