import { useState, useEffect } from "react";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import Pagination from "./Pagination";

function Products() {
	const baseURL = "https://fakerapi.it/api/v1/products?_quantity=100";
	const [products, setProducts] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [productsPerPage] = useState(10);

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
				setProducts(res.data.data);
			})
			.catch((e) => console.log(e));
	}, []);

	const indexOfLastProduct = currentPage * productsPerPage;
	const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
	const currentProducts = products.slice(
		indexOfFirstProduct,
		indexOfLastProduct
	);

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
					<a href="/products" className="link-css">
						<img src="./products.png" alt="products" />
						<p>Products</p>
					</a>
				</div>
			</section>

			<div className="header-table">
				<p>Product Name</p>
				<p>Description</p>
				<p>Image</p>
			</div>
			<ul className="content-table">
				{currentProducts.length > 0 ? (
					currentProducts.map((prod) => (
						<li key={prod.ean} className="item-content-table">
							<span>{prod.name}</span>
							<span>{prod.description}</span>

							<button className="btn-fa" onClick={() => handleShow(prod.image)}>
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
				perPage={productsPerPage}
				total={products.length}
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
export default Products;
