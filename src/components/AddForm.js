import './AddForm.css';
const AddForm = ({handleAddingPeople}) => {
  return (
    <div className='inputit'>
      <h2>Lisää ihminen</h2>
    <input type="text" name="firstName" required="required" placeholder='Etunimi' onChange={handleAddingPeople} />

    <input type="text" name="lastName" required="required" placeholder='Sukunimi' onChange={handleAddingPeople} />
    
    <input type="number" name="age" required="required" placeholder='Ikä' onChange={handleAddingPeople} />
    
    <button className="addbutton" type="submit">Lisää</button>
  </div>)
}
export default AddForm;