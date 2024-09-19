import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [houses, setHouses] = useState([
    {
      title: 'Chalet adosado en venta en calle Antonio Gamoneda s/n',
      address: 'Espartales, Alcalá de Henares',
      price: 378000,
      area: 117,
      rooms: 4,
      description: 'Chalets de 4 dormitorios con jardín posterior, posibilidad de piscina, y aparcamiento en superficie.',
      image: 'https://img4.idealista.com/blur/WEB_DETAIL_TOP-L-L/0/id.pro.es.image.master/a7/d5/a9/1240054337.jpg',
      link: 'https://www.idealista.com/inmueble/105045655/'
    },
    {
      title: 'Casa o chalet independiente en venta en Nuevo Aranjuez-Ciudad de las Artes',
      address: 'Aranjuez',
      price: 379000,
      area: 338,
      rooms: 4,
      description: 'Casa moderna en urbanización con garaje incluido, cerca de las artes y áreas recreativas.',
      image: 'https://img4.idealista.com/blur/WEB_DETAIL_TOP-L-L/0/id.pro.es.image.master/af/d0/7b/1250724501.jpg',
      link: 'https://www.idealista.com/inmueble/105393229/'
    },
    {
      title: 'Chalet adosado en venta en Madreselva',
      address: 'Pinosol - El Alcor - Peralejo, El Escorial',
      price: 305000,
      area: 137,
      rooms: 4,
      description: 'Chalet con jardín, en urbanización tranquila, cerca de San Lorenzo de El Escorial.',
      image: 'https://img4.idealista.com/blur/WEB_DETAIL-XL-L/0/id.pro.es.image.master/bb/b1/fa/796799129.jpg',
      link: 'https://www.idealista.com/inmueble/98440631/'
    },
    {
      title: 'Chalet adosado en venta en calle Calderón de La Barca',
      address: 'Colmenarejo',
      price: 365000,
      area: 245,
      rooms: 4,
      description: 'Chalet adosado con jardín y amplio espacio, ubicado en una tranquila zona de Colmenarejo.',
      image: 'https://img4.idealista.com/blur/WEB_DETAIL-XL-L/0/id.pro.es.image.master/02/59/7e/1258039551.jpg',
      link: 'https://www.idealista.com/inmueble/105623560/'
    },
    {
      title: 'Chalet adosado en venta en Velázquez',
      address: 'La Navata, Galapagar',
      price: 349900,
      area: 162,
      rooms: 4,
      description: 'Chalet adosado con garaje incluido, en una zona tranquila de Galapagar.',
      image: 'https://img4.idealista.com/blur/WEB_DETAIL_TOP-L-L/0/id.pro.es.image.master/01/5c/8f/1201216044.jpg',
      link: 'https://www.idealista.com/inmueble/103819406/'
    },
    {
      title: 'Chalet adosado en venta en calle Santa Clara',
      address: 'Abantos - Carmelitas, San Lorenzo de El Escorial',
      price: 345000,
      area: 160,
      rooms: 3,
      description: 'Chalet adosado con garaje incluido, en una zona tranquila de San Lorenzo de El Escorial.',
      image: 'https://img4.idealista.com/blur/WEB_DETAIL-XL-L/0/id.pro.es.image.master/0d/35/ac/1259504993.jpg',
      link: 'https://www.idealista.com/inmueble/105676349/foto/1'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState(''); // Estado para el término de búsqueda
  const [filteredHouses, setFilteredHouses] = useState(houses); // Estado para las casas filtradas

  // Efecto para actualizar la lista filtrada cuando cambia el término de búsqueda
  useEffect(() => {
    setFilteredHouses(
      houses.filter((house) =>
        house.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        house.address.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, houses]);

  return (
    <div className="App">
      {/* Contenedor para el icono y la barra de búsqueda */}
      <div className="search-container">
        <img src="https://doroshen.com/favicon.ico" alt="Icono" className="search-icon" />
        <input
          type="text"
          placeholder="Buscar por título o ubicación..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
      </div>

      <div className="houses-list">
        {filteredHouses.map((house, index) => (
          <HouseCard key={index} house={house} />
        ))}
      </div>
    </div>
  );
};

const HouseCard = ({ house }) => {
  return (
    <div className="house-card">
      <img src={house.image} alt="Casa" className="house-image" />
      <div className="house-info">
        {/* Título */}
        <h2>{house.title}</h2>

        {/* Detalles adicionales */}
        <p>{house.description}</p>
        <p><span className="emoji">📍</span><strong>Dirección:</strong> {house.address}</p>
        <p><span className="emoji">📐</span><strong>Superficie:</strong> {house.area} m²</p>
        <p><span className="emoji">🛏️</span><strong>Habitaciones:</strong> {house.rooms}</p>

        {/* Botón con el precio */}
        <a href={house.link} target="_blank" rel="noopener noreferrer" className="button">
          {house.price.toLocaleString('es-ES')} €
        </a>
      </div>
    </div>
  );
};

export default App;
