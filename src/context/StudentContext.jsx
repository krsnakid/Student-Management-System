import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';
import useLocalStorage from '../utils/useLocalStorage';

const StudentContext = createContext();

export function StudentProvider({ children }) {
  const [studentList, setStudentList] = useLocalStorage('stdLis', []);
  const [searchTerm, setSearchTerm] = useState('');
  
  const addStudent = useCallback((newStudent) => {
    const data = localStorage.getItem('stdLis');
    const stdLis = data && JSON.parse(data);
    
    const newStdLis = [...stdLis, newStudent];
    setStudentList(newStdLis);
  }, [setStudentList]);
  
  const deleteStudent = useCallback((index) => {
    setStudentList(prevList => prevList.filter((_, indx) => index !== indx));
  }, [setStudentList]);
  
  const getFilteredStudents = useCallback(() => {
    if (!searchTerm) return studentList;
    
    return studentList.filter((student) => 
      student.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, studentList]);
  
  const studentCount = useMemo(() => studentList.length, [studentList]);
  
  const contextValue = useMemo(() => ({
    studentList,
    searchTerm,
    setSearchTerm,
    addStudent,
    deleteStudent,
    getFilteredStudents,
    studentCount
  }), [
    studentList, 
    searchTerm, 
    setSearchTerm, 
    addStudent, 
    deleteStudent, 
    getFilteredStudents, 
    studentCount
  ]);
  
  return (
    <StudentContext.Provider value={contextValue}>
      {children}
    </StudentContext.Provider>
  );
}

export function useStudentContext() {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error('useStudentContext must be used within a StudentProvider');
  }
  return context;
}
