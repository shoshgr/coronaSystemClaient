import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Mem from "./mem";
import '../cssFiles/MemberList.css';

const MemberList = () => {
    const [members, setMembers] = useState([]);
    const url = 'http://localhost:8080/api/members';
    const navigate = useNavigate();


    
    useEffect(() => {
        fetch(`${url}`)
            .then(response => response.json())
            .then(data => setMembers(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="member-list-container">
            {members.length > 0 ? (
                members.map(member => (
                    <Mem key={member.ID} mem={member} setMembers={setMembers} members={members} />
                ))) : <p>there is no members</p>
            }
            <Link to={"/addMember"}>add member |  </Link>
           <button onClick={()=>{}}>add</button>
   
        </div>

    );
}

export default MemberList;
