import React from 'react';
import Task from './Task'

import './styles.scss';

import PropTypes from 'prop-types';

const Tasks = (props) => {

const {list, onTodoCheck} = props;

return (
    

<ul className="todo-list">
{
    list.map((todoObject)=> (
        <Task key ={todoObject.id} {...todoObject} onTodoCheck={onTodoCheck}/>
    ))
}
</ul>


);
}


Tasks.propTypes ={
    list:PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }),
    ).isRequired,
    onTodoCheck: PropTypes.func.isRequired,
};

export default Tasks;