import { useState, useEffect } from "react";
import axios from "axios";
import { Table, Pagination } from "react-bootstrap";

function Users() {
  const baseURL = "https://fakerapi.it/api/v1/users?_quantity=50";
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
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
    <>
      <Table bordered hover responsive size="sm" className="table-center">
        <thead className="table-head">
          <tr>
            <th>NAME</th>
            <th>USERNAME</th>
            <th>EMAIL</th>
            <th>WEBSITE</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.uuid}>
                <td>
                  {user.firstname} {user.lastname}
                </td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <a href={user.website} rel="noreferrer" target="_blank">
                    {user.website}
                  </a>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>NO SE ENCONTRARON DATOS</td>
            </tr>
          )}
        </tbody>
      </Table>
      {users.length !== 0 ? (
        <Pagination className="paginate-center">
          <Pagination.Prev />
          <Pagination.Next />
        </Pagination>
      ) : null}
    </>
  );
}
export default Users;
