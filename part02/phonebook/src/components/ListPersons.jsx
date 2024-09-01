import DetailPerson from "./DetailPerson"

const ListPersons = ({personsToShow, deletePerson}) => {
  return (
    <div>
      {
        personsToShow.map(person=><DetailPerson 
          key={person.id} 
          person={person}
          deletePerson={()=>deletePerson(person.id)} 
        />)
      }
    </div>
  )
}

export default ListPersons