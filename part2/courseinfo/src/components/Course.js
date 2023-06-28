const Course = ({course}) => {
    return(
      <div>
        <Header name={course.name} />
        <Content parts={course.parts} />
      </div>
    )
  }
  
  const Header = ({name}) => {
    return(
      <h2>{name}</h2>
    )
  }
  
  const Content = ({parts}) => {
    
    const total = parts.reduce((acc,curr) => {
      return acc + curr.exercises
    },0)
  
    return(
      <div>
      {
        parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)
      }
      <Total total={total} />
      </div>
    )
  }
  
  const Part = ({name,exercises}) => {
    return(
      <p>
        {name} {exercises}
      </p>
    )
  }
  
  const Total = ({total}) => {
    return(
      <p><b>Total of {total} exercises</b></p>
    )
  }

  export default Course