import React, { useState } from "react";

export default function User({ addUser }) {
	const [name, setName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");

	const submit = (e) => {
		e.preventDefault();
		if (!name || !lastName || !email) {
			alert("plz fill fields");
		} else {
			addUser(name, lastName, email);
			alert("form Submitted");
			setName("");
			setEmail("");
			setLastName("");
		}
	};

	return (
		<div className="container mt-5">
			<h4>Fill the Form</h4>
			<form onSubmit={submit}>
				<div className="mb-3">
					<label htmlFor="first_name" className="form-label">
						Name
					</label>
					<input
						type="text"
						className="form-control"
						id="first_name"
						aria-describedby="emailHelp"
						name="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder="Enter First Name"
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="last_name" className="form-label">
						Last Name
					</label>
					<input
						type="text"
						className="form-control"
						id="last_name"
						name="lastName"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
						placeholder="Enter Last Name"
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="u_email" className="form-label">
						Email
					</label>
					<input
						type="text"
						className="form-control"
						id="u_email"
						name="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Enter Email"
					/>
				</div>

				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		</div>
	);
}
