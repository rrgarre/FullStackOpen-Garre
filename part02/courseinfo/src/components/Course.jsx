const Header = ({course}) => <h1>{course}</h1>

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