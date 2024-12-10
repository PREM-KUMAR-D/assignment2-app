import React from "react";

const StudentContext = React.createContext({
    students: [],
    setStudents: (student)=>{},
    removeStudents: (id)=>{},
    editStudents: (id,updateStudent)=>{},
    editingStudent: null,
    setEditingStudent: (student)=>{},
})

export default StudentContext;