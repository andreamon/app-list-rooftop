import { useState, useEffect } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";

function Users() {
  const baseURL = "https://fakerapi.it/api/v1/users";
  const [users, setUsers] = useState(null);
  useEffect(() => {
    axios.get(baseURL).then((res) => {
      setUsers(res.data);
    });
  }, []);
  return (
    <>
      {users ? (
        <p className="container-center">Aca los usuarios</p>
      ) : (
        <div className="container-spinner">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Cargando...</span>
          </Spinner>
        </div>
      )}
    </>
  );
}
export default Users;
