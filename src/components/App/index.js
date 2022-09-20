// == Import npm
import React ,  {useState}  from 'react';
import { v4 as uuidv4 } from 'uuid';
import Counter from '../Counter';
import Tasks from '../Tasks';
import Form from '../Form';
import data from '../../data/tasks'; 
import './styles.scss';

// == Composant
const App = () => {

  const [currentState, UpdateState] =useState(
    {
   todos: data,
   formText:'',

  });

  const { todos, formText } = currentState;

  const handleInputChange = (textesaisi) => {

    UpdateState(
      {...currentState,
        formText:textesaisi
      }
    )

  } 

const handleSubmit =() =>{

  const newTodo = {
    id: uuidv4(),
    label: formText,
    done:false,
  }
  
 

  UpdateState(
    {...currentState,
      todos:[newTodo, ...todos],
      formText: '',
    }
  )


}

const handleCheckTodo = (idclique) => {


const newTodos = todos.map((todoObject)=>{
  if (todoObject.id === idclique) {
    return {
      ...todoObject,
      done: !todoObject.done,
    };
  }

  return todoObject;

})

  UpdateState(
    {...currentState,
      todos: newTodos
    }
  )


}


const totalNotDone = todos.filter((todoObject)=>  !todoObject.done).length;


return (
  <div className='app'>
    <Form 
      
      todoLabel ={formText}
      
      onLabelChange={handleInputChange}

      onTodoSubmit={handleSubmit}

    />
    <Counter total={totalNotDone}/>
    <Tasks list = {todos} onTodoCheck={handleCheckTodo}/>
    
  </div>
);
}
// == Export
export default App;