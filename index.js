const employee ={
    name: "Gary",
    streetAdress: "12 Broadway",
}

function  updateEmployeeWithKeyAndValue(employee, key, value){
    const cloneEmploy = {...employee}
    cloneEmploy[key] = value;
    return cloneEmploy;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}