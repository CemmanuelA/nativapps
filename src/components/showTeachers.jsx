import React from 'react';
import { ListGroup, ListGroupItem, Row, Col,Button} from 'react-bootstrap';
import * as firebase from 'firebase';
import { Link } from 'react-router-dom';

import InfoSorT from './infoSorT.jsx';

class ShowTeachers extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {profesores:[],
                      identificacion:'',
                      nombre:'',
                      apellido:'',
                      genero:'',
                      show:false
        };
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    componentWillMount(){
        
        const array = [];
        const ref = firebase.database().ref().child("profesores/");
         ref.on('value',(snapshot)=>{
             
             const codigos = Object.keys(snapshot.val());
             for(let i = 0 ; i < codigos.length; i++){
                 const ref2 = firebase.database().ref().child("profesores/"+codigos[i]);
                 ref2.once('value',data =>{
                     const profesor = data.val();
                      array.push({
                         identificacion:profesor.identificacion,
                         nombre:profesor.nombre,
                         apellido:profesor.apellido,
                         genero:profesor.genero
                     });
                 });
             }
            
           this.setState({profesores:array})
             
         });
        
    }
    
    handleOnClick(identificacion, nombre,apellido,genero){
        this.setState({show:true,
                       identificacion:identificacion,
                       nombre:nombre,
                       apellido:apellido,
                       genero:genero
        });
        
    }
    
    handleClose(){
        this.setState({show:false,
                       identificacion:'',
                       nombre:'',
                       apellido:'',
                       genero:''})
    }
    render(){
        const {identificacion, nombre, apellido, genero, show } = this.state;
        
        return(<div>
                
                <div className="centro">
                    <InfoSorT identificacion={identificacion} nombre={nombre} apellido={apellido} genero={genero} show={show}
                                  handleClose={this.handleClose} fuente="profesor"/>
                     <Button className="btn-regresar"><Link to="/">Regresar</Link></Button>
                     <div className="contenido">
                        <h1>Profesores</h1>
                        <ListGroup>
                            {  (this.state.profesores.length > 0) ?
                                this.state.profesores.map((elemento)=>{
                                    return (<div key={elemento} className="estudiante">
                                                
                                                 <ListGroupItem className="lista">
                                                   <div className="info">
                                                     {elemento.nombre + " " + elemento.apellido + "  "}
                                                   </div>
                                                    <Button className="btn-lista" bsStyle="info" onClick={()=>
                                                    this.handleOnClick(elemento.identificacion,elemento.nombre,elemento.apellido,elemento.genero)}
                                                    >
                                                    Mostrar</Button>
                                                </ListGroupItem>
               
                                            </div>)
                                })
                                : <p>no hay profesores en el sistema</p>
                            }
                         </ListGroup>
                    </div>
               </div>
              </div>);
    }
}

export default ShowTeachers;