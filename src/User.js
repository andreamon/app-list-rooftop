import { useState, useEffect } from "react";
import axios from "axios";
import { Table, Spinner } from "react-bootstrap";

function Users() {
  const baseURL = "https://fakerapi.it/api/v1/users";
  const [users, setUsers] = useState(null);
  useEffect(() => {
    axios.get(baseURL).then((res) => {
      setUsers(res.data);
    });
  }, []);
  return (
    <div className="container-center">
      {users ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
              
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </Table>
      ) : (
        // <div className="container-spinner">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Cargando...</span>
          </Spinner>
        // </div>
      )}
    </div>
  );
}
export default Users;
