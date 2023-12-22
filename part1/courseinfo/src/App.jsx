const Header = ({course}) => {
  return (
    <>
      <h1>{course}</h1>
    </>
  )
}

const Part = ({name, numberOfExcises}) => {
  return (
  <>
    <p> {name} {numberOfExcises} </p>
  </>
  )
}

const  Content = ({parts, exercises}) => {
  return(
    <div>
      <Part name={parts[0]} numberOfExcises = {exercises[0]}/>
      <Part name={parts[1]} numberOfExcises = {exercises[1]}/>
      <Part name={parts[2]} numberOfExcises = {exercises[2]}/>
    </div>
      )
}

const Total = ({exercises1, exercises2, exercises3}) =>{
 return(<>
  <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
 </>
 )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course = {course}/>
      <Content parts = {[part1, part2, part3]} exercises={[exercises1, exercises2, exercises3]}/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )
}

export default App