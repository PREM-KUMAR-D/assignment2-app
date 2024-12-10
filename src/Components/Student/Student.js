import React, { Fragment, useContext } from "react";
import "./Student.css";
import StudentContext from "../../store/student-context";

const Student = (props) => {

    const studCtx = useContext(StudentContext);

    const clickHandler = ()=>{
        props.onModalOpen(true);
    }

    return <Fragment >
        <div className="title">

            <h1>Student Manager</h1>


            <p>All Students: {studCtx.students.length}</p>

            <button type="button" onClick={clickHandler}>Add NEW STUDENT</button>
        </div>

        <div className="students">
            <h2>All Students</h2>

        </div>

    </Fragment>;


}

export default Student;