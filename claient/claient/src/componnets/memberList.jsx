// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const MemberList = () => {
//     const [members, setMembers] = useState([]);
//      const url='http://localhost:8080/api/members';
//      const navigate = useNavigate();
//     // function fetchArr() {
//     //     fetch(`${url}`)
//     //         .then(response => response.json())
//     //         .then(data => setMembers(members.push(data))).then(data=>console.log(data)).catch(err=>console.error(err))
//     // }
//     console.log("beafore fetch is: ");
//     function fetchArr() {
//         // fetch(`${url}`,{method:"GET"}).then(response => response.json()).then(data => setMembers(data))
//         fetch(`${url}`,{method:"GET"}).then(re=>re.json())
//             .then(response => {
//                 console.log("the response is: "+JSON.stringify(response))}).then(res=>{setMembers(res)}).then(console.log(members))    
//             .catch(err => console.error(err));
            
//     }
//     useEffect(() => {
//         fetchArr();
//     }, []);
//     const deleteMem = (id) => {
//         fetch(`${url}/${id}`, {
//             method: 'DELETE',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//         })
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 setMembers(members => members.filter(member => member.id !== id));
//                 console.log('Member deleted successfully');
//             })
//             .catch(error => {
//                 console.error('There was a problem with your fetch operation:', error);
//             });
//     }
//     {
//         return (
//             members && members.map((m) => {(
//                 <div key={m.id}>
//                     <h2>{m.firstName}</h2>
//                     <h2>{m.lastName}</h2>
//                     <button onClick={() => deleteMem(m.id)}>delete</button>
//                 </div>
//             )})
//         );
    
//     }
//     //  return (
//     //    <> 
//     //    {members&&members.length&&members.map((m) => {
//     //         <div key={m.id}>
//     //             <h2>{m.firstName}</h2>
//     //             <h2>{m.lastName}</h2>
//     //             <button onClick={() => deleteMem(m.id)}>delete</button>
//     //             {/* <button onClick={() => { navigate(`${update}`, { state: { memberId: m.id } }) }}>update</button>  */}
//     //            {/* <Link to={{
//     //                 pathname: `member/${m.name}`,
//     //                 state: { memberId: m.id }
//     //             }}>more details</Link> */}
//     //         </div>,
//     //      {/*//  <button onClick={() => { navigate(`${Add}`, { state: { memberId: null } }) }}>add member</button>})} */}
//     //         })}

//     // </>
//     // );
// }
// export default MemberList
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Mem from "./mem"

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
        <div>
            {members.length > 0 ? (
                members.map(member => (
                   <Mem mem={member} setMembers={setMembers} members={members}/>
                ))
            ) : (
                <p>Loading members...</p>
            )}
        </div>
    );
}

export default MemberList;
