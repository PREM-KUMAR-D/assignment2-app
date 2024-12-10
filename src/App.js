import { useState } from 'react';
import './App.css';
import Student from './Components/Student/Student';
import StudentForm from './Components/StudentForm/StudentForm';
import StudentProvider from './store/StudentProvider';
import StudentList from './Components/StudentList.js/StudentList';


function App() {

  const [showModal,setShowModal] = useState(false);
  return (
    <StudentProvider>
      <Student onModalOpen={setShowModal}/>
      {showModal && <StudentForm onShowModalChange={setShowModal}/>}
      <StudentList/>
    </StudentProvider>
  );
}

export default App;
