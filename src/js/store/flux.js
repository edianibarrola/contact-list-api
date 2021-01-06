const getState = ({ getStore, setStore }) => {
	return {
		store: {
			agenda: null
			//Your data structures, A.K.A Entities
		},
		actions: {
			loadInitialData: () => {
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
			}
		}
	};
};

export default getState;
