
class ProductService{

	async getProducts(slug) {
		let URLProducts = `https://canastarosa.com/services/api/v1/market/products/?category_slug=${slug}`;
	
		const myInit = {
			method: 'GET',
			mode: 'cors',
			cache: 'default'
		};
	
		const productsList = new Request(URLProducts, myInit);
	
		return fetch(productsList)
			.then(response => {
				console.log("uno");
				return response.json();
			})
			.then(json => {
				console.log("dos");
				return json;
			});
	}
}

export default ProductService;



