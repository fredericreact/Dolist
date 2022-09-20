import React from 'react';

import PropTypes from 'prop-types';

const Task = (props) => {

const {done, label, onTodoCheck, id} = props;

const classToUse = done ? 'task task--done' : 'task';

return (
<li className={classToUse}>
    <input 
    type="checkbox" 
    checked={done}

    onChange={()=>{
        onTodoCheck(id);
    }}

    />
<span>{label}</span>
</li>
);

};

Task.propTypes ={
    id: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired, 
    onTodoCheck: PropTypes.func.isRequired,
}

export default Task;