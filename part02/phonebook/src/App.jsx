import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import FormNewPerson from './components/FormNewPerson'
import ListPersons from './components/ListPersons'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  useEffect(()=>{
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const handleForm = (e) => {
    e.preventDefault()
    if(persons.find(person=>person.name.toLowerCase() === newName.toLowerCase())){
      alert(`${newName} is already added to phonebook`)
      return
    }
    const newPerson = {
      // id: persons.length + 1,
      name: newName,
      number: newNumber
    }
    personService
      .create(newPerson)
      .then(addedPerson => {
        setPersons(persons.concat(addedPerson))
        setNewName('')
        setNewNumber('')
      })
  }

  const deletePerson = id => {
    if(confirm(`Borrar la persona ${id}`)){
      personService
        .remove(id)
        .then(response => {
          setPersons(persons.filter(p => p.id !== id))
        })
    }
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
      <ListPersons 
        personsToShow={personsToShow}
        deletePerson={deletePerson}
      />
    </div>
  )
}

export default App