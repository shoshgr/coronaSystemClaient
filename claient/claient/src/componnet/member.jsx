// import {React,useState} from "react";
// import { useParams,useState } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

  
// const Member =()=>{
//     const url="";
//     const location = useLocation();
//   const memberId = location.state.memberId;
//     const[member,setmem]=useState();
//     if(memberId){
//         function fetchMem() {
//             fetch(`${url}}`)
//                 .then(response => response.json())
//                 .then(data => setmem(data))
//         }
//       useEffect(() => {
//             fetchMem();
//         }, []);
//     }
//     return(
// <>
// {member && (
//                 <>
//                     <h2>{member.name}</h2>
//                     <h3>Address:</h3>
//                     <p>City: {member.city}</p>
//                     <p>Street: {member.street}</p>
//                     <p>House Number: {member.houseNumber}</p>
//                     <h3>Birth Date: {member.birthDate}</h3>
//                     <h3>Phone: {member.phone}</h3>
//                     <h3>Mobile: {member.mobile}</h3>
//                     <h3>Vaccines:</h3>
//                     {mamber.vaccines&&member.vaccines.map((vaccine, index) => (
//                         <div key={index}>
//                             <p>Vaccine {index + 1} Date: {vaccine.date}</p>
//                             <p>Vaccine {index + 1} Manufacturer: {vaccine.manufacturer}</p>
//                         </div>
//                     ))}
//                    ({member.positiveTestDate})? <p> Positive Test Date: {member.positiveTestDate}</p>:null
//                    ({member.recoveryDate})? <p> Recovery Date: {member.recoveryDate}</p>:null
//                 </>
//             )}  
// </>
//     );
// }
// export default Member;