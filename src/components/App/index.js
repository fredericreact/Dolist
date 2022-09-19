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
      todos:[newTodo, ...todos]
    }
  )


}





return (
  <div className='app'>
    <Form 
      
      todoLabel ={formText}
      
      onLabelChange={handleInputChange}

      onTodoSubmit={handleSubmit}

    />
    <Counter total={data.length}/>
    <Tasks list = {todos}/>
    
  </div>
);
}
// == Export
export default App;