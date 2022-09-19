import React from 'react';

import './styles.scss'

import PropTypes from 'prop-types';

const Counter = (props) => {

    const {total} = props;

    const message = total > 1 ? 'taches en cours' : 'tache en cours';

    return (
    <div className='todo-counter'>
        {total} {message}
    </div>
    );
};


Counter.propTypes ={
    total:PropTypes.number.isRequired,
}
export default Counter;