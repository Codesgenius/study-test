import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import StudentDashboard from "./pages/student/Dashboard";
import StudentCourses from "./pages/student/Courses";
import CourseDetails from "./pages/student/CourseDetails";
import StudentQuizes from "./pages/student/Quizes";
import StudentAssesments from "./pages/student/Assesments";
import StudentExams from "./pages/student/Exams";
import StudentGrades from "./pages/student/Grades";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Login />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />

        <Route path="/student" element={<AppLayout />}>
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/student/courses" element={<StudentCourses />} />
          <Route
            path="/student/courses/:courseCode"
            element={<CourseDetails />}
          />
          <Route path="/student/quizes" element={<StudentQuizes />} />
          <Route path="/student/assesments" element={<StudentAssesments />} />
          <Route path="/student/exams" element={<StudentExams />} />
          <Route path="/student/grades" element={<StudentGrades />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
