import React, { useContext } from "react";
import StudentContext from "../../store/student-context";
import StudentItem from "../StudentItem/StudentItem";

const StudentList = (props)=>{

    const studCtx = useContext(StudentContext);

    const students = studCtx.students;

    const studentItems = students.map((student)=>{
        return(
            <StudentItem
                student={student}
                key={student.id}
                onEdit={props.onEdit}
                onEditCompletion={props.onEditCompletion}
                onShowModalChange={props.onShowModalChange}
            />
        )
    })

    return (
        <ul>
            {studentItems}
        </ul>
    )
}

export default StudentList;