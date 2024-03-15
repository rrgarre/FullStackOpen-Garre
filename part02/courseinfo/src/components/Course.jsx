const Header = ({course}) => <h2>{course}</h2>

const Content = ({parts}) => {
  return (
    <div>
      {
        parts.map(part => <Part key={part.id} part={part} />)
      }
    </div>
  )
}

const Part = ({part}) => <p>{part.name} {part.exercises}</p>

const Total = ({parts}) => {
  const totalEx = parts.reduce(
    (total, part) => {
      console.log('total: ', total)
      console.log('part: ', part.exercises)
      return total + part.exercises
    }, 
    0
  )
  return(
    <p><b>{`total of ${totalEx} exercises`}</b></p>
  )
}

const Course = ({course}) => {

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default Course