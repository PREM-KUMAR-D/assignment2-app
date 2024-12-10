import React, { useState } from "react";

import StudentContext from "./student-context";

const StudentProvider = (props)=>{

    const [students,setStudents] = useState([{
        name:"Test name",
        mobile:"111-111-1111",
        address:"test address",
        id:1,
    }])

    const [editingStudent, setEditingStudent] = useState(null);

    const addStudentHandler = (student)=>{
        setStudents((prevStudents) => [...prevStudents, student]);
    }

    const removeStudentHandler = (id)=>{
        setStudents((prevStudents) => prevStudents.filter((student) => student.id !== id));
    }

    const updateStudentHandler =(id,updatedStudent)=>{
        setStudents((prevStudents) =>
            prevStudents.map((student) => (student.id === id ? updatedStudent : student))
          );
    }

    
    const studentContext={
        students:students,
        setStudents: addStudentHandler,
        removeStudentHandler: removeStudentHandler,
        updateStudentHandler: updateStudentHandler,
        editingStudent: editingStudent,
        setEditingStudent: setEditingStudent,
    }

    return(
        <StudentContext.Provider value={studentContext}>
            {props.children}
        </StudentContext.Provider>
    )


}

export default StudentProvider;