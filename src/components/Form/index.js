import React from 'react';

import './styles.scss';

import PropTypes from 'prop-types';

const Form = (props) => {

    const { todoLabel, onLabelChange, onTodoSubmit } = props;

    return(

<form className="todo-form" onSubmit={(e)=>{
    e.preventDefault();
    onTodoSubmit();
}}>
    <input
    type="text"
    placeholder="add task"
    className="todo-input"
    value ={todoLabel}
    onChange ={(e) => {
        const text = e.target.value;
        onLabelChange(text);
;    }}
    />
</form>

);
};




Form.propTypes ={
    todoLabel:PropTypes.string.isRequired,
    onLabelChange:PropTypes.func.isRequired,
    onTodoSubmit: PropTypes.func.isRequired,
}

export default Form;