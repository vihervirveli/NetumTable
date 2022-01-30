
const EditableRow = ({editFormData, handleEditingPeople}) => {
  return (
  <tr>
    <td><input type="text" name="firstName" required="required" placeholder='Muokkaa etunimeä' 
    value={editFormData.firstName}
    onChange={handleEditingPeople} /></td>
    <td>
      <input type="text" name="lastName" required="required" placeholder='Muokkaa sukunimeä'
      value={editFormData.lastName} onChange={handleEditingPeople}/></td>
    <td><input type="number" name="age" required="required" placeholder='Muokkaa ikää'
    value={editFormData.age} onChange={handleEditingPeople}/></td>
    <td><button type="submit">Tallenna</button></td>
  </tr>
  )
}

export default EditableRow;