import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import FormNewPerson from './components/FormNewPerson'
import ListPersons from './components/ListPersons'
import Notification from './components/Notification'
import personService from './services/persons'
import './index.css'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const [confirmMessage, setConfirmMessage] = useState(null)

  useEffect(()=>{
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const handleForm = (e) => {
    e.preventDefault()
    // REPLACE NUMBER if already exists
    const duplicatedPerson = persons.find(person=>person.name.toLowerCase() === newName.toLowerCase())
    if(duplicatedPerson){
      if(confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
        const changedPerson = {...duplicatedPerson, number: newNumber}
        personService
          .update(duplicatedPerson.id, changedPerson)
          .then(addedPerson => {
            setPersons(persons.map(p => p.id !== addedPerson.id ? p : addedPerson))
            setConfirmMessage(`Edited ${newNumber} for ${newName}`)
            hideMessage()
          })
      }
      return
    }
    // or CREATE a new person
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
        setConfirmMessage(`Added ${newName}`)
        hideMessage()
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

  const hideMessage = () => {
    setTimeout(() => {
      setConfirmMessage(null)
    }, 4000);
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={confirmMessage}/>
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