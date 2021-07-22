import { useState, useEffect } from "react";
import axios from "axios";
import { Table, Pagination, Row, Col } from "react-bootstrap";

function Users() {
	const baseURL = "https://fakerapi.it/api/v1/users?_quantity=50";
	const [users, setUsers] = useState([]);
	// const [currentPage, setCurrentPage] = useState(1);
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
			<Row className="justify-content-center">
				<Col className="col-title-css" md={1}>
					<a href="/" className="link-css">
						<img src="./users.png" alt="users" />
						<p>Users</p>
					</a>
				</Col>
				<Col className="col-title-css" md={{ span: 1, offset: 1 }}>
					<a href="/books" className="link-css">
						<img src="./books.png" alt="users" />
						<p>Books</p>
					</a>
				</Col>
				<Col className="col-title-css" md={{ span: 1, offset: 1 }}>
					<a href="/" className="link-css">
						<img src="./places.png" alt="users" />
						<p>Places</p>
					</a>
				</Col>
			</Row>
			<Row className="justify-content-center">
				<Col md={8}>
					<Table bordered hover responsive size="sm" className="table-center">
						<thead className="table-head">
							<tr>
								<th>NAME</th>
								<th>USERNAME</th>
								<th>EMAIL</th>
								<th>WEBSITE</th>
								{/* <th>IMAGE</th> */}
							</tr>
						</thead>
						<tbody>
							{users.length > 0 ? (
								users.map((user) => (
									<tr key={user.uuid}>
										<td>
											{/* <img width="10%" src={user.image} alt="image user" />{" "} */}
											{user.firstname} {user.lastname}
										</td>
										<td>{user.username}</td>
										<td>{user.email}</td>
										<td>
											<a href={user.website} rel="noreferrer" target="_blank">
												{user.website}
											</a>
										</td>
										{/* <td>
									<img width="10%" src={user.image} alt="image user" />
								</td> */}
									</tr>
								))
							) : (
								<tr>
									<td>NO SE ENCONTRARON DATOS</td>
								</tr>
							)}
						</tbody>
					</Table>
				</Col>
			</Row>
			{/* {users.length !== 0 ? (
				<Pagination className="paginate-center">
					<Pagination.Prev />
					<Pagination.Next />
				</Pagination>
			) : null} */}
		</>
	);
}
export default Users;
