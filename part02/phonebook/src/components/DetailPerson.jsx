const DetailPerson = ({person, deletePerson}) => {
  return (
    <p>{person.name} {person.number} <button onClick={()=>deletePerson(person.id)}>delete</button></p>
  )
}

export default DetailPerson