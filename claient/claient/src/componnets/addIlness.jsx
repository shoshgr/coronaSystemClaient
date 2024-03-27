import React, { useRef } from "react";

const AddIlness = (props) => {
    const url = 'http://localhost:8080/api/members';
    const PositiveTestDate = useRef();
    const RecoveryDate = useRef();

    const addIlness = (e) => {
        e.preventDefault();

        const ilness = {
            PositiveTestDate: PositiveTestDate.current.value, // קביעת תאריך החיסון על פי הערך שנמצא ב-Ref של התאריך
            RecoveryDate: RecoveryDate.current.value // קביעת יצרן החיסון על פי הערך שנמצא ב-Ref של היצרן
        }

        fetch(`${url}/corona/illness/${props.memberId}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(ilness), // שליחת אובייקט החיסון בפורמט JSON
            mode: 'cors'
        }).then((res) => {
            if (res.status == 200) {
                alert("The illness was successfully added");
                props.setIlnessForm(false);
                props.setIlness(ilness);
       
            }
        }).catch(err => alert(err));
    }

    return (
        <form onSubmit={addIlness}>
            <label htmlFor="PositiveTestDate">PositiveTestDate:</label>
            <input type="date" name="PositiveTestDate" id="PositiveTestDate" ref={PositiveTestDate} />
            <label htmlFor="RecoveryDate">RecoveryDate:</label>
            <input type="date" id="RecoveryDate" name="RecoveryDate" ref={RecoveryDate} />
            <button type="submit">submit</button>
        </form>
    );
}

export default AddIlness;
