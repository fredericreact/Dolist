import React from 'react';

import PropTypes from 'prop-types';

const Task = (props) => {

const {done, label} = props;

return (
<li className='task'>
    <input 
    type="checkbox" 
    checked={done}

    onChange={()=>{
        console.log('clic')
    }}

    />
<span>{label}</span>
</li>
);

};

Task.propTypes ={
    done: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired, 
}

export default Task;