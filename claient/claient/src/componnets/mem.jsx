import {React,useState,Link} from "react";

const Mem=(props)=>{
    console.log(props.mem);
    const url= 'http://localhost:8080/api/members';
    const member=props.mem;
    const deleteMember = (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this member?');
        if (!confirmDelete) {
            return; // משתמש ביטל את הפעולה, סיים את הפונקציה
        }
        fetch(`${url}/${id}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const updatedMembers = props.members.filter(member => member.id !== id);
            props.setMembers(updatedMembers);
            console.log('Member deleted successfully');
        })
        .catch(error => {
            console.error('Error deleting member:', error);
        });
    }
    return(
<div key={member.ID}>
    <h1>{member.ID}</h1>
    <h3>{member.FirstName}</h3>
    <h2>{member.LastName}</h2>
    <button onClick={() => deleteMember(member.ID)}>Delete</button>
    <Link
        to={`member/${member.ID}`}
        state={{ Id: member.ID }}
    >
        more details
    </Link>
</div>);
}
export default Mem