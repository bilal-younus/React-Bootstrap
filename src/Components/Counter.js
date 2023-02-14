import React, {useState} from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Counter = () => {
    const [Count, setCount] = useState(0);
    const increment = (value)=>
    {
        value = Count ;
        setCount(value+=1)
    }
    const decrement = (value)=>
    {
        value = Count ;
        setCount(value-=1)
    }

    return (
        <>
            <Container className="mt-3">
                <Row>
                    <Col xs={4}>

                        <Card style={{ width: '20rem' }} className="shadow-ls">
                            <Card.Body>
                              <p className="display-1">{Count}</p>
                                <Button variant="primary" className="m-1" onClick={increment}>Increment</Button>
                                <Button variant="danger" className="m-1" onClick={decrement} >Decrement</Button>
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>
            </Container>

        </>
    )
}
