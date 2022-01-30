import './TableComp.css';
import React, { useState, Fragment } from 'react';
import people_data from '../mockdata.json';
import { nanoid } from 'nanoid';
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';

const TableComp = () => {
  const [people, setPeople] = useState(people_data);
  const [addFormInfo, setAddFormInfo] = useState({
    firstName: '',
    lastName: '',
    age: ''
  })

  const [editFormData, setEditFormData] = useState({
    firstName: '',
    lastName: '',
    age: ''
  });

  const [editPersonId, setEditPersonId] = useState(null);
  
  const handleEditingPeople = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newPersonData = {...editFormData};
    newPersonData[fieldName] = fieldValue;
    setEditFormData(newPersonData);
  }

  const handleAddingPeople = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute('name');
    const value = event.target.value;
    const newInfo = { ...addFormInfo };
    newInfo[fieldName] = value;
    setAddFormInfo(newInfo);
  }

  const handleEditClick = (event, person) => {
    event.preventDefault();
    setEditPersonId(person.id);
    const formValues = {
    firstName: person.firstName,
    lastName: person.lastName,
    age: person.age
    }
    setEditFormData(formValues);
  }

  const handleAddFormSubmit = (event) => {
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

  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    const editedPerson = {
      id: editPersonId,
      firstName: editFormData.firstName,
      lastName: editFormData.lastName,
      age: editFormData.age
    }
    const newPeople = [...people];
    const index = people.findIndex((person) => 
      person.id === editPersonId)
    newPeople[index] = editedPerson;
    setPeople(newPeople);
    setEditPersonId = null;
  }

  
  return (<div>
    <form onSubmit={handleEditFormSubmit}>
      <table>
        <thead>
          <tr>
            <th>Etunimi</th>
            <th>Sukunimi</th>
            <th>Ikä</th>
            <th>Valinnat</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) =>
            <Fragment>
              {editPersonId === person.id ? <EditableRow editFormData={editFormData} handleEditingPeople={handleEditingPeople} /> : <ReadOnlyRow person={person} handleEditClick={handleEditClick}/>}
              
              
            </Fragment>
          )
          }
        </tbody>
      </table>
    </form>
    <h2>Lisää ihminen</h2>
    <form onSubmit={handleAddFormSubmit}>
      <input type="text" name="firstName" required="required" placeholder='Etunimi' onChange={handleAddingPeople} />
      <input type="text" name="lastName" required="required" placeholder='Sukunimi' onChange={handleAddingPeople} />
      <input type="number" name="age" required="required" placeholder='Ikä' onChange={handleAddingPeople} />
      <button className="mybutton" type="submit">Lisää</button>
    </form>
  </div>)
}

export default TableComp;