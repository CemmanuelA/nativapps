import React from 'react';
import { ListGroup, ListGroupItem, Row, Col,Button} from 'react-bootstrap';
import * as firebase from 'firebase';
import { Link } from 'react-router-dom';

import InfoCourse from './infoCourse.jsx';

class ShowCourses extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {cursos:[],
                      codigo:'',
                      nombre:'',
                      observacion:'',
                      show:false
        };
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    componentWillMount(){
        
        const array = [];
        const ref = firebase.database().ref().child("cursos/");
         ref.on('value',(snapshot)=>{
             
             const codigos = Object.keys(snapshot.val());
             for(let i = 0 ; i < codigos.length; i++){
                 const ref2 = firebase.database().ref().child("cursos/"+codigos[i]);
                 ref2.once('value',data =>{
                     const curso = data.val();
                      array.push({
                         codigo:curso.codigo,
                         nombre:curso.nombre,
                         observacion:curso.observacion,
                     });
                 });
             }
            
           this.setState({cursos:array})
             
         });
        
    }
    
    handleOnClick(codigo, nombre,observacion){
        this.setState({show:true,
                       codigo:codigo,
                       nombre:nombre,
                       observacion:observacion
        });
        
    }
    
    handleClose(){
        this.setState({show:false,
                      codigo:'',
                      nombre:'',
                      observacion:''
            
        })
    }
    render(){
        const {codigo, nombre, observacion, show } = this.state;
        
        return(<div>
               
                <div className="centro">
                    <InfoCourse codigo={codigo} nombre={nombre} observacion={observacion} show={show}
                                  handleClose={this.handleClose}/>
                     <Button className="btn-regresar"><Link to="/">Regresar</Link></Button>
                     <div className="contenido">
                        <h1>Cursos</h1>
                        <ListGroup>
                            { (this.state.cursos.length > 0) ?
                                this.state.cursos.map((elemento)=>{
                                    return (<div key={elemento} className="estudiante">
                                                
                                                 <ListGroupItem className="lista">
                                                   <div className="info">
                                                     {elemento.nombre  + "  "}
                                                   </div>
                                                    <Button className="btn-lista" bsStyle="info" onClick={()=>
                                                    this.handleOnClick(elemento.codigo,elemento.nombre,elemento.observacion)}
                                                    >
                                                    Mostrar</Button>
                                                </ListGroupItem>
               
                                            </div>)
                                })
                                :<p>No hay cursos en el sistema</p>
                            }
                         </ListGroup>
                    </div>
               </div>
              </div>);
    }
}

export default ShowCourses;