import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';
//import Header from './component/Header'

/* const singerStyle = {
    color:'purple',
    backgroundColor:'white',
}
 */
function App() {
    return ( 
        <div className='App'>
            <h1 style={{color:'red'}}>React</h1>
            
            {/* <Counter></Counter> */}
            <ExternalUsers></ExternalUsers>
            
            
        </div>
    );
}
function ExternalUsers(props){
    const [users,setUsers]=useState([])
    
    useEffect(() => {
        loadUsers()
    },[])
    const loadUsers = async()=>{
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(data);
        setUsers(data);
    }
    return(
        <div>
            <h1>User Information:{users.length}</h1>
            {
                users.map(user => <User user={user}></User>)
            }
        </div>
    )
}
function User ({user}){
    return(
        <div className='person'>
            <h1>Name:{user.name}</h1>
            <p>Email:{user.email}</p>
            <p>Username:{user.username}</p>
        </div>
    )
}
// function Counter(){
//     const [count,setCount] = useState(0);
//     const incraeseCount=()=>{
//         setCount(count+1);
//     }
//     const decreaseCount=()=>{
//         setCount(count-1);
//     }
   
//     return(
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={incraeseCount} className='btn btn-primary'>Increase</button>
//             <button onClick={decreaseCount} className='btn btn-'>Decrease</button>
//         </div>
//     )
// }
export default App;