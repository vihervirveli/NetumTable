import './ReadOnlyRow.css'

const ReadOnlyRow = ({person, handleEditClick}) => {
/*
  const handleDelete = (personId) =>{
    const newPeople = [...people];
    const index = people.findIndex((person) => 
      person.id === personId)
    newPeople.splice(index, 1); 
    setPeople(newPeople);
    
  }
*/
return(
  <tr>
  <td>{person.firstName}</td>
  <td>{person.lastName}</td>
  <td>{person.age}</td>
  
  <td><button type="button" onClick={(event)=> {
  handleEditClick(event, person)
  }} className='mybutton'>Muokkaa</button>
  <button className='mydeletebutton'>Poista</button></td>
</tr>
)
}

export default ReadOnlyRow;