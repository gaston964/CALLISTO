
import './CompraCards.css'; // Asegúrate de tener un archivo CSS correspondiente

function CompraCards() {
    // Puedes crear un arreglo de objetos para representar los productos o servicios
    const products = [
        {
            id: 1,
            title: 'Producto 1',
            description: 'Descripción del Producto 1',
            price: '$10.00',
            image: '../src/assets/calisto.jpeg',
        },
        {
            id: 2,
            title: 'Producto 2',
            description: 'Descripción del Producto 2',
            price: '$15.00',
            image: '../src/assets/calisto.jpeg',
        },
        {
            id: 3,
            title: 'Producto 3',
            description: 'Descripción del Producto 3',
            price: '$20.00',
            image: '../src/assets/calisto.jpeg',
        },
        {
            id: 4,
            title: 'Producto 4',
            description: 'Descripción del Producto 4',
            price: '$25.00',
            image: '../src/assets/calisto.jpeg',
        },
    ];

    return (
        <div className="compra-cards">
            {products.map((product) => (
                <div key={product.id} className="compra-card">
                    <img src={product.image}/>
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <p>Precio: {product.price}</p>
                    <button>Comprar</button>
                </div>
            ))}
        </div>
    );
}

export default CompraCards;
