import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';

import { Link, useHistory } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import api from '../../services/api';
import DropZone from '../../components/Dropzone';
import logoImg from '../../assets/logo.svg';

import { Container, InputContainer, NavBar, InputGroup } from './styles';

const Dashboard: React.FC = () => {
  const history = useHistory();

  const neighborhoods = [
    'São Bernardo',
    'São João',
    'Humaitá de Cima',
    'Humaitá Centro',
    'Vila Esperança',
    'Morrotes',
    'Dehon',
    'Revoredo',
    'Cruzeiro',
    'Fábio Silva',
    'Monte Castelo',
    'Oficinas',
    'Centro',
    'Santo Antônio de Pádua',
    'Vila Moema',
    'Recife',
    'Passagem',
    'Passo do gado',
    'Santa Luzia',
    'Praia Redonda',
    'São Clemente',
    'Campestre',
    'São Cristóvão',
  ];
  const types = ['Apartamento'];

  const [selectedFile, setSelectedFile] = useState<File>();
  const [selectedType, setSelectedType] = useState('0');
  const [selectedNeighborhood, setSelectedNeighborhood] = useState('0');

  const [formData, setFormData] = useState({
    description: '',
    bedrooms: '',
    bathrooms: '',
    garages: '',
    footage: '',
    price: '',
    city: '',
    uf: '',
    street: '',
    number: '',
  });
  const [selectedPosition, setSelectedPosition] = useState<[number, number]>([
    0,
    0,
  ]);

  function handleMapClick(event: LeafletMouseEvent) {
    setSelectedPosition([event.latlng.lat, event.latlng.lng]);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const {
      description,
      bedrooms,
      bathrooms,
      garages,
      footage,
      price,
      city,
      uf,
      street,
      number,
    } = formData;

    const type = selectedType;
    const neighborhood = selectedNeighborhood;
    const [latitude, longitude] = selectedPosition;

    const data = new FormData();
    data.append('description', description);
    data.append('bedrooms', bedrooms);
    data.append('bathrooms', bathrooms);
    data.append('garages', garages);
    data.append('footage', footage);
    data.append('price', price);
    data.append('street', street);
    data.append('number', number);
    data.append('type', type);
    data.append('neighborhood', neighborhood);
    data.append('uf', 'SC');
    data.append('city', 'Tubarao');
    data.append('latitude', String(latitude));
    data.append('longitude', String(longitude));
    if (selectedFile) data.append('image', selectedFile);
    await api.post('properties', data);
    alert('Imóvel criado!');
    history.push('/dashboard');
  }

  function handleSelectType(event: ChangeEvent<HTMLSelectElement>) {
    const type = event.target.value;
    setSelectedType(type);
  }

  function handleSelectNeighborhood(event: ChangeEvent<HTMLSelectElement>) {
    const neighborhood = event.target.value;
    setSelectedNeighborhood(neighborhood);
  }

  return (
    <Container>
      <NavBar>
        <Link to="/dashboard">
          <FiChevronLeft size={41} />
        </Link>
        <div>
          <img src={logoImg} alt="GeoImóveis" />
        </div>
      </NavBar>
      <form onSubmit={handleSubmit}>
        <h2>Detalhes</h2>
        <DropZone onFileUploaded={setSelectedFile} />
        <InputContainer>
          <label htmlFor="type">Tipo</label>
          <select name="type" id="type" onChange={handleSelectType}>
            <option value="0">Selecione um tipo</option>
            {types.map(type => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </InputContainer>
        <InputContainer>
          <label htmlFor="description">Descrição</label>
          <input
            type="text"
            name="description"
            id="description"
            onChange={handleInputChange}
          />
        </InputContainer>
        <InputGroup>
          <InputContainer>
            <label htmlFor="bedrooms">Quartos</label>
            <input
              type="number"
              name="bedrooms"
              id="bedrooms"
              onChange={handleInputChange}
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="bathrooms">Banheiros</label>
            <input
              type="number"
              name="bathrooms"
              id="bathrooms"
              onChange={handleInputChange}
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="garages">Garagens</label>
            <input
              type="number"
              name="garages"
              id="garages"
              onChange={handleInputChange}
            />
          </InputContainer>
        </InputGroup>
        <InputGroup>
          <InputContainer>
            <label htmlFor="footage">Metragem</label>
            <input
              type="text"
              name="footage"
              id="footage"
              onChange={handleInputChange}
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="price">Valor</label>
            <input
              type="text"
              name="price"
              id="price"
              onChange={handleInputChange}
            />
          </InputContainer>
        </InputGroup>
        <h2>Localização</h2>
        <InputGroup>
          <InputContainer>
            <label htmlFor="city">Cidade</label>
            <input
              type="text"
              name="city"
              id="city"
              value="Tubarão"
              disabled
              onChange={handleInputChange}
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="uf">Estado (UF)</label>
            <input
              type="text"
              name="uf"
              id="uf"
              value="SC"
              disabled
              onChange={handleInputChange}
            />
          </InputContainer>
        </InputGroup>
        <InputContainer>
          <label htmlFor="neighborhood">Bairro</label>
          <select
            name="neighborhood"
            id="neighborhood"
            onChange={handleSelectNeighborhood}
          >
            <option value="0">Selecione um bairro</option>
            {neighborhoods.map(neighborhood => (
              <option key={neighborhood} value={neighborhood}>
                {neighborhood}
              </option>
            ))}
          </select>
        </InputContainer>
        <InputContainer>
          <label htmlFor="street">Rua</label>
          <input
            type="text"
            name="street"
            id="street"
            onChange={handleInputChange}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="number">Número</label>
          <input
            type="text"
            name="number"
            id="number"
            onChange={handleInputChange}
          />
        </InputContainer>
        <Map
          center={[-28.47648, -49.016998]}
          zoom={12}
          onClick={handleMapClick}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={selectedPosition} />
        </Map>
        <button type="submit">Gravar</button>
      </form>
    </Container>
  );
};

export default Dashboard;
