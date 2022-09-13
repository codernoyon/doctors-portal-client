import React from 'react';

const AppointmentSingleRow = ({appointmentItem, index}) => {
    const {_id, patientName, date, slot, treatment} = appointmentItem
    return (
        <tr key={_id}>
            <th>{index + 1}</th>
            <td>{patientName}</td>
            <td>{date}</td>
            <td>{slot}</td>
            <td>{treatment}</td>
        </tr>
    );
};

export default AppointmentSingleRow;