import React from 'react';
import Task from './Task'

import './styles.scss';

import PropTypes from 'prop-types';

const Tasks = (props) => {

const {list} = props;

return (
    

<ul className="todo-list">
{
    list.map((todoObject)=> (
        <Task key ={todoObject.id} {...todoObject}/>
    ))
}
</ul>


);
}


Tasks.propTypes ={
    list:PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }),
    ).isRequired,
};

export default Tasks;