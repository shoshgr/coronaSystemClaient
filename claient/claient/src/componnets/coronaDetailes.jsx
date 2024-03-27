import React, { useState } from "react"

const CoronaDetailes = (props) => {


    const [formData, setFormData] = useState({
        PositiveTestDate:props.illness&& props.illness.PositiveTestDate||"",
        RecoveryDate:props.illness&& props.illness.RecoveryDate || "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };
    const updateIlness = async (e) => {

        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:8080/api/members/corona/illness/${props.memberId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(e.target.querySelector('#AddRecoveryDate').value),
            });
            if (!response.ok) {
                throw new Error('Failed to add recovery data');
            }
            alert('recovery data added successfully!');
            setFormData({
                PositiveTestDate: props.illness.PositiveTestDate,
                RecoveryDate: e.target.querySelector('#AddRecoveryDate').value,
            })
            props.setIlness({
                PositiveTestDate: props.illness.PositiveTestDate,
                RecoveryDate: e.target.querySelector('#AddRecoveryDate').value,
            })
        } catch (error) {
            console.error('Error updating member data:', error);
            alert('An error occurred while updating member data');
        }
    };



    return (
        <div className="corona-details">
            <div>
                {console.log(props.vaccines)}
                {props.vaccines.map((v) => {
                    return (
                        <h4>Date: {new Date(v.VaccinationDate).toLocaleDateString('en-US')}    Manufacturer: {v.VaccineManufacturer}</h4>
                    )
                })}
            </div>
            {props.illness && <form>
                < label htmlFor="PositiveTestDate">PositiveTestDate:</label>,
                <input type="text" id="PositiveTestDate" name="PositiveTestDate" readOnly value={new Date(formData.PositiveTestDate).toLocaleDateString('en-US')} onChange={handleChange} />
                <label htmlFor="RecoveryDate">RecoveryDate:</label>,
                {(props.illness.RecoveryDate) ? <input type="text" id="RecoveryDate" name="RecoveryDate" value={new Date(formData.RecoveryDate).toLocaleDateString('en-US') || "add your recover date"}
                    onChange={handleChange} /> : (<label htmlFor="AddRecoveryDate">RecoveryDate:</label>,
                        <input type="date" id="AddRecoveryDate" name="AddRecoveryDate" />, <button type="submit">add recovery date </button>)}
            </form>}
        </div>

    );
}
export default CoronaDetailes