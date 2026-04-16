
import React, { useState } from 'react'
  let inpStyle={width:"500px",height:"80px",display:"flex",justifyContent:"space-evenly",alignItems:"center",margin:"auto",
    boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px"    
    }
export default function Input() {
  let [inp,setInp]=useState("")
  let [todo,setTodo]=useState([])
  let [priority,setPriority]=useState("medium")
    function handleChange(e){
        // console.log("handle change is benn called")
        console.log(e)
        let val=e.target.value
        setInp(val)
    }


    function handlePriority(e){
     let val=e.target.value 
     console.log(val) 
     setPriority(val)
    

    }
    function handleStatus(e){
     let val=e.target.value
      console.log(val)

    }
  function handleDelete(e){
     let val=e.target.value
      console.log(val)
  }
    function handleClick(){
      
        let task={
          id:Date.now(),
          task:inp,
          priority:priority,
          status:false

        }
        setTodo([...todo,task])
        console.log(task)
       setInp("")
    }
  
    return (
        <>
             <div style={inpStyle}>
        {console.log(inp)}
        {console.log(todo)}
        {console.log(priority)}
       <input value={inp} onChange={handleChange}  id='abc' type="text" placeholder='Ennter the todo' />
        <select onChange={handlePriority} name="" id="">
          <option value="medium">medium</option>
          <option value="high">high</option>
          <option value="low">low</option>
        </select>
       <button onClick={handleClick} >Add Todo</button>

    </div>

    <div> 
            <ol>
                 {todo.map((el,i,arr)=>{
                     
                      return <div style={{display:"flex",alignItems:"center",justifyContent:"left",gap:"50px",fontSize:"20px"}}>
                                <li>{el.task}  </li>
                                 <h1>{el.priority}</h1>
                                 <button value={el.id} onClick={handleStatus} >{el.status?"Compleated":"incompleated"}</button>
                                  <button value={el.id} onClick={handleDelete} > delete todo</button>
                             </div>

                 })}        
 
            </ol>

    </div>
           
        </>
   



  )
}

