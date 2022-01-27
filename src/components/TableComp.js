import './TableComp.css';
import React, { useState } from 'react';
import people_data from '../mockdata.json';
import { nanoid } from 'nanoid';

const TableComp = (props) => {
  const [people, setPeople] = useState(people_data);
  const [addFormInfo, setAddFormInfo] = useState({
    firstName: '',
    lastName: '',
    age: ''
  })

  const handleFormInfoChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute('name');
    const value = event.target.value;
    const newInfo = { ...addFormInfo };
    newInfo[fieldName] = value;
    setAddFormInfo(newInfo);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newPerson = {
      id: nanoid(),
      firstName: addFormInfo.firstName,
      lastName: addFormInfo.lastName,
      age: addFormInfo.age
    }
    const newPeople = [...people, newPerson];
    setPeople(newPeople);
  }
  const handleDelete = (personId) =>{
    const newPeople = [...people];
    const index = people.findIndex((person) => 
      person.id === personId)
    newPeople.splice(index, 1); 
    setPeople(newPeople);
    
  }

  return (<div>
    <table>
      <thead>
        <tr>
          <th>Etunimi</th>
          <th>Sukunimi</th>
          <th>Ikä</th>
          <th>Poista</th>
        </tr>
      </thead>
      <tbody>
        {people.map((person) =>
          <tr>
            <td>{person.firstName}</td>
            <td>{person.lastName}</td>
            <td>{person.age}</td>
            <td><span onClick={(event) => {handleDelete(event.target)}}>X</span></td>
          </tr>
        )}
      </tbody>
    </table>
    <h2>Lisää ihminen</h2>
    <form onSubmit={handleFormSubmit}>
      <input type="text" name="firstName" required="required" placeholder='Etunimi' onChange={handleFormInfoChange} />
      <input type="text" name="lastName" required="required" placeholder='Sukunimi' onChange={handleFormInfoChange} />
      <input type="number" name="age" required="required" placeholder='Ikä' onChange={handleFormInfoChange} />
      <button type="submit">Lisää</button>
    </form>
  </div>)
}

export default TableComp;