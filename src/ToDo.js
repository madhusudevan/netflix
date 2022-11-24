import './App.css'
import {useState} from 'react'


function App() {
  const [ToDos,setToDos]=useState([])
  const [ToDo,setToDo]=useState('')
 return (
  <div className="app">
  <div className="mainHeading">
    <h1>ToDo List</h1>
  </div>
  <div className="subHeading">
    <br />
    <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
  </div>
  <div className="input">
    <input value={ToDo} onChange={(e)=>setToDo(e.target.value)} placeholder="🖊️ Add item..." />
    <i onClick={()=>setToDos([...ToDos,{id:Date.now (), text:ToDo,status:false}])} className="fas fa-plus"></i>
  </div>
  <div className="todos">
  <h1>{ToDo}</h1>
  {
   ToDos.map((obj,index)=>{
    
  return(<div className="todo">
      <div className="left">
        <input onChange={(e)=>{
          // 
          setToDos(ToDos.filter(obj2=>{
            if(obj2.id===obj.id){
              obj2.status=e.target.checked
              //console.log(obj2,"hdhhd")
            }
            return obj2
          }))

        }}  value={obj.status} type="checkbox" name="" id="" />
        <p>{obj.text}</p>
       
      </div>
      <div className="right">
        <i className="fas fa-times"onClick={()=>{
        
        
         setToDos( ToDos.splice(ToDos.id,1))
          
        }} ></i>
      </div>
    </div>
    ) 
    }) }




  </div>
</div>
  );
}

export default App;
