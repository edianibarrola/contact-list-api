import React, { useState, useEffect, useContext } from "react";
import { GlobalState } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Searchbar = () => {
	const { store, actions } = useContext(GlobalState);

	const [searchInput, setSearchInput] = useState({
		currentInput: ""
	});
	const [filteredAgenda, setFilteredAgenda] = useState({
		filtered: []
	});

	const handleChange = e => {
		setSearchInput({ ...searchInput, [e.target.name]: e.target.value });
		setFilteredAgenda({
			filtered: store.agenda.filter(contact => {
				return contact.full_name.toLowerCase().includes(searchInput.currentInput.toLowerCase());
				console.log("CONTACT: " + contact);
			})
		});
	};

	return (
		<input
			type="text"
			name="currentInput"
			value={searchInput.currentInput}
			placeholder="Search for a contact"
			onChange={handleChange}></input>
		//map store.agenda , filter searchbarInput
		//setState of agenda with new filtered contact list
	);
};
