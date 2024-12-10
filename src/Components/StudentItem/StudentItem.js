import React, { useContext } from "react";
import StudentContext from "../../store/student-context";

const StudentItem =(props)=>{

    const studCtx= useContext(StudentContext);

    const editHandler = () => {
        
        studCtx.setEditingStudent(props.student);
        studCtx.editStudents(props.student.id,props.student);
        props.onShowModalChange(true);
    }

    const removeHandler = () => {
       studCtx.removeStudents(props.student.id);
    }

    return (
        <li >
            <p>{props.student.name}</p>
            <p>{props.student.mobile}</p> 
            <p>{props.student.address}</p>
            <button type="button" onClick={editHandler}>Edit Button</button>
            <button type="button" onClick={(removeHandler)}>Delete Button</button>
        </li>
    )

}

export default StudentItem;