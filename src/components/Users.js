import { useState, useEffect } from "react";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import Pagination from "./Pagination";
import Menu from "./Menu";

function Users() {
	const baseURL = "https://fakerapi.it/api/v1/users?_quantity=100";
	const [users, setUsers] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [usersPerPage] = useState(10);

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const [imageSelected, setImageSelected] = useState("");

	const handleShow = (urlImage) => {
		console.log(urlImage);
		setImageSelected(urlImage);
		setShow(true);
	};
	useEffect(() => {
		axios
			.get(baseURL)
			.then((res) => {
				setUsers(res.data.data);
			})
			.catch((e) => console.log(e));
	}, []);

	const indexOfLastUser = currentPage * usersPerPage;
	const indexOfFirstUser = indexOfLastUser - usersPerPage;
	const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

	const paginate = (page) => setCurrentPage(page);

	return (
		<>
			<Menu />

			<div className="header-table">
				<p>Name</p>
				<p>Username</p>
				<p>Email</p>
				<p>Website</p>
				<p>Image</p>
			</div>
			<ul className="content-table">
				{currentUsers.length > 0 ? (
					currentUsers.map((user) => (
						<li key={user.uuid} className="item-content-table">
							<span>
								{user.firstname} {user.lastname}
							</span>
							<span>{user.username}</span>
							<span>{user.email}</span>
							<a href={user.website} rel="noreferrer" target="_blank">
								{user.website}
							</a>
							<button className="btn-fa" onClick={() => handleShow(user.image)}>
								<FontAwesomeIcon
									icon={faCamera}
									style={{ color: "#0098e0" }}
									size="lg"
								/>
							</button>
						</li>
					))
				) : (
					<li>NO SE ENCONTRARON DATOS</li>
				)}
			</ul>
			<Pagination
				perPage={usersPerPage}
				total={users.length}
				currentPage={currentPage}
				paginate={paginate}
			/>
			<Modal
				show={show}
				onHide={handleClose}
				backdrop="static"
				keyboard={false}
			>
				<Modal.Body>
					<img src={imageSelected} alt="user profile" className="image-modal" />
				</Modal.Body>
				<Modal.Footer>
					<Button variant="danger" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
export default Users;
