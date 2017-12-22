import React from 'react';
import { ListGroup, ListGroupItem, Row, Col,Form,FormGroup,FormControl,ControlLabel,Button} from 'react-bootstrap';
import * as firebase from 'firebase';
import { Link } from 'react-router-dom';

import Update from './update.jsx';

class UpdateStudents extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {identificacion:'',
                      nombre:'',
                      apellido:'',
                      genero:'',
                      show:false,
                      value:''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.defaultValues = this.defaultValues.bind(this);
     }
    
    handleChange(event){
        event.preventDefault();
        const value = event.target.value;
        this.setState({value:value});
        
    }
    
    handleSubmit(event){
        event.preventDefault();
        const dato = this.state.value;
        
        const ref = firebase.database().ref().child("estudiantes/" + dato);
         ref.once('value',(snapshot)=>{
             
            if(snapshot.val() != null){
                this.setState({
                      identificacion: snapshot.val().identificacion,
                      nombre: snapshot.val().nombre,
                      apellido: snapshot.val().apellido,
                      genero: snapshot.val().genero
                      })
            }else{
                alert('no se encontro el estudiante')
            }
             
         });
    }
    
    handleOnClick(){
        this.setState({show:true});
    }
    
    handleClose(){
        this.setState({show:false});
    }
    
     defaultValues(){
        this.setState({
            
                      identificacion:'',
                      nombre:'',
                      apellido:'',
                      genero:'',
                      show:false,
                      value:''
            
        });
    }
    render(){
        const {identificacion, nombre, apellido, genero, show, value } = this.state;
        return(<div>
                 
                <div className="centro">
                <Button className="btn-regresar"><Link to="/">Regresar</Link></Button>
                <Update identificacion={identificacion} nombre={nombre} apellido={apellido} genero={genero} show={show} handleClose={this.handleClose}
                        fuente={"estudiantes"} defaultValues={this.defaultValues}
                />
               
                 <div className="contenido">
                    <Form inline onSubmit={(event) => this.handleSubmit(event)}>
                    <FormGroup controlId="formInlineName">
                      <ControlLabel>Identificación:</ControlLabel>
                      {' '}
                      <FormControl type="text" value={value} placeholder="Estudiante" onChange={this.handleChange} />
                    </FormGroup>
                    {' '}
                    <Button type="submit">
                      Buscar
                    </Button>
                  </Form>
                  <ListGroup>
                    {
                        (this.state.nombre != '') ?
                         <ListGroupItem className="lista">
                           <div className="info">
                             {nombre + " " + apellido + "  "}
                           </div>
                            <Button bsStyle="success"  className="btn-lista" onClick={()=>
                            this.handleOnClick(identificacion,nombre,apellido,genero)}
                            >
                            Modificar</Button>
                        </ListGroupItem>
                        :
                        null
       

                       
                    }
                  </ListGroup>
                 </div>
               </div>
               </div>);
    }
}

export default UpdateStudents;