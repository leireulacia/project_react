import React, {useState} from "react"; // Import useState to use the states
import Tweet from "./Tweet";


function App() { 
  
  const [users, setUsers]=useState ([
    {name: 'Ed', message: 'Hello there'},
    {name: 'John', message: 'I am John snow'},
    {name: 'traversy', message: 'I am awesome'}
  ]);
  /* const [isRed, setRed] = useState(false);// Add the data we want [actual name, funtion that change the value]
  const [count, ssetCount]= useState (0); // Useful to define variable out of the logic of the programme

  const increment =() =>{
    ssetCount(count+1);
    setRed(!isRed); // The opposite of the value whatever is right now
  }
  **********************************************************************
 const [user, setuser]= useState({
    name: 'Ed',
    age:25,
    posts:['my first post' ,'my lovely summer'];

  });
    return(
        <div className= "App">
          <h1 className={isRed ? 'red': ''}>Change my color!</h1>
          <button onClick={increment}>Increment</button>
           <h1>{count}</h1>
        </div>
    );
  }*/

  return(
    <div className= "App">
      {users.map(user=>(
        <Tweet name={user.name} message={user.message}/>
      ))}
    </div>
  );

/*function App() { //This is a container of the App
//name="Dev ED" is a prop for an individual component

  return(
      <div className= "App">
        <Tweet name="Dev ED" message="This is a test 1"/>
        <Tweet name="John Snow" message="This is a test 2"/>
        <Tweet name="John Smith" message="This is a test 3"/>
      </div>
  );*/
}

export default App; // Important
