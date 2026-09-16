import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    const dropdownChangeHandler = (event) => {
        const selectedYear = event.target.value;
        console.log('ExpensesFilter.js: aasta valik ->', selectedYear);
        props.onChangeFilter(selectedYear);
    };

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label htmlFor='year-filter'>Filter by year</label>
                <select
                    id='year-filter'
                    value={props.selected}
                    onChange={dropdownChangeHandler}
                >
                    <option value='2023'>2023</option>
                    <option value='2024'>2024</option>
                    <option value='2025'>2025</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;