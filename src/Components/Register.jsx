import React, {useState} from 'react'
import {Container, Card, Form} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export const Register = () => {
    const [state, setState] = useState(
        {
            user : {
                username : '',
                email : '',
                password : ''
            },

        }
    );
    let updateInput = (e)=>
    {
        setState({
            ...state,
            user : {
                ...state.user,
                [e.target.name]  : e.target.value
            }
        })
    }
    let register = (e)=>
    {
        e.preventDefault();
        console.log(state.user)
    }
    return (
        <>
            <pre>{JSON.stringify(state)}</pre>
           <Container className="mt-3 ">
               <Row>
                   <Col md={3}>
                        <Card className="shadow-lg">
                           <Card.Header className=" p-3" style={{backgroundColor : "lightcyan"}}><h4>Register</h4></Card.Header>
                            <Card.Body style={{backgroundColor : '#f7f5f0'}}>
                                <Form.Group className="mb-3">
                                    <Form.Control className="mb-2" name="username" onChange={updateInput}  type="text" placeholder="Username"></Form.Control>
                                    <Form.Control className="mb-2" name="password" onChange={updateInput} type="password" placeholder="password"></Form.Control>
                                    <Form.Control className="mb-2" name="email" onChange={updateInput} type="Email" placeholder="Email"></Form.Control>
                                    <Button variant="warning" onClick={register} type="submit">Register</Button>
                                </Form.Group>
                            </Card.Body>
                        </Card>
                   </Col>
               </Row>
           </Container>
        </>
    )
}
