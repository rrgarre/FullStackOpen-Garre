import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  const handleForm = (e) => {
    e.preventDefault()
    if(persons.find(person=>person.name.toLowerCase() === newName.toLowerCase())){
      alert(`${newName} is already added to phonebook`)
      return
    }
    setPersons(persons.concat({
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
      <div>
        <input value={search} onChange={(e)=>setSearch(e.target.value)} />
      </div>
      <h2>add a new</h2>
      <form onSubmit={handleForm}>
        <div>
          name: <input value={newName} onChange={(e)=>setNewName(e.target.value)}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={(e)=>setNewNumber(e.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {
          personsToShow.map(person=><p key={person.name}>{person.name} {person.number}</p>)
        }
      </div>
    </div>
  )
}

export default App