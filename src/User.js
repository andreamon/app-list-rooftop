import { useState, useEffect } from "react";
import axios from "axios";

function Users() {
  const baseURL = "https://fakerapi.it/api/v1/users";
  const [users, setUsers] = useState(null);
  useEffect(() => {
    axios.get(baseURL).then((res) => {
      setUsers(res.data);
    });
  }, []);
  return(
      <div>
          {users ? <p>Aca los usuarios</p> : <p>Cargando</p>}
      </div>
  )
}
export default Users;
