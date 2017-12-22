///firebase
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAjT7q4wRyPK_lY_2NbJrU4nd72YdV22b0",
    authDomain: "e-nativapps.firebaseapp.com",
    databaseURL: "https://e-nativapps.firebaseio.com",
    projectId: "e-nativapps",
    storageBucket: "",
    messagingSenderId: "298872013531"
  };
  firebase.initializeApp(config);
  
  export const saveStudent = (identificacion,nombre,apellido,genero) => {
      const ref = firebase.database().ref().child('estudiantes/' + identificacion +'/');
      ref.set({
          identificacion,
          nombre,
          apellido,
          genero
      });
  }
  
  export const saveTeacher = (identificacion,nombre,apellido,genero) => {
      const ref = firebase.database().ref().child('profesores/' + identificacion +'/');
      ref.set({
          identificacion,
          nombre,
          apellido,
          genero
      });
  }
   export const saveCourse = (codigo,nombre,observacion) => {
      const ref = firebase.database().ref().child('cursos/' + codigo +'/');
      ref.set({
          codigo,
          nombre,
          observacion
      });
  }
   export const updateSorT = (id,nombre,apellido,genero,fuente) => {
    var update = {};
    update[fuente+ "/" + id + "/"] = {identificacion:id,
                                      nombre:nombre,
                                      apellido:apellido,
                                      genero:genero};
    return firebase.database().ref().update(update);
  }
  
   export const updateCourse = (codigo,nombre,observacion) => {
    var update = {};
    update["cursos/" + codigo + "/"] = {codigo:codigo,
                                        nombre:nombre,
                                        observacion:observacion};
    return firebase.database().ref().update(update);
  }
  
  export  const deleteData = (fuente,id) =>{
     console.log(fuente,id)
     const ref = firebase.database().ref().child(fuente + "/" + id);
     ref.remove();
  }