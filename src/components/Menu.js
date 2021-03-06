function Menu() {
	return (
		<section className="menu-options">
			<div>
				<a href="/" className="link-css">
					<img src="./images/users.png" alt="users" />
					<p>Users</p>
				</a>
			</div>
			<div>
				<a href="/books" className="link-css">
					<img src="./images/books.png" alt="books" />
					<p>Books</p>
				</a>
			</div>
			<div>
				<a href="/products" className="link-css">
					<img src="./images/products.png" alt="products" />
					<p>Products</p>
				</a>
			</div>
		</section>
	);
}
export default Menu;
