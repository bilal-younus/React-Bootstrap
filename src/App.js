
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Counter} from "./Components/Counter";
import {Register} from "./Components/Register";
import {UserList} from "./Components/UserList";
let App = () =>
{
  return (
    <>

    <h2>App Component</h2>
      <Navbar bg="success" expand="sm" >
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        </Container>
      </Navbar>
      {/*<Counter/>*/}
      <Register/>
      <UserList/>

    </>
  );
}

export default App;

