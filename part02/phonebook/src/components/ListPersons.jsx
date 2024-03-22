import DetailPerson from "./DetailPerson"

const ListPersons = ({personsToShow}) => {
  return (
    <div>
      {
        personsToShow.map(person=><DetailPerson key={person.id} person={person} />)
      }
    </div>
  )
}

export default ListPersons