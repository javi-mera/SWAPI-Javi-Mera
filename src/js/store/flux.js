const url = "https://swapi.dev/api/";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			details: {},
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			loadData: async (data, resource) => {
				const fullUrl = url.concat(data);
				var requestOptions = {
					method: "GET",
					redirect: "follow"
				};
				try {
					let res = await fetch(fullUrl, requestOptions);
					let result = await res.json();
					if (data == "people/") {
						setStore({ people: result.results });
					} else if (data == "planets/") {
						setStore({ planets: result.results });
					}
				} catch (error) {
					console.log("error", error);
				}
			},

			details: valores => {
				setStore({ details: valores });
			},

			addFavorites: name => {
				const prevFav = getStore().favorites;
				const newfavorite = { name: name };
				if (prevFav.length == 0) {
					setStore({ favorites: [...prevFav, newfavorite] });
				} else {
					console.log(
						prevFav.some(element => {
							element.name == name;
						})
					);

					//setStore({ favorites: updatefav });
				}

				//localStorage.setItem(prevFav, JSON.stringify(updatefav));
			},

			removeFav: element => {
				const eraseFav = getStore().favorites;
				const exampleFil = eraseFav.filter(favSel => {
					if (favSel != element) {
						return favSel;
					}
				});
				setStore({ favorites: exampleFil });
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const people = store.people.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ people: people });
			}
		}
	};
};

export default getState;
