import React, {useEffect, useState} from "react";
import {UserServices} from "../services/UserServices";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

export const UserList = () => {
    const [state, setState] = useState(
        {
            users : []
        }
    );
    useEffect(() => {
        UserServices.getAllUsers().then((response)=>{
        setState({...state,
        users : response.data})
        }).catch((e)=>{
            console.log(e)
        });
    }, []);
    return (
        <>
           <Container className="mt-3">
               <Row>
                   <Col>
                       <h3 className="text-primary">User List </h3>

                   </Col>
               </Row>
               <Row>
                   <Col>
                       <Table striped bordered hover className="shadow-lg text-center">
                         <thead>
                         <tr>
                             <th>SNO</th>
                             <th>Name</th>
                             <th>Email</th>
                             <th>Webiste</th>
                             <th>Company</th>
                             <th>Location</th>
                         </tr>
                         </thead>
                           <tbody>

                               {
                                   state.users.length >0 &&
                                   state.users.map((user)=>{
                                    return (
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.website}</td>
                                            <td>{user.company.name}</td>
                                            <td>{user.address.city}</td>
                                        </tr>
                                    )
                                   })
                               }
                           </tbody>
                       </Table>
                   </Col>
               </Row>
           </Container>
        </>
    )
}
