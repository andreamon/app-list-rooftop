function Pagination({ perPage, total, currentPage, paginate }) {
	const pageNumbers = Math.ceil(total / perPage);
	return (
		<div className="pagination-css">
			<button
				className="btn-page"
				disabled={currentPage === 1 ? true : false}
				onClick={() => paginate(currentPage - 1)}
			>
				Previous
			</button>
			<button
				className="btn-page"
				disabled={currentPage === pageNumbers ? true : false}
				onClick={() => paginate(currentPage + 1)}
			>
				Next
			</button>
		</div>
	);
}

export default Pagination;
