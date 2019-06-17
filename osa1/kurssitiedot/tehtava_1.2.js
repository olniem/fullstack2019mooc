import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    );
};



const Content = (props) => {
    return (
        <div>
            <Part name={props.name1} exercices={props.exercices1} />
            <Part name={props.name2} exercices={props.exercices2} />
            <Part name={props.name3} exercices={props.exercices3} />
        </div>
    );
};

const Part = (props) => {
    return (
        <p>
            {props.name} {props.exercices}
        </p>
    );
}

const Total = (props) => {
    return (
        <p>Number of exercises {props.total}</p>
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

  const total = exercises1 + exercises2 + exercises3;

  return ( 
    <div>
      <Header course={course} />

      <Content name1={part1} exercices1={exercises1} name2={part2} exercices2={exercises2} name3={part3} exercices3={exercises3}/>

      <Total total={total} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
