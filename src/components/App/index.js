// == Import npm
import React from 'react';
import Counter from '../Counter';
import Tasks from '../Tasks';
import Form from '../Form';
import data from '../../data/tasks.js'; 
import './styles.scss';

// == Composant
const App = () => (
  <div className='app'>
    <Form 
      
      todoLabel ="test"
      
      onLabelChange={(textesaisi)=>{
        console.log(textesaisi);
      }}

      onTodoSubmit={()=>{
        console.log('Hey,  submit');
      }}

    />
    <Counter total={data.length}/>
    <Tasks list = {data}/>
    
  </div>
);

// == Export
export default App;