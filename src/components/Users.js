import { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

function Users() {
  const baseURL = "https://fakerapi.it/api/v1/users";
  const [users, setUsers] = useState([]);
  console.log(users);
  useEffect(() => {
    axios
      .get(baseURL)
      .then((res) => {
        setUsers(res.data.data);
        console.log(res.data.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <Table responsive size="sm">
      <thead className="text-center">
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Nombre de Usuario</th>
        </tr>
      </thead>
      <tbody>
        {users.length > 0 ? (
          users.map((user) => (
            <tr key={user.uuid}>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.username}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td>NO SE ENCONTRARON DATOS</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}
export default Users;
