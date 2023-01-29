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
            <Person name="Nasim Ahmed" job="Development"></Person>
            <Person name="Bulbul Islam" job="Developer"></Person>
        </div>
    );
}
function Person({name,job}){
    return(
   <div className='person'>
        <h1 className='btn btn-primary'>{name}</h1>
        <h2>profession:{job}</h2>
    </div>     
    )
}
export default App;