const getState = ({ getStore, setStore }) => {
	return {
		store: {
			agenda: null,
			getURL: "https://3000-b4fddd71-b34f-4f7c-b081-b223b4f2ea57.ws-us03.gitpod.io/contacts"
			//Your data structures, A.K.A Entities
		},

		actions: {
			loadInitialData: () => {
				fetch(getStore().getURL)
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(jsonifiedResponse => setStore({ agenda: jsonifiedResponse }))
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},

			updateContactList: data => {
				fetch("https://assets.breatheco.de/apis/fake/contact/" + data.id, {
					method: "PUT", // or 'POST'
					body: JSON.stringify({
						full_name: data.name,
						email: data.email,
						agenda_slug: "Edian",
						address: data.address,
						phone: data.phone
					}), // data can be `string` or {object}!
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(jsonifiedResponse => {
						console.log(jsonifiedResponse);

						fetch("https://assets.breatheco.de/apis/fake/contact/agenda/Edian")
							.then(function(response) {
								if (!response.ok) {
									throw Error(response.statusText);
								}
								return response.json();
							})
							.then(jsonifiedResponse => setStore({ agenda: jsonifiedResponse }))
							.catch(function(error) {
								console.log("Looks like there was a problem: \n", error);
							});
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},
			addNewContact: data => {
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST", // or 'POST'
					body: JSON.stringify({
						full_name: data.name,
						email: data.email,
						agenda_slug: "Edian",
						address: data.address,
						phone: data.phone
					}), // data can be `string` or {object}!
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(jsonifiedResponse => {
						console.log(jsonifiedResponse);

						fetch("https://assets.breatheco.de/apis/fake/contact/agenda/Edian")
							.then(function(response) {
								if (!response.ok) {
									throw Error(response.statusText);
								}
								return response.json();
							})
							.then(jsonifiedResponse => setStore({ agenda: jsonifiedResponse }))
							.catch(function(error) {
								console.log("Looks like there was a problem: \n", error);
							});
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},
			removeContact: id => {
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "DELETE"
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(jsonifiedResponse => {
						console.log(jsonifiedResponse);
						fetch("https://assets.breatheco.de/apis/fake/contact/agenda/Edian")
							.then(function(response) {
								if (!response.ok) {
									throw Error(response.statusText);
								}
								return response.json();
							})
							.then(jsonifiedResponse => setStore({ agenda: jsonifiedResponse }))
							.catch(function(error) {
								console.log("Looks like there was a problem: \n", error);
							});
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			}
		}
	};
};

export default getState;
