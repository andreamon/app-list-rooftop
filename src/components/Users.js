import { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "./Pagination";

function Users() {
	const baseURL = "https://fakerapi.it/api/v1/users?_quantity=100";
	const [users, setUsers] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [usersPerPage] = useState(10);
	useEffect(() => {
		axios
			.get(baseURL)
			.then((res) => {
				setUsers(res.data.data);
				// console.log(res.data.data);
			})
			.catch((e) => console.log(e));
	}, []);

	const indexOfLastUser = currentPage * usersPerPage;
	const indexOfFirstUser = indexOfLastUser - usersPerPage;
	const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

	const paginate = (page) => setCurrentPage(page);

	return (
		<>
			<section className="menu-options">
				<div>
					<a href="/" className="link-css">
						<img src="./users.png" alt="users" />
						<p>Users</p>
					</a>
				</div>
				<div>
					<a href="/books" className="link-css">
						<img src="./books.png" alt="books" />
						<p>Books</p>
					</a>
				</div>
				<div>
					<a href="/" className="link-css">
						<img src="./products.png" alt="products" />
						<p>Products</p>
					</a>
				</div>
			</section>

			<div className="header-table">
				<p>Name</p>
				<p>Username</p>
				<p>Email</p>
				<p>Website</p>
				{/* <p>Image</p> */}
			</div>
			<ul className="content-table">
				{currentUsers.length > 0 ? (
					currentUsers.map((user) => (
						// <tr key={user.uuid}>
						<li key={user.uuid} className="item-content-table">
							<span>
								{user.firstname} {user.lastname}
							</span>
							<span>{user.username}</span>
							<span>{user.email}</span>
							<a href={user.website} rel="noreferrer" target="_blank">
								{user.website}
							</a>
							{/* <span></span> */}
						</li>
					))
				) : (
					<li>NO SE ENCONTRARON DATOS</li>
				)}
			</ul>
			{/* <Row className="justify-content-center">
				<Col md={9}>
					<Table bordered hover responsive size="sm" className="table-center">
						<thead className="table-head">
							<tr>
								<th>Name</th>
								<th>Username</th>
								<th>Email</th>
								<th>Website</th>
							</tr>
						</thead>
						<tbody>
							{currentUsers.length > 0 ? (
								currentUsers.map((user) => (
									<tr key={user.uuid}>
										<td className="name-detail">
											<img src={user.image} alt="user profile" />{" "}
											<span>
												{user.firstname} {user.lastname}
											</span>
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
				</Col>
			</Row> */}
			<Pagination
				perPage={usersPerPage}
				total={users.length}
				currentPage={currentPage}
				paginate={paginate}
			/>
		</>
	);
}
export default Users;
