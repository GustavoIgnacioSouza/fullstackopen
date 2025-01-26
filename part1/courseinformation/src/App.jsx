const Header = ({ course }) => <h1>{course}</h1>

const Part = ({ name, exercises }) => <p key={name}>{name} {exercises}</p>

const Content = ({ parts }) => {
  let partsArray = []
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

const Total = ({ parts }) => {
  let sum = 0
  for (let i = 0; i < parts.length; i++) {
    sum += parts[i].exercises
  }

  return (
    <p>Number of exercises <b>{sum}</b></p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',

    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App