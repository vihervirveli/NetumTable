import './ReadOnlyRow.css'

/**
 * A read-only row that is displayed to the user when 
 * nothing is being edited.
 * @param {*} param0 
 * @returns 
 */
const ReadOnlyRow = ({person, handleEditClick, handleDeleteClick}) => {

return(
  <tr>
  <td>{person.firstName}</td>
  <td>{person.lastName}</td>
  <td>{person.age}</td>
  
  <td><button type="button" onClick={(event)=> {
  handleEditClick(event, person)
  }} className='mybutton'>Muokkaa</button>
  <button type="button" className='mydeletebutton'
  onClick={()=> handleDeleteClick(person.id)}>Poista</button></td>
</tr>
)
}

export default ReadOnlyRow;