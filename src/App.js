import { useState } from 'react';
import './App.css'
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
            
            <Counter></Counter>
            
            
        </div>
    );
}


function Counter(){
    const [count,setCount] = useState(0);
    const incraesecount=()=>{
        setCount(count+1);
    }
   
    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={incraesecount} className='btn btn-primary'>Increase</button>
        </div>
    )
}
export default App;