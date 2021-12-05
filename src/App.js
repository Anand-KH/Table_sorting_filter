import { useEffect, useState } from "react";
import "./App.css";
import Table from "./Components/Table";
import User from "./Components/User";
function App() {
	let initUser;
	if (localStorage.getItem("user") === null) {
		initUser = [];
	} else {
		initUser = JSON.parse(localStorage.getItem("user"));
	}

	const [user, setUser] = useState(initUser);

	const addUser = (name, lastName, email) => {
		const newUser = { name: name, lastName: lastName, email: email };
		setUser([...user, newUser]);
	};

	useEffect(() => {
		localStorage.setItem("user", JSON.stringify(user));
	}, [user]);

	return (
		<div className="App">
			<User addUser={addUser} user={user} />
			<Table user={user} />
		</div>
	);
}

export default App;
