import { useState, useEffect } from "react";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import Pagination from "./Pagination";
import Menu from "./Menu";

function Books() {
	const baseURL = "https://fakerapi.it/api/v1/books?_quantity=100";
	const [books, setBooks] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [booksPerPage] = useState(10);

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
				setBooks(res.data.data);
			})
			.catch((e) => console.log(e));
	}, []);

	const indexOfLastBook = currentPage * booksPerPage;
	const indexOfFirstbook = indexOfLastBook - booksPerPage;
	const currentBooks = books.slice(indexOfFirstbook, indexOfLastBook);

	const paginate = (page) => setCurrentPage(page);

	return (
		<>
			<Menu />

			<div className="header-table">
				<p>Title</p>
				<p>Author</p>
				<p>Genre</p>
				<p>Image</p>
			</div>
			<ul className="content-table">
				{currentBooks.length > 0 ? (
					currentBooks.map((book) => (
						<li key={book.isbn} className="item-content-table">
							<span>{book.title}</span>
							<span>{book.author}</span>
							<span>{book.genre}</span>

							<button className="btn-fa" onClick={() => handleShow(book.image)}>
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
				perPage={booksPerPage}
				total={books.length}
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

export default Books;
