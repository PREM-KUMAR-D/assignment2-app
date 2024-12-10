import React from "react";
import Modal from "../Modal/Modal";


const StudentForm =(props)=>{

    return (
        <Modal onClose={props.onShowModalChange}>
            <form >
                <div>
                    <div>
                        <label htmlFor="name">Name : </label>
                        <input
                            id="name"
                            name="name"

                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="mobile">Title: </label>
                        <input
                            id="mobile"
                            name="mobile"
                            type="tel"
                        />
                    </div>
                    <div>
                        <label htmlFor="address">Address: </label>
                        <input
                            id="address"
                            name="address"
                        />
                    </div>
                </div>
                <div>
                    <button type="submit">Add</button>
                    <button type="button" >
                        Close
                    </button>
                </div>
            </form>
        </Modal>
    );    


}

export default StudentForm;