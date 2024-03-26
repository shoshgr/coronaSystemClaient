import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

const Member = () => {
    const url = 'http://localhost:8080/api/members';
    const location = useLocation();
    const memberId = location.state.Id;
    const [member, setMem] = useState();
    const [toUpdate, setToUpdate] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        id: '',
        citi: '',
        street: '',
        houseNO: '',
        birthDate: '',
        phone: '',
        mobile: '',
    });
const [showCorona,setCorona]=useState(false);
    useEffect(() => {
        if (memberId) {
            fetch(`${url}/${memberId}`)
                .then(response => response.json())
                .then(data => {
                    setMem(data[0]);
                    console.log(member);
                    setFormData({
                        firstName: data.FirstName,
                        lastName: data.LastName,
                        id: data.IDNumber,
                        citi: data.AddressCiti,
                        street: data.AddressStreet,
                        houseNO: data.AddressNumber,
                        birthDate: new Date(data.BirthDate).toLocaleDateString('en-GB'),
                        phone: data.Phone,
                        mobile: data.MobilePhone,
                    });
                })
                .catch(error => console.error('Error fetching data:', error));
        }
    }, [memberId]);

    const handleUpdateClick = () => {
        setToUpdate(toUpdate?false:true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:8080/api/members/${memberId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                throw new Error('Failed to update member data');
            }
            alert('Member data updated successfully!');
            setToUpdate(false);
            setMem(formData); // עדכון המידע בסטייט לפי הטופס
        } catch (error) {
            console.error('Error updating member data:', error);
            alert('An error occurred while updating member data');
        }
    };
    
    return (
        <>
            {member && (
                <>
                {console.log("member"+formData.firstName)}
                {console.log(member)}
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">First Name:</label>
                        <input type="text" id="name" name="firstName" readOnly={!toUpdate} placeholder={formData.firstName||member.FirstName} onChange={handleChange} />
                       
                        <label htmlFor="lastname">Last Name:</label>
                        <input type="text" id="lastname" name="lastName" readOnly={!toUpdate} value={formData.lastName||member.LastName} onChange={handleChange} />

                        <label htmlFor="id">ID:</label>
                        <input type="text" id="id" name="id" readOnly={!toUpdate} value={formData.id||member.IDNumber} onChange={handleChange} />

                        <label htmlFor="citi">City:</label>
                        <input type="text" id="citi" name="citi" readOnly={!toUpdate} value={formData.citi||member.AddressCity} onChange={handleChange} />

                        <label htmlFor="street">Street:</label>
                        <input type="text" id="street" name="street" readOnly={!toUpdate} value={formData.street||member.AddressStreet} onChange={handleChange} />

                        <label htmlFor="houseNO">House Number:</label>
                        <input type="text" id="houseNO" name="houseNO" readOnly={!toUpdate} value={formData.houseNO||member.AddressNumber} onChange={handleChange} />
   
                        <label htmlFor="birthDate">Birth Date:</label>
                        <input type="date" id="birthDate" name="birthDate" readOnly={!toUpdate} value={formData.birthDate||new Date(member.BirthDate).getDate()} onChange={handleChange} />

                        <label htmlFor="phone">Phone:</label>
                        <input type="tel" id="phone" name="phone" readOnly={!toUpdate} value={formData.phone||member.Phone} onChange={handleChange} />

                        <label htmlFor="mobile">Mobile:</label>
                        <input type="tel" id="mobile" name="mobile" readOnly={!toUpdate} value={formData.mobile||Member.MobilePhone} onChange={handleChange} />


                        {(toUpdate) ? <button type="submit">Submit</button> : null}
                    </form>
                    <button onClick={handleUpdateClick}>Update My Details</button>
                    { (member.Vaccinations||member.Illness)?<button onClick={()=>{setCorona(true);}}>show corona details</button>:null}
          {(showCorona)?((member.Vaccinations)?(<h1>Vaccinations: {member.Vaccinations}</h1>):null,(member.Illness)?
          (<h1>Illness: {member.Illness}</h1>):null):null}
                {/* 
                {(showCorona)?<form>
                    {(member.Illness&&member.Illness.PositiveTestDate)?(<label htmlFor="positiveTestDate">Positive Test Date: </label>
      ,<input type="date" id="positiveTestDate" name="positiveTestDate" readOnly value={ member.Illness.PositiveTestDate} />):null}
       {(member.Illness&&member.Illness.RecoveryDate)?(<label htmlFor="recoveryDate">Recovery  Date: </label>
      ,<input type="date" id="recoveryDate" name="recoveryDate" readOnly value={ member.Illness.RecoveryDate} />):null}
      {(member.Vaccinations&& member.Vaccinations.length>1)?Vaccinations.map((v,i)=>{
       <label htmlFor="vaccineDate">Vaccine {i} Date  </label>,
             <input type="date" id="vaccineDate4" name="vaccineDate4" required={false} value={ member.Vaccinations.} />,
       
             <label htmlFor="vaccineManufacturer4">Vaccine {i} Manufacturer: (Optional)</label>,
             <input type="text" id="vaccineManufacturer4" name="vaccineManufacturer4" value={(member && member.length>3&&vaccines[3].Manufacturer) || ''}  />  
      }):}
                </form>:null} */}
                
                </>
            )}
        </>
    );
}

export default Member;
