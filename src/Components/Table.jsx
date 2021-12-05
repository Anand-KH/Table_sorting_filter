import React, { useState } from "react";
import sortData from "./SortData";

export default function Table(props) {
	const { items, requestSort, sortConfig } = sortData(props.user);
	const [search, setSearch] = useState("");
	const getClassName = (name) => {
		if (!sortConfig) {
			return;
		}
		return sortConfig.key === name ? sortConfig.direction : undefined;
	};

	return (
		<>
			<hr />
			<h3 className="text-center">List of Users</h3>
			<div className="container mt-4">
				<input
					type="text"
					placeholder="Search... 🔍"
					onChange={(e) => setSearch(e.target.value)}
				/>
			</div>
			<div className="container table-responsive mt-3">
				<table className="table text-center table-hover table-striped table-secondary">
					<thead className="">
						<tr>
							<th
								scope="col"
								onClick={() => requestSort("name")}
								className={getClassName("name")}>
								Name
							</th>
							<th
								scope="col"
								onClick={() => requestSort("lastName")}
								className={getClassName("lastName")}>
								Last Name
							</th>
							<th
								scope="col"
								onClick={() => requestSort("email")}
								className={getClassName("email")}>
								Email
							</th>
						</tr>
					</thead>
					<tbody>
						{items
							.filter((val) => {
								if (search === "") {
									return val;
								} else if (
									val.name
										.toLowerCase()
										.includes(search.toLowerCase())
								) {
									return val;
								}
							})
							.map((val) => {
								return (
									<>
										<tr>
											<td>{val.name}</td>
											<td>{val.lastName}</td>
											<td>{val.email}</td>
										</tr>
									</>
								);
							})}
					</tbody>
				</table>
			</div>
		</>
	);
}
