// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  let [todolist,setTodolist]=useState([])


  let savetodolist=(event)=>{


    let todoname=event.target.todoname.value;
        // alert(todoname)

    if(!todolist.includes(todoname)){
      let finaltodolist=[...todolist,todoname]
      setTodolist(finaltodolist)
    }
    else{
      alert('todo name already exist...')
      
    }
    event.preventDefault()


  }

  let list=todolist.map((value,index)=>{
    return(
     <TodoListItem value={value} key={index} indexnum={index} 
     
     todolist={todolist}
     setTodolist={setTodolist}/>
    )
  })

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={savetodolist}>
        <input type='text' name='todoname'/> 
        <button>save</button>
      </form>

      <div className='outerdiv'>

      <ul>
        {list}      
      </ul>
      </div>

    </div>
  );
}

export default App;


function TodoListItem({value, indexnum, todolist,setTodolist}){
  let [status, setStatus]=useState(false)

  let deleteRow=()=>{
    // alert(indexnum)
    let finaldata=todolist.filter((v,i)=> i!==indexnum)
    // console.log(finaldata)
    setTodolist(finaldata)
  }

  let checkstatus=()=>{
    setStatus(!status )
  }
  return(
    <li className={(status)?'complete':''} onClick={checkstatus}>{indexnum+1} {value}
      <span onClick={deleteRow}>&times;</span>
    </li>
  )
}
