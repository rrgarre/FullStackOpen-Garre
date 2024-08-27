import { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import FormNewPerson from './components/FormNewPerson'
import ListPersons from './components/ListPersons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  useEffect(()=>{
    console.log('effect')
    axios
      .get("http://localhost:3001/persons")
      .then(result => {
        setPersons(result.data)
      })
  }, [])

  const handleForm = (e) => {
    e.preventDefault()
    if(persons.find(person=>person.name.toLowerCase() === newName.toLowerCase())){
      alert(`${newName} is already added to phonebook`)
      return
    }
    setPersons(persons.concat({
      id: persons.length + 1,
      name: newName,
      number: newNumber
    }))
    setNewName('')
    setNewNumber('')
  }

  const personsToShow = persons.filter((person) => {
    const currentName = person.name.toLowerCase()
    const currentSearch = search.toLowerCase() 
    return currentName.includes(currentSearch)
  })
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} setSearch={setSearch} />
      <h3>add a new</h3>
      <FormNewPerson
        handleForm={handleForm}
        newName={newName} 
        newNumber={newNumber} 
        setNewName={setNewName} 
        setNewNumber={setNewNumber} 
      />
      <h3>Numbers</h3>
      <ListPersons personsToShow={personsToShow}/>
    </div>
  )
}

export default App