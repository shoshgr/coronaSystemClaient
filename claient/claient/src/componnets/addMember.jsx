import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
//import { useNavigate } from 'react-router-dom';
const AddMem =()=>{
 const url='http://localhost:8080/api/members/';
    const handleSubmit = (e) => {
        e.preventDefault(); // למנוע מהטופס לשלוח בצורה דיפולטיבית
      debugger;
        const formData = new FormData(e.target); // ליצור מאובטח עבור הנתונים מהטופס
        const data = Object.fromEntries(formData.entries()); // ליצור אובייקט עם הנתונים מהטופס
       
          fetch(`${url}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          })
            .then(response =>(response.status==200)?alert("the member added seccssesfuly "):null)
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));
        }
      
      
    return(
<form onSubmit={handleSubmit}>
      <label htmlFor="firstName">first Name:</label>
      <input type="text" id="firstName" name="firstName" required />

      <label htmlFor="lastName">last Name:</label>
      <input type="text" id="lastName" name="lastName" required />

      <label htmlFor="id">ID:</label>
      <input type="text" id="id" name="id" required/>
<h4>Address:</h4>
      <label htmlFor="citi">citi:</label>
      <input type="text" id="citi" name="citi" required />
      <label htmlFor="street">street:</label>
      <input type="text" id="street" name="street"  required />
      <label htmlFor="House #"> House #:</label>
      <input type="text" id="House #" name="House #" />

      <label htmlFor="birthdate">Birth Date:</label>
      <input type="date" id="birthdate" name="birthdate" />

      {/* Additional fields */}
      <label htmlFor="phone">Phone:</label>
      <input type="tel" id="phone" name="phone" required />

      <label htmlFor="mobile">Mobile: (Optional)</label>
      <input type="tel" id="mobile" name="mobile"  />

      {/* Vaccine details
      <h4>vaccines</h4>
      <label htmlFor="vaccineDate">Vaccine Date:(Optional)</label>
      <input type="date" id="vaccineDate" name="vaccineDate" required={false} value={(member && member.vaccines[0].date) || ''} />

      <label htmlFor="vaccineManufacturer">Vaccine Manufacturer: (Optional)</label>
      <input type="text" id="vaccineManufacturer" name="vaccineManufacturer" required={false} value={(member && vaccines[0].Manufacturer) || ''} />
      
      <label htmlFor="vaccineDate2">Vaccine 2 Date  (Optional):</label>
      <input type="date" id="vaccineDate2" name="vaccineDate2" required={false} value={(member &&member.length>1&& member.vaccines[1].date) || ''} />

      <label htmlFor="vaccineManufacturer2">Vaccine 2 Manufacturer: (Optional)</label>
      <input type="text" id="vaccineManufacturer2" name="vaccineManufacturer2" value={(member && member.length>1&&vaccines[1].Manufacturer) || ''}  />
      
      <label htmlFor="vaccineDate3">Vaccine 3 Date  (Optional):</label>
      <input type="date" id="vaccineDate3" name="vaccineDate3" required={false} value={(member &&member.length>2&& member.vaccines[2].date) || ''} />

      <label htmlFor="vaccineManufacturer3">Vaccine 3 Manufacturer: (Optional)</label>
      <input type="text" id="vaccineManufacturer3" name="vaccineManufacturer3" value={(member && member.length>2&&vaccines[2].Manufacturer) || ''}  />
      
      <label htmlFor="vaccineDate4">Vaccine 4 Date  (Optional):</label>
      <input type="date" id="vaccineDate4" name="vaccineDate4" required={false} value={(member &&member.length>3&& member.vaccines[3].date) || ''} />

      <label htmlFor="vaccineManufacturer4">Vaccine 4 Manufacturer: (Optional)</label>
      <input type="text" id="vaccineManufacturer4" name="vaccineManufacturer4" value={(member && member.length>3&&vaccines[3].Manufacturer) || ''}  />

      <label htmlFor="positiveTestDate">Positive Test Date: (Optional)</label>
      <input type="date" id="positiveTestDate" name="positiveTestDate" value={(member && member.positiveTestDate) || ''} required={false}/>

      <label htmlFor="recoveryDate">Recovery Date: (Optional)</label>
      <input type="date" id="recoveryDate" name="recoveryDate" value={(member && member.recoveryDate) || ''} required={false} /> */}

      <button type="submit">Submit</button>
    </form>


    );
}
export default AddMem;