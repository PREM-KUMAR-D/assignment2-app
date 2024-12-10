import React, { Fragment } from "react";
import "./Student.css";

const Student = (props) => {

    return <Fragment >
        <div className="title">

            <h1>Student Manager</h1>


            <p>All Students: 0</p>

            <button type="button">Add NEW STUDENT</button>
        </div>

        <div className="students">
            <h2>All Students</h2>

        </div>

    </Fragment>;


}

export default Student;