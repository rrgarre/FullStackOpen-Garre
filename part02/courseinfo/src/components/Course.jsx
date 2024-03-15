const Header = (props) => <h1>{props.course}</h1>
const Content = ({parts}) => {
  return (
    <div>
      {
        parts.map(part => <Part key={part.id} part={part} />)
      }
    </div>
  )
}
const Part = (props) => <p>{props.part.name} {props.part.exercises}</p>

const Course = ({course}) => {

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts} />
    </div>
  )
}

export default Course