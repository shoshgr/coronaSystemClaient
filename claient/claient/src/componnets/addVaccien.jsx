import React, { useRef } from "react";

const AddVaccine = (props) => {
    const url = 'http://localhost:8080/api/members';
    const vaccinationDateRef = useRef();
    const vaccineManufacturerRef = useRef();

    const addVaccine = (e) => {
        e.preventDefault();

        const vaccine = {
            VaccinationDate: vaccinationDateRef.current.value, // קביעת תאריך החיסון על פי הערך שנמצא ב-Ref של התאריך
            VaccineManufacturer: vaccineManufacturerRef.current.value // קביעת יצרן החיסון על פי הערך שנמצא ב-Ref של היצרן
        }

        fetch(`${url}/corona/vaccines/${props.memberId}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(vaccine), // שליחת אובייקט החיסון בפורמט JSON
            mode: 'cors'
        }).then((res) => (res.status == 200)?(alert("The vaccine was successfully added"),props.Vaccinations, props.setVaccineForm(false)):null).catch(err=>alert(err));
    }

    return (
        <form onSubmit={addVaccine}> 
            <label htmlFor="VaccinationDate">VaccinationDate:</label>
            <input type="date" name="VaccinationDate" id="VaccinationDate" ref={vaccinationDateRef} />
            <label htmlFor="VaccineManufacturer">VaccineManufacturer:</label>
            <input type="text" id="VaccineManufacturer" name="VaccineManufacturer" ref={vaccineManufacturerRef} />
            <button type="submit">submit</button>
        </form>
    );
}

export default AddVaccine;
