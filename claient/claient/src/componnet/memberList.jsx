import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const MemberList = () => {
    const [members, setMembers] = useState("");
    const url='http://localhost:8080/api/members/';
    const navigate = useNavigate();
debugger;
    function fetchArr() {
        fetch(`${url}`,{method:'GET'})
            .then(response => response.json())
            .then(data => setMembers(data)).then(data=>console.log(data)).catch(err=>console.error(err))
    }

    useEffect(() => {
        fetchArr();
      
    }, []);

    const deleteMem=(id)=>{
        fetch(`${url}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            setMembers(members => members.filter(member => member.id !== id));
            console.log('Member deleted successfully');
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
        });
    }

     return (
        
       <> {members&&members.map((m) => {//בהנחה שמגיעה לי מערך מהסרבר שבו לכל חבר יש מערך של חיסנים 
            <div key={m.id}>
                <h2>{m.name}</h2>
                <h3>vaccine/vaccines</h3>
                <p>{m.vaccines.join(', ')}</p>
                {(m.illnesDates) ? (<h3>illnes date:{m.illnesDates[0]}</h3>, <h3>recovery date:{m.illnesDates[1]} </h3>) : null}// NULLבהנחה שלכל חבר חוזר תאריך המחלה או
                <button onClick={() => deleteMem(m.id)}>delete</button>
                {/* <button onClick={() => { navigate(`${update}`, { state: { memberId: m.id } }) }}>update</button> */}
                {/* <Link to={{
                    pathname: `member/${m.name}`,
                    state: { memberId: m.id }
                }}>more details</Link> */}
            </div>
        })}
        
        {/* <button onClick={() => { navigate(`${Add}`, { state: { memberId: null } }) }}>add member</button> */}
    </>
    );


}
export default MemberList