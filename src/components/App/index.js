// == Import npm
import React from 'react';
import Counter from '../Counter';
import Tasks from '../Tasks';
import Form from '../Form';

import './styles.scss';

// == Composant
const App = () => (
  <div className='app'>
    <Form/>
    <Counter/>
    <Tasks/>
    
  </div>
);

// == Export
export default App;