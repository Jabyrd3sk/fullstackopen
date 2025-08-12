// const App = () => {
//   const now = new Date()
//   const a = 10
//   const b = 20
//   console.log(now, a+b)

import { use, useState, useSyncExternalStore } from "react"

//   return (
//     <div>
//       <p>Hello world, it is {now.toString()}</p>
//       <p>
//         {a} plus {b} is {a + b}
//       </p>
//     </div>
//   )
// }

// export default App




// JSX
// const App = () => {
//   const now = new Date()
//   const a = 10
//   const b = 20
//   console.log(now, a+b)


//   return React.createElement(
//     'div',
//     null,
//     React.createElement(
//       'p', null, 'Hello world, it is ', now.toString()
//     ),
//     React.createElement(
//       'p', null, a, ' plus ', b, ' is ', a + b
//     )
//   )
// }

// export default App




// Multiple components
// const Hello = () => {
//   return (
//     <div>
//       <p>Hello world</p>
//     </div>
//   )
// }

// const App = () => {
//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello />
//       <Hello />
//       <Hello />
//     </div>
//   )
// }
// export default App




// props: passing data to components
// const Hello = (props) => {
//   return (
//     <div>
//       <p>Hello {props.name}</p>
//     </div>
//   )
// }

// const App = () => {
//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name='George' />
//       <Hello name='Daisy' />
//     </div>
//   )
// }
// export default App


// const Hello = (props) => {
//   console.log(props)
//   return (
//     <div>
//       <p>
//         Hello {props.name}, you are {props.age} years old
//       </p>
//     </div>
//   )
// }

// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name='Maya' age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   )
// }

// export default App



// Do not render objects
// error
// const App = () => {
//   const friends = [
//     {name: 'Peter', age: 4},
//     {name: 'Maya', age: 10},
//   ]

//   return (
//     <div>
//       <p>{friends[0]}</p>
//       <p>{friends[1]}</p>
//     </div>
//   )
// }
// export default App

// The fix is as follows
// const App = () => {
//   const friends = [
//     {name: 'Peter', age: 4},
//     {name: 'Maya', age: 10},
//   ]

//   return (
//     <div>
//       <p>{friends[0].name} {friends[0].age}</p>
//       <p>{friends[1].name} {friends[1].age}</p>
//     </div>
//   )
// }

// export default App






// Part 1c: Component state, event handlers
// const Hello = (props) => {
//   return (
//     <div>
//       <p>
//         Hello {props.name}, you are {props.age} years old
//       </p>
//     </div>
//   )
// }

// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return(
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   )
// }

// export default App



// Component helper functions
// const Hello = (props) => {
//   const bornYear = () => {
//     const yearNow = new Date().getFullYear()
//     return yearNow - props.age
//   }

//   return (
//     <div>
//       <p>
//         Hello {props.name}, you are {props.age} years old
//       </p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   )
// }

// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return(
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   )
// }

// export default App




// Destructing
// const Hello = (props) => {
//   // const name = props.name
//   // const age = props.age

//   // OR

//   const {name, age} = props

//   const bornYear = () => new Date().getFullYear() - age
  
//   return (
//     <div>
//       <p>Hello {name}, you are {age} years old</p>
//       <p>So you were probably borin in {bornYear()}</p>
//     </div>
//   )
// }

// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return(
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   )
// }

// export default App



// const Hello = ({name, age}) => {
//   const bornYear = () => new Date().getFullYear() - age

//   return (
//     <div>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   )
// }

// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return(
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   )
// }

// export default App





// Page rendering
// const App = (props) => {
//   const {counter} = props
//   return (
//     <div>{counter}</div>
//   )
// }

// export default App




// Stateful component
// import {useState} from 'react'

// const App = () => {
//   const [counter, setCounter] = useState(0)

//   setTimeout(() => setCounter(counter + 1), 1000)

//   console.log('rendering...', counter)

//   return(
//     <div>{counter}</div>
//   )
// }
// export default App




// Event handling
// const App = () => {
//   const [counter, setCounter] = useState(0)
//   const handleClick = () => {
//     console.log('clicked')
//   }

//   return (
//     <div>
//       <div>{counter}</div>
//       <button onClick={handleClick}>Plus</button>
//     </div>
//   )
// }

// OR

// const App = () => {
//   const [counter, setCounter] = useState(0)
//   return (
//     <div>
//       <div>{counter}</div>
//       <button onClick={() => console.log('clicked')}>Plus</button>
//     </div>
//   )
// }
// export default App 


// const App = () => {
//   const [counter, setCounter] = useState(0)
//   return (
//     <div>
//       <div>{counter}</div>
//       <button onClick={() => setCounter(counter + 1)}>Plus</button>
//       <button onClick={() => setCounter(0)}>Reset</button>
//     </div>
    
//   )
// }
// export default App 




// An event handler is a function
// const App = () => {
//   const [counter, setCounter] = useState(0)
//   const increasedByOne = () => setCounter(counter + 1)
//   const setToZero = () => setCounter(0)

//   return (
//     <div>
//       <div>{counter}</div>
//       <button onClick={increasedByOne}>Plus</button>
//       <button onClick={setToZero}>Zero</button>
//     </div>
//   )
// }
// export default App



// Passing State - to child components
// const Display = (props) => {
//   return (
//     <div>{props.counter}</div>
//   )
// }

// const App = () => {
//   const [counter, setCounter] = useState(0)

//   const increasedByOne = () => setCounter(counter + 1)
//   const decreasedByOne = () => setCounter(counter - 1)
//   const setToZero = () => setCounter(0)

//   return (
//     <div>
//       <Display counter={counter}/>
//       <button onClick={increasedByOne} text='plus'/>
//       <button onClick={decreasedByOne} text='minus'/>
//       <button onClick={setToZero} text='zero'/>
//     </div>
//   )
// }

// export default App





// Changin in state cause re-rendering
// const Display = (props) => {
//   return (
//     <div>{props.counter}</div>
//   )
// }

// const App = () => {
//   const [counter, setCounter] = useState(0)
//   console.log('rendering with counter value', counter)

//   const increasedByOne = () => {
//     console.log('Increasing value before', counter)
//     setCounter(counter + 1)
//   }

//   const decreasedByOne = () => {
//     console.log('Decreasing, value before', counter)
//     setCounter(counter - 1)
//   }

//   const setToZero = () => {
//     console.log('Resetting to zero, value before', counter)
//     setCounter(0)
//   }

//   return (
//     <div>
//       <Display counter={counter}/>
//       <button onClick={increasedByOne} text="plus" />
//       <button onClick={decreasedByOne} text="minus" />
//       <button onClick={setToZero} text="zero" />
//     </div>
//   )
// }

// export default App








// Part 1d: A more complex state, debugging React Apps
// Complex state
// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] =  useState(0)

//   return (
//     <div>
//       {left}
//       <button onClick={() => setLeft(left + 1)}>left</button>
//       <button onClick={() => setRight(right + 1)}>right</button>
//       {right}
//     </div>
//   )
// }
// export default App




// const App = () => {
//   const [clicks, setClicks] = useState({
//     left: 0, right: 0
//   })

//   const handleLeftClick = () => {
//     const newClicks = {
//       left: clicks.left + 1,
//       right: clicks.right,
//     }
//     setClicks(newClicks)
//   }

//   const handleRightClick = () => {
//     const newClicks = {
//       left: clicks.left,
//       right: clicks.right + 1,
//     }
//     setClicks(newClicks)
//   }

//   return (
//     <div>
//       {clicks.left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {clicks.right}
//     </div>
//   ) 
// }
// export default App


// OR

// const App = () => {
//   const [clicks, setClicks] = useState({
//     left: 0, right: 0
//   })

//   const handleLeftClick = () => {
//     const newClicks = {
//       ...clicks,
//       left: clicks.left + 1,
//     }
//     setClicks(newClicks)
//   }

//   const handleRightClick = () => {
//     const newClicks = {
//       ...clicks,
//       right: clicks.right + 1,
//     }
//     setClicks(newClicks)
//   }

//   return (
//     <div>
//       {clicks.left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {clicks.right}
//     </div>
//   ) 
// }
// export default App

// OR

// const App = () => {
//   const [clicks, setClicks] = useState({
//     left: 0, right: 0
//   })

//   const handleLeftClick = () => {
//     setClicks({...clicks, left: clicks.left + 1})
//   }

//   const handleRightClick = () => {
//     setClicks({...clicks, right: clicks.right + 1})
//   }

//   return (
//     <div>
//       {clicks.left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {clicks.right}
//     </div>
//   ) 
// }
// export default App



// Handling Arrays
// const App = () => {
//   const [left, setLeft] = useState(0)
//   const[right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     setLeft(left + 1)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     setRight(right + 1)
//   }

//   return (
//     <div>
//       {left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {right}
//       <p>{allClicks.join(' ')}</p>
//     </div>
//   )
// }
// export default App



// Update of the state is asynchronous
// const App = () => {
//   const [left, setLeft] = useState(0)
//   const[right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])
//   const [total, setTotal] = useState(0)

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     setLeft(left + 1)
//     setTotal(left + right)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     setRight(right + 1)
//     setTotal(left + right)
//   }

//   return (
//     <div>
//       {left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {right}
//       <p>{allClicks.join(' ')}</p>
//       <p>total {total}</p>
//     </div>
//   )
// }
// export default App

// OR (fixing the index numbering in total)

// const App = () => {
//   const [left, setLeft] = useState(0)
//   const[right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])
//   const [total, setTotal] = useState(0)

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     const updatedLeft = left + 1
//     setLeft(updatedLeft)
//     setTotal(updatedLeft + right)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     const updatedRight = right + 1
//     setRight(updatedRight)
//     setTotal(updatedRight + right)
//   }

//   return (
//     <div>
//       {left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {right}
//       <p>{allClicks.join(' ')}</p>
//       <p>total {total}</p>
//     </div>
//   )
// }
// export default App




// Conditional Rendering
// const History = (props) => {
//   if (props.allClicks.length === 0) {
//     return (
//       <div>
//         the app is used by pressing buttons
//       </div>
//     )
//   }
//   return (
//     <div>
//       button press history: {props.allClicks.join(' ')}
//     </div>
//   )
// }

// const App = () => {
//   const [left, setLeft] = useState(0)
//   const[right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])
//   const [total, setTotal] = useState(0)

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     const updatedLeft = left + 1
//     setLeft(updatedLeft)
//     setTotal(updatedLeft + right)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     const updatedRight = right + 1
//     setRight(updatedRight)
//     setTotal(left + updatedRight)
//   }

//   return (
//     <div>
//       {left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {right}
//       <History allClicks={allClicks}/>
//       <p>total clicks {total}</p>
//     </div>
//   )
// }
// export default App



// const History = (props) => {
//   if (props.allClicks.length === 0) {
//     return (
//       <div>
//         the app is used by pressing buttons
//       </div>
//     )
//   }
//   return (
//     <div>
//       button press history: {props.allClicks.join(' ')}
//     </div>
//   )
// }

// const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

// const App = () => {
//   const [left, setLeft] = useState(0)
//   const[right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])
  
//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     setLeft(left + 1)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     setRight(right + 1)
//   }

//   return (
//     <div>
//       {left}
//       <Button onClick={handleLeftClick} text="left" />
//       <Button onClick={handleRightClick} text="right" />
//       {right}
//       <History allClicks={allClicks}/>
//     </div>
//   )
// }
// export default App





// Debugging React applications
// const History = (props) => {
//   if (props.allClicks.length === 0) {
//     return (
//       <div>
//         the app is used by pressing buttons
//       </div>
//     )
//   }
//   return (
//     <div>
//       button press history: {props.allClicks.join(' ')}
//     </div>
//   )
// }

// const App = () => {
//   const [left, setLeft] = useState(0)
//   const[right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])
//   const [total, setTotal] = useState(0)

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     const updatedLeft = left + 1
//     setLeft(updatedLeft)
//     setTotal(updatedLeft + right)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     const updatedRight = right + 1
//     setRight(updatedRight)
//     setTotal(left + updatedRight)
//   }

//   return (
//     <div>
//       {left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {right}
//       <History allClicks={allClicks}/>
//       <p>total clicks {total}</p>
//     </div>
//   )
// }
// export default App




// Rules of Hooks ("useState" function must not be called inside of a loop, 
// a conditional expression, or any place that is not a function defining a component)

// const App = () => {
//   // these are ok
//   const [age, setAge] = useState(0)
//   const [name, setName] = useState('Juha Tauriainen')

//   if (age > 10) {
//     // this does not work!
//     const [foobar, setFoobar] = useState(null)
//   }

//   for (let i = 0; i < age; i++){
//     // also this is not good
//     const [rightWay, setRightWay] = useState(false)

//     const notGood = () => {
//       // and this is  also illegal
//       const[x, setX] = useState(-1000)
//     }
//   }
  
//   return(
//     // ...
//   )
// }





// Event Handling Revisited
// const App = () => {
//   const [value, setValue] = useState(10)

//   return (
//     <div>
//       {value}
//       {/* <button onClick={() => console.log('clicked the button')}>reset to zero</button> */}
//       <button onClick={() => setValue(0)}>reset to zero</button>
//     </div>
//   )
// }
// export default App






// A function that returns a function
// const App = () => {
//   const [value, setValue] = useState(10)

//   const setToValue = (newValue) => () => {
//     console.log('value now', newValue) // print new value to console
//     setValue(newValue)
//   }

//   return (
//     <div>
//       <button onClick={setToValue(1000)}>thousand</button>
//       <button onClick={setToValue(0)}>reset</button>
//       <button onClick={setToValue(value + 1)}>increment</button>
//     </div>
//   )
// }
// export default App


// const App = () => {
//   const [value, setValue] = useState(10)

//   const setToValue = (newValue) => {
//     console.log('value now', newValue) // print new value to console
//     setValue(newValue)
//   }

//   return (
//     <div>
//       <button onClick={() => setToValue(1000)}>thousand</button>
//       <button onClick={() => setToValue(0)}>reset</button>
//       <button onClick={() => setToValue(value + 1)}>increment</button>
//     </div>
//   )
// }
// export default App





// Passing Event Handlers to Child Components
// const Button = (props) => (
//   <button onClick={props.onClick}>
//     {props.text}
//   </button>
// )

// const App = () => {
//   const [value, setValue] = useState(10)

//   const setToValue = (newValue) => {
//     console.log('value now', newValue)
//     setValue(newValue)
//   }

//   return (
//     <div>
//       {value}
//       <Button onClick={() => setToValue(1000)} text="thousand" />
//       <Button onClick={() => setToValue(0)} text="reset" />
//       <Button onClick={() => setToValue(value + 1)} text="increment" />
//     </div>
//   )
// }
// export default App




// Do Not Define Components Within Components
//This is the right place to define a component
const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const Display = props => <div>{props.value}</div>

const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = (newValue) => {
    console.log('value now', newValue)
    setValue(newValue)
  }

  return (
    <div>
      <Display value={value} />
      <Button onClick={() => setToValue(1000)} text="thousand" />
      <Button onClick={() => setToValue(0)} text="reset" />
      <Button onClick={() => setToValue(value + 1)} text="increment" />
    </div>
  )
}
export default App
