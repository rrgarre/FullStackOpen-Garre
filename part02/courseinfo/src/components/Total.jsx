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

export default Total