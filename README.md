# 🎓 Student Management System

A modern, responsive web application built with React that allows educational institutions to efficiently manage student data. This project demonstrates advanced React concepts including Context API for state management, custom hooks, memoization, and browser routing.

## ✨ Features

- 🧑‍🎓 Add, view, and delete student records
- 🔍 Search functionality to quickly find students by name
- 📊 Organized student listing with expandable details
- 💾 Persistent data storage using localStorage
- 🔄 Optimized rendering with React's performance hooks
- 📱 Fully responsive design (mobile + desktop)

## 📂 Pages / Components

### Home Page (`/`)
The landing page provides a welcome message and navigation options to manage students.

```jsx
// Home component example
function Home() {
  const { studentCount } = useStudentContext(); // Using context to get student count
  
  return (
    <div className="flex flex-col items-center justify-center">
      <h1>Welcome to the Student Management System</h1>
      <p>This system allows you to manage student information efficiently.</p>
      <div className="flex gap-4">
        <Link to="/editStudents">Manage Students</Link>
        <a href="https://github.com/krsnakid/Student-Management-System">
          Learn More
        </a>
      </div>
    </div>
  );
}
```

### Student List (`/studentList`)
Displays all students in a read-only format, with ability to search by name and view detailed information.

```jsx
// StudentList component example
function StudentList() {
  const { searchTerm, setSearchTerm, getFilteredStudents } = useStudentContext();
  
  const filteredStudents = useMemo(() => getFilteredStudents(), [getFilteredStudents]);
  
  return (
    <div>
      <input
        type="text"
        placeholder="Search by Name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredStudents.map((student) => (
        <DisplayStudent key={student.id} obj={student} delStd={() => {}} />
      ))}
    </div>
  );
}
```

### Edit Students (`/editStudents`)
Allows adding new students and removing existing ones. Includes a search functionality.

```jsx
// EditStudents component example
function EditStudents() {
  const { addStudent, deleteStudent } = useStudentContext();
  const [showAddForm, setShowAddForm] = useState(false);
  
  return (
    <>
      <button onClick={() => setShowAddForm(true)}>Add New Student</button>
      {/* Student list with delete functionality */}
      {showAddForm && (
        <StudentForm 
          toggleFormStatus={() => setShowAddForm(false)} 
          setStudent={addStudent}
        />
      )}
    </>
  );
}
```

## 🛠 Technical Implementation

### Context API for State Management

We use React's Context API to manage application state, avoiding prop drilling and centralizing data access:

```jsx
// StudentContext.jsx
const StudentContext = createContext();

export function StudentProvider({ children }) {
  const [studentList, setStudentList] = useLocalStorage('stdLis', []);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Memoized functions and values
  const addStudent = useCallback((newStudent) => {
    // Implementation
  }, [setStudentList]);
  
  const deleteStudent = useCallback((index) => {
    // Implementation
  }, [setStudentList]);
  
  return (
    <StudentContext.Provider value={{ 
      studentList, searchTerm, setSearchTerm, addStudent, deleteStudent 
    }}>
      {children}
    </StudentContext.Provider>
  );
}

// Usage in components
function MyComponent() {
  const { studentList } = useStudentContext();
  // ...
}
```

### Custom Hooks

#### `useLocalStorage` Hook
A custom hook that synchronizes state with localStorage:

```jsx
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}
```

### Performance Optimization

We use React's performance hooks to optimize rendering:

#### `useCallback` 
Used to memoize functions to prevent unnecessary re-renders:

```jsx
const handleSearchChange = useCallback((e) => {
  setSearchTerm(e.target.value);
}, [setSearchTerm]);
```

#### `useMemo`
Used to memoize computed values:

```jsx
const filteredStudents = useMemo(() => {
  return studentList.filter(student => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}, [studentList, searchTerm]);
```

#### `useRef`
Used for form values to avoid re-renders during typing:

```jsx
function StudentForm() {
  const formRef = useRef({
    id: "",
    name: "",
    // Other fields
  });
  
  function handleInputChange(e) {
    const { name, value } = e.target;
    formRef.current[name] = value;
  }
  
  // ...
}
```

### Routing with React Router

We use React Router for navigation between different pages:

```jsx
function App() {
  return (
    <StudentProvider>
      <div className="app">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editStudents" element={<EditStudents />} />
          <Route path="/studentList" element={<StudentList />} />
        </Routes>
      </div>
    </StudentProvider>
  );
}
```

### Code Splitting with Lazy Loading

To optimize performance and reduce the initial bundle size, we implemented lazy loading for route components:

```jsx
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
// Import Home normally since it's the landing page
import Home from "./pages/Home";
// Lazy load other pages
const EditStudents = lazy(() => import("./pages/EditStudents"));
const StudentList = lazy(() => import("./pages/StudentList"));

// Loading fallback component
const LoadingFallback = () => (
  <div className="w-full h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
    <p className="ml-3 text-lg font-medium text-gray-600">Loading...</p>
  </div>
);

function App() {
  return (
    <StudentProvider>
      <div className="app">
        <Navbar />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/editStudents" element={<EditStudents />} />
            <Route path="/studentList" element={<StudentList />} />
          </Routes>
        </Suspense>
      </div>
    </StudentProvider>
  );
}
```

This approach provides several benefits:
- Smaller initial bundle size for faster loading
- Components are loaded on-demand only when needed
- Improved performance for users with slower connections
- Better user experience with a loading indicator

## 📷 Screenshots

<p align="center">
  <img src="./src/assets/Screenshot%202025-04-18%20233154.png" alt="Home Page" width="80%" style="border-radius: 8px; margin-bottom: 20px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />
</p>

<div style="display: flex; flex-wrap: wrap; gap: 15px; justify-content: center;">
  <img src="./src/assets/Screenshot%202025-04-18%20232957.png" alt="Student List" width="48%" style="border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />
  <img src="./src/assets/Screenshot%202025-04-18%20233048.png" alt="Add Student Form" width="48%" style="border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />
</div>

*Above: Home page (top), Student List view (bottom left), and Add Student form (bottom right)*

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/krsnakid/Student-Management-System.git
cd Student-Management-System
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm start
```

### 4. Open in your browser
Open [http://localhost:3000](http://localhost:3000) to view the application.

## 💡 Key Learning Points

- Context API for centralized state management
- Performance optimization with React hooks (useCallback, useMemo)
- Form handling with useRef
- Data persistence with localStorage
- Responsive design techniques
- Component composition and reusability
- React Router for multi-page applications
- Code splitting and lazy loading for performance optimization

## 📚 Resources

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [React Router Documentation](https://reactrouter.com/)
- [React Hooks API Reference](https://reactjs.org/docs/hooks-reference.html)
