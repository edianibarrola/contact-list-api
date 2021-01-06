import React, { useState, useEffect, useContext } from "react";
import { GlobalState } from "../store/appContext";
import { Link } from "react-router-dom";
import { AddContact } from "./AddContact";
import PropTypes from "prop-types";

//editable contact fields with prepopulated input
// statehook for input tracking

export const EditContact = props => {
	const { store, actions } = useContext(GlobalState);

	const info = store.agenda.find(element => element.id == props.match.params.id);

	const [contact, setContact] = useState({
		name: info.full_name,
		email: info.email,
		phone: info.phone,
		address: info.address,
		id: info.id
	});

	const handleChange = e => {
		setContact({ ...contact, [e.target.name]: e.target.value });
	};
	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Edit Contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							value={contact.name}
							className="form-control"
							placeholder="full name"
							onChange={handleChange}
							name="name"
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							value={contact.email}
							className="form-control"
							placeholder="Enter email"
							onChange={handleChange}
							name="email"
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							value={contact.phone}
							className="form-control"
							placeholder="Enter phone"
							onChange={handleChange}
							name="phone"
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							value={contact.address}
							className="form-control"
							placeholder="Enter address"
							onChange={handleChange}
							name="address"
						/>
					</div>
					<button
						type="button"
						className="btn btn-primary form-control"
						onClick={() => actions.updateContactList(contact)}>
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
EditContact.propTypes = {
	match: PropTypes.object
};
