//dependecia
import React from 'react';
import { Route, Switch } from 'react-router-dom';

//componentes
import Main from './components/main.jsx';
import RegisterStudent from './components/registerStudent.jsx';
import ShowStudents from './components/showStudents.jsx';
import UpdateStudents from './components/updateStudents.jsx';
import DeleteStudent from './components/deleteStudent.jsx';
import RegisterTeacher from './components/registerTeacher.jsx';
import ShowTeachers from './components/showTeachers.jsx';
import UpdateTeachers from './components/updateTeachers.jsx';
import DeleteTeacher from './components/deleteTeacher.jsx';
import RegisterCourse from './components/registerCourse.jsx';
import ShowCourses from './components/showCourses.jsx';
import UpdateCourses from './components/updateCourses.jsx';
import DeleteCourse from './components/deleteCourse.jsx';
const AppRoutes = () =>{
    

    return (<div>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/registrarEstudiante" component={RegisterStudent} />
            <Route exact path="/mostrarEstudiantes" component={ShowStudents} />
            <Route exact path="/actualizarEstudiantes" component={UpdateStudents} />
            <Route exact path="/eliminarEstudiantes" component={DeleteStudent}/>
            <Route exact path="/registrarProfesor" component={RegisterTeacher} />
            <Route exact path="/mostrarProfesores" component={ShowTeachers} />
            <Route exact path="/actualizarProfesores" component={UpdateTeachers}/>
            <Route exact path="/eliminarProfesores" component={DeleteTeacher}/>
            <Route exact path="/registrarCurso" component={RegisterCourse} />
            <Route exact path="/mostrarCursos" component={ShowCourses} />
            <Route exact path="/actualizarCursos" component={UpdateCourses} />
            <Route exact path="/eliminarCursos" component={DeleteCourse}/>
            
        </Switch>
    </div>);
}

export default AppRoutes;