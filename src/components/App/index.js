// == Import npm
import React from 'react';
import Counter from '../Counter';
import Tasks from '../Tasks';
import Form from '../Form';

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
    <Counter/>
    <Tasks/>
    
  </div>
);

// == Export
export default App;