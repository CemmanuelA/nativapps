import React from 'react';
import {ListGroup, ListGroupItem, Panel, PanelGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom'


class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            llave:'1'
        }
        this.handleSelect = this.handleSelect.bind(this);

    }
    handleSelect(llave){
         this.setState({ llave:llave});
    }
    
    render(){
        
        return (<div className="menu">
                    <PanelGroup onSelect={this.handleSelect} accordion>
                        <Panel header="Gestionar estudiantes" eventKey="1">
                            <ListGroup>
                                <ListGroupItem><Link to="/registrarEstudiante">Registrar estudiante</Link></ListGroupItem>
                                <ListGroupItem><Link to="/mostrarEstudiantes">Mostrar estudiantes</Link></ListGroupItem>
                                <ListGroupItem><Link to="/actualizarEstudiantes">Modificar estudiantes</Link></ListGroupItem>
                                <ListGroupItem><Link to="/eliminarEstudiantes">Eliminar estudiantes</Link></ListGroupItem>
                            </ListGroup>
                        </Panel>
                        <Panel header="Gestionar profesores" eventKey="2">
                            <ListGroup>
                                <ListGroupItem><Link to="/registrarProfesor" >Registrar profesor</Link></ListGroupItem>
                                <ListGroupItem><Link to="/mostrarProfesores" >Mostrar profesores</Link></ListGroupItem>
                                <ListGroupItem><Link to="/actualizarProfesores" >Modificar profesores</Link></ListGroupItem>
                                <ListGroupItem><Link to="/eliminarProfesores" >Eliminar profesores</Link></ListGroupItem>
                            </ListGroup>
                        </Panel>
                        <Panel header="Gestionar cursos" eventKey="3">
                            <ListGroup>
                                <ListGroupItem><Link to="/registrarCurso" >Registrar curso</Link></ListGroupItem>
                                <ListGroupItem><Link to="/mostrarCursos" >Mostrar cursos</Link></ListGroupItem>
                                <ListGroupItem><Link to="/actualizarCursos" >Modificar cursos</Link></ListGroupItem>
                                <ListGroupItem><Link to="/eliminarCursos" >Eliminar cursos</Link></ListGroupItem>
                            </ListGroup>
                        </Panel>
                    </PanelGroup>
                </div>);
    }
}

export default Main;
