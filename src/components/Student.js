import React from 'react';
import Chart from './Chart';

function Student(props){
    const studentInfo = props.studentInfo[0];
    return (
        <div>
            <Chart graphData={props.data} radioState={props.radioState} handleFilterChange={props.handleFilterChange}/>
        </div>
    )
}

export default Student;