import axios from 'axios';

// create an object literal to render products dynamically
const HomeScreen = {
    render: async () => {
        // const { products } = data;
        //define ajax request
        const response = await axios ({
            url: 'http://localhost:5000/api/products',
        })
        
        if (!response || response.statusText !== 'OK') {
            return `<div>Error in getting data</div>`
        }
        const products = response.data;

        return `
        <ul class="products">
            ${products.map( product => `
                <li>
                    <div class="product">
                        <a href="/#/product/${product._id}">
                            <img src="${product.image}" alt="${product.name}" />
                        </a>
                        <div class="product-name">
                            <a href="/#/product/1">
                                ${product.name}
                            </a>
                        </div>
                        <div class="product-brand">
                            ${product.brand}
                        </div>
                        <div class="product-price">
                            $${product.price}
                        </div>
                    </div>
                </li>
                `).join('\n')
            }
        `;
    },
};

export default HomeScreen