import { useState } from 'react'
import Filter from './components/Filter'
import FormNewPerson from './components/FormNewPerson'
import ListPersons from './components/ListPersons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
    { name: 'Charlie Johnson', number: '381-556-9692', id: 5 },
    { name: 'David Clark', number: '628-365-2204', id: 6 },
    { name: 'Ella Lee', number: '113-981-5265', id: 7 },
    { name: 'Frank Hall', number: '758-336-9578', id: 8 },
    { name: 'Alice Smith', number: '024-824-1973', id: 9 },
    { name: 'Bob Hill', number: '871-500-0118', id: 10 },
    { name: 'Grace Lewis', number: '579-963-7720', id: 11 },
    { name: 'John Taylor', number: '286-049-8743', id: 12 },
    { name: 'Jane Doe', number: '071-858-1456', id: 13 },
    { name: 'Emma Johnson', number: '908-632-1145', id: 14 },
    { name: 'Oliver Smith', number: '123-456-7890', id: 15 },
    { name: 'Sophia Taylor', number: '987-654-3210', id: 16 },
    { name: 'William Brown', number: '456-789-0123', id: 17 },
    { name: 'James Johnson', number: '321-654-0987', id: 18 },
    { name: 'Olivia Lee', number: '789-012-3456', id: 19 },
    { name: 'Benjamin Clark', number: '654-987-3210', id: 20 }
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
      {/* <div>
        {
          personsToShow.map(person=><p key={person.name}>{person.name} {person.number}</p>)
        }
      </div> */}
      <ListPersons personsToShow={personsToShow}/>
    </div>
  )
}

export default App