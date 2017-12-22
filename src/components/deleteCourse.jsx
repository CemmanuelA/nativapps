import React from 'react';
import { ListGroup, ListGroupItem, Row, Col,Form,FormGroup,FormControl,ControlLabel,Button} from 'react-bootstrap';
import * as firebase from 'firebase';
import { Link } from 'react-router-dom';

import DeleteWarning from './deleteWarning.jsx';

class DeleteCourse extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {codigo:'',
                      nombre:'',
                      observacion:'',
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
        
        const ref = firebase.database().ref().child("cursos/" + dato);
         ref.once('value',(snapshot)=>{
             
            if(snapshot.val() != null){
                this.setState({
                      codigo:snapshot.val().codigo,
                      nombre:snapshot.val().nombre,
                      observacion:snapshot.val().observacion,
                      })
            }else{
                alert('no se encontro el curso')
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
            
                     codigo:'',
                     nombre:'',
                     observacion:'',
                     show:false,
                     value:''
            
        });
    }
    render(){
        const {codigo, nombre, observacion, show, value } = this.state;
        return(<div>
                
                <div className="centro">
                <Button className="btn-regresar"><Link to="/">Regresar</Link></Button>
                 <DeleteWarning identificacion={codigo} nombre={nombre} show={show} defaultValues={this.defaultValues} handleClose={this.handleClose}
                                fuente="cursos"/>
                 <div className="contenido">
                    <Form inline onSubmit={(event) => this.handleSubmit(event)}>
                    <FormGroup controlId="formInlineName">
                      <ControlLabel>Identificación:</ControlLabel>
                      {' '}
                      <FormControl type="text" value={value} placeholder="Curso" onChange={this.handleChange} />
                    </FormGroup>
                    {' '}
                    <Button type="submit">
                      Buscar
                    </Button>
                  </Form>
                  <ListGroup >
                    {
                        (this.state.nombre != '') ?
                         <ListGroupItem className="lista">
                           <div className="info">
                             {nombre + "  "}
                           </div>
                            <Button bsStyle="danger"  className="btn-lista" onClick={()=>
                            this.handleOnClick(codigo,nombre,observacion)}
                            >
                            Eliminar</Button>
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

export default DeleteCourse;