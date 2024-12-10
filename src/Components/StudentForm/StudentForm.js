import React, { useContext, useEffect , useState } from "react";
import Modal from "../Modal/Modal";
import StudentContext from "../../store/student-context";


const StudentForm =(props)=>{

    const studCtx = useContext(StudentContext);

    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        address: "",
    });

    useEffect(() => {
        if ( studCtx.editingStudent) {
            setFormData(studCtx.editingStudent);
        }else{
            setFormData({
                name: "",
                mobile: "",
                address: "",
            })
        }
    }, [studCtx.editStudents , studCtx.editingStudent]);

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (studCtx.editingStudent) {
            studCtx.editStudents(studCtx.editingStudent.id, formData);
        } else {
            studCtx.setStudents({...formData,id: Math.random().toString() });
        }
        studCtx.setEditingStudent(null);
        props.onShowModalChange(false);
    }

    const handleChange= (event)=>{
        const key = event.target.name;
        const value = event.target.value;
        setFormData((prevData)=>{
            return {...prevData, [key]: value}
        })
    }

    const closeButtonHandler =()=>{
        props.onShowModalChange(false);
        studCtx.setEditingStudent(null);
    }


    return (
        <Modal onClose={props.onShowModalChange}>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <div>
                        <label htmlFor="name">Name : </label>
                        <input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="mobile">Title: </label>
                        <input
                            id="mobile"
                            name="mobile"
                            value={formData.mobile}
                            type="tel"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="address">Address: </label>
                        <input
                            id="address"
                            name="address"
                            value={formData.address}
                            required
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div>
                    <button type="submit">Add</button>
                    <button type="button"  onClick={closeButtonHandler}>
                        Close
                    </button>
                </div>
            </form>
        </Modal>
    );    


}

export default StudentForm;