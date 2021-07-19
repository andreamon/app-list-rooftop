import { useState, useEffect } from "react";
import axios from "axios";
import { Table, Spinner } from "react-bootstrap";

function Users() {
  const baseURL = "https://fakerapi.it/api/v1/users";
  const [users, setUsers] = useState([]);
  console.log(users);
  useEffect(() => {
    axios.get(baseURL).then((res) => {
      setUsers(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <div className="container-center">
      {users.length === 0 ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </Spinner>
      ) : (
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
          {users.length > 0 ? (
            users.map((user, index) => {
              return (
                <tr key={user.uuid}>
                  <td>{index}</td>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.username}</td>
                </tr>
              );
            })
          ):(
              <tr><td>No hay datos</td></tr>
          )}
          </tbody>
        </Table>
      )}
    </div>
  );
}
export default Users;
