import React, { useRef } from "react";

const AddVaccine = (props) => {
    const url = 'http://localhost:8080/api/members';
    const vaccinationDateRef = useRef();
    const vaccineManufacturerRef = useRef();

    const addVaccine = (e) => {
        e.preventDefault();

        const vaccinationDateValue = vaccinationDateRef.current.value;
        const currentDate = new Date().toISOString().split('T')[0]; // תאריך נוכחי בפורמט YYYY-MM-DD

        // בדיקה שהתאריך של החיסון אינו אחרי התאריך הנוכחי
        if (vaccinationDateValue > currentDate) {
            alert("Vaccination Date cannot be after today's date.");
            return;
        }

        const vaccine = {
            VaccinationDate: vaccinationDateValue,
            VaccineManufacturer: vaccineManufacturerRef.current.value
        }

        fetch(`${url}/corona/vaccines/${props.memberId}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(vaccine),
            mode: 'cors'
        }).then((res) => {
            if (res.status === 200) {
                alert("The vaccine was successfully added");
                let arr = [];
                props.vaccines.map(v => arr.push(v));
                arr.push(vaccine);
                props.setVaccines(arr);
                props.setVaccineForm(false);
            } else {
                alert("ERROR while adding vaccine");
            }
        }).catch(err => alert(err));
    };

    return (
        <form onSubmit={addVaccine}>
            <label htmlFor="VaccinationDate">VaccinationDate:</label>
            <input type="date" name="VaccinationDate" id="VaccinationDate" ref={vaccinationDateRef} />
            <label htmlFor="VaccineManufacturer">VaccineManufacturer:</label>
            <input type="text" id="VaccineManufacturer" name="VaccineManufacturer" ref={vaccineManufacturerRef} />
            <button type="submit">Submit</button>
        </form>
    );
}

export default AddVaccine;

