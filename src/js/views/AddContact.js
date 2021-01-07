import React, { useState, useEffect, useContext } from "react";
import { GlobalState } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const AddContact = () => {
	const { store, actions } = useContext(GlobalState);

	const info = {
		name: "",
		email: "",
		phone: "",
		address: ""
	};

	const [contact, setContact] = useState({
		name: info.name,
		email: info.email,
		phone: info.phone,
		address: info.address
	});

	const handleChange = e => {
		setContact({ ...contact, [e.target.name]: e.target.value });
	};

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							name="name"
							value={contact.name}
							onChange={handleChange}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							name="email"
							value={contact.email}
							onChange={handleChange}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							name="phone"
							value={contact.phone}
							onChange={handleChange}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							name="address"
							value={contact.address}
							onChange={handleChange}
						/>
					</div>
					<Link to="/">
						<button
							type="button"
							className="btn btn-primary form-control"
							onClick={() => actions.addNewContact(contact)}>
							save
						</button>
					</Link>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
