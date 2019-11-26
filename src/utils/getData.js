
export const getProducts = async (slug) => {
	let URLProducts = `https://canastarosa.com/services/api/v1/market/products/?category_slug=${slug}`;

	const myInit = {
		method: 'GET',
		mode: 'cors',
		cache: 'default'
	};

	const productsList = new Request(URLProducts, myInit);

	fetch(productsList)
		.then((response) => {
			return response.json();
		})
		.then((products) => {
			console.log('products', products)
			return products;
		})
};

