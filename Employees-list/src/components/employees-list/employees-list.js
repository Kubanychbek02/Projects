import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onToggleProp, onDelete}) => {
    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem key={id}
                // name={item.name} salary={item.salary} increase={item.increase}
                {...itemProps}
            onDelete={() => onDelete(id)}
            onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>
        )
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;