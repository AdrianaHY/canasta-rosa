class ProductService {

	async getProducts (slug) {
		const myInit = {
			method: 'GET',
			mode: 'cors',
			cache: 'default'
		};
		let URLProducts = `https://canastarosa.com/services/api/v1/market/products/?category_slug=${slug}`;
		const productsList = new Request(URLProducts, myInit);


	   return fetch(productsList)
		   .then((response) => {
			   return response.json();
		   })
		   .then((json) => {
			   return json;
		   })
   }
}

export default ProductService;

