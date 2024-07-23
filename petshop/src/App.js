import React from 'react';
import './App.css';

const products = [
  { id: 1, name: 'Royal Canin', price: 200000, image: 'images/image1.jpg' },
  { id: 2, name: 'Whiskas', price: 7000, image: 'images/image2.jpeg' },
  { id: 3, name: 'Scabivar', price: 25000, image: 'images/image3.jpg' },
  { id: 4, name: 'Cat Litter', price: 50000, image: 'images/image4.jpg' },
  { id: 5, name: 'Shampo', price: 35000, image: 'images/image5.jpeg' },
  { id: 6, name: 'Pro Plan', price: 500000, image: 'images/image6.jpeg' },
  { id: 7, name: 'Kitty cat', price: 10000, image: 'images/image7.jpeg' },
  { id: 8, name: 'ME-O', price: 5000, image: 'images/image8.jpeg' }
];

const App = () => {
  const handleOrderClick = () => {
    window.location.href = 'https://wa.me/0895332780347';
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>PetShop</h1>
      </header>

      <section className="pet-expo">
        <div className="expo-content">
          
        </div>
        <div className="expo-image">
          {/* Add image of the pets here */}
        </div>
      </section>

      <section className="product-list">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.size}</p>
            <p>Rp {product.price}</p>
            <p>{product.size}</p>
            <button onClick={handleOrderClick}>Pesan</button>
          </div>
        ))}
      </section>

      <section className="brands">
        <h2>Principais Marcas</h2>
        <div className="brands-logos">
          {/* Add brand logos here */}
        </div>
      </section>

      <section className="testimonials">
        <h2>Our Testimonials</h2>
        <div className="testimonial">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Luies Charls (Web Designer)</p>
        </div>
        <div className="testimonial-image">
          {/* Add image of the dog here */}
        </div>
      </section>
    </div>
  );
}

export default App;





// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
