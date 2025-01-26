const Header = ({course}) => {
  return (
    <h1>{course}</h1>  
  )
}

const Part = (part) => {
  console.log (part.name, part.exercises)
  return (
    <p key={part.name}>{part.name} {part.exercises}</p>
  )
}

const Content = ({parts}) => {
  let partsArray = []
  console.log(parts)
  for (let i = 0; i < parts.length; i++) {
    const element = parts[i];
    partsArray.push(Part(element))
  }

  return (
    <div>
      {partsArray}
    </div>
  )
}


const Total = ({parts}) => {
  let sum = 0
  for (let i = 0; i < parts.length; i++) {
    sum += parts[i].exercises
  }
  
  return (
    <p>Number of exercises <b>{sum}</b></p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={[part1, part2, part3]} />
      <Total parts={[part1, part2, part3]} />
    </div>
  )
}

export default App