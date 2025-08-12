// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   return (
//     <div>
//       <h1>{course}</h1>
//       <p>
//         {part1} {exercises1}
//       </p>
//       <p>
//         {part2} {exercises2}
//       </p>
//       <p>
//         {part3} {exercises3}
//       </p>
//       <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
//     </div>
//   )
// }

// export default App


// const App = () => {
//   const Header = () => {
//   const course = 'Half Stack application development'
//   return (
//     <h1>{course}</h1>
//     )
//   }

//   const Content = () => {
//     const part1 = 'Fundamentals of React'
//     const exercises1 = 10
//     const part2 = 'Using props to pass data'
//     const exercises2 = 7
//     const part3 = 'State of a component'
//     const exercises3 = 14

//     return(
//       <div>
//         <p>{part1} {exercises1}</p>
//         <p>{part2} {exercises2}</p>
//         <p>{part3} {exercises3}</p>
//       </div>
//       )
//     }
  
//   const Total = (props) => {
//     return(
//       <p>
//         Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}
//       </p>
//     )
//   }

// return (
//   <div>
//     <Header />
//     <Content />
//     <Total />
//   </div>
//   )
// }

// export default App




// 1.3: course information step 3
// const App = () => {
//   const course = 'Half stack application development'
//   const part1 = {
//     name: 'Fundametals of React',
//     exercises: 10,
//   }
//   const part2 = {
//     name: 'Using props to pass data',
//     exercises: 7,
//   }
//   const part3 = {
//     name: 'State of a component',
//     exercises: 14,
//   }
  
//   return(
//     <div>
//       <h1>{course}</h1>
//       <div>
//         <p>{part1.name} {part1.exercises}</p>
//         <p>{part2.name} {part2.exercises}</p>
//         <p>{part3.name} {part3.exercises}</p>
//       </div>
//       <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>
//     </div>
//   )
// }
// export default App





// 1.4: Course Information step 4
// const App = () => {
//   const course = 'Half stack application development'
//   const parts = [
//     {
//       name: 'Fundametals of React',
//       exercises: 10,
//     },
//     {
//       name: 'Using props to pass data',
//       exercises: 7,
//     },
//     {
//       name: 'State of a component',
//       exercises: 14,
//     }
//   ]
  
//   return(
//     <div>
//       <h1>{course}</h1>
//       <div>
//         <p>{parts[0].name} {parts[0].exercises}</p>
//         <p>{parts[1].name} {parts[1].exercises}</p>
//         <p>{parts[2].name} {parts[2].exercises}</p>
//       </div>
//       <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
//     </div>
//   )
// }
// export default App




// 1.5: Course Information step 5
// const App = () => {
//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   }

//   return (
//     <div>
//       <h1>{course.name}</h1>
      
//       <div>
//         <p>{course.parts[0].name} {course.parts[0].exercises}</p>
//         <p>{course.parts[1].name} {course.parts[1].exercises}</p>
//         <p>{course.parts[2].name} {course.parts[2].exercises}</p>
//       </div>

//       <p>Number of exercises {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>
//     </div>
//   )
// }

// export default App





// 2.1 Course information step 6
const App = () => {
    const course = {
        id: 1,
        name: 'Half Stack application development',
        parts: [
            {
              name: 'Fundamentals of React',
              exercises: 10,
              id: 1
            },
            {
              name: 'Using props to pass data',
              exercises: 7,
              id: 3
            },
            {
              name:'State of a component',
              exercises: 14,
              id: 3
            }
        ]
    }
    return <Course course={course} />
}

export default App