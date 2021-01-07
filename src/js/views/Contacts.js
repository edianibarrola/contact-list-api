import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalState } from "../store/appContext";
import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";
import { Searchbar } from "../component/Searchbar";

export const Contacts = () => {
	const { store, actions } = useContext(GlobalState);
	const [state, setState] = useState({
		showModal: false,
		id: null,
		searchInput: ""
	});
	//set searchInput with value Function
	const setSearchInput = e => {
		setState({ ...state, searchInput: e.target.value });
	};

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>

					<Searchbar agenda={store.agenda} prop={setSearchInput} searchInput={state.searchInput} />
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.agenda
							? store.agenda.map((contact, index) => {
									console.log("CONTACT:::", contact);
									if (contact) {
										if (
											state.searchInput &&
											(contact.full_name.includes(state.searchInput) ||
												contact.address.includes(state.searchInput) ||
												contact.phone.includes(state.searchInput) ||
												contact.email.includes(state.searchInput))
										) {
											return (
												<ContactCard
													key={index}
													propContact={contact}
													onDelete={() => setState({ showModal: true, id: contact.id })}
												/>
											);
										} else if (state.searchInput == "") {
											return (
												<ContactCard
													key={index}
													propContact={contact}
													onDelete={() => setState({ showModal: true, id: contact.id })}
												/>
											);
										} else {
											return (
												<ContactCard
													key={index}
													propContact={contact}
													onDelete={() => setState({ showModal: true, id: contact.id })}
												/>
											);
										}
									}
							  })
							: "loading"}
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} id={state.id} onClose={() => setState({ showModal: false })} />
		</div>
	);
};
