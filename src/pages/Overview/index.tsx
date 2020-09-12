import React, { useEffect, useState } from 'react';
import { Map, TileLayer, Marker, GeoJSON } from 'react-leaflet';
import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';
import {
  MdDirectionsCar,
  MdLocalHotel,
  MdStraighten,
  MdHotTub,
} from 'react-icons/md';
import api from '../../services/api';
import TubaraoNeighborhoods from '../../geoNeighborhoods/TubaraoNeighborhoods';
import {
  Container,
  Menu,
  Properties,
  Property,
  ImageContainer,
  Informacoes,
  InfoBox,
  Legend,
} from './styles';
import logoImg from '../../assets/logo.svg';

interface IPropertiesResponse {
  id: string;
  image: string;
  type: string;
  description: string;
  city: string;
  uf: string;
  neighborhood: string;
  street: string;
  number: number;
  bedrooms: number;
  bathrooms: number;
  garages: number;
  footage: number;
  price: number;
  latitude: number;
  longitude: number;
  image_url: string;
}

const Overview: React.FC = () => {
  const [propertiesMarkers, setPropertiesMarkers] = useState<
    IPropertiesResponse[]
  >([]);
  const [properties, setProperties] = useState<IPropertiesResponse[]>([]);
  const [neighborhoodState, setNeighborhoodState] = useState('Tubarão / SC');
  const [numberOfProperties, setNumberOfProperties] = useState(0);
  const [averagePrice, setAveragePrice] = useState(0);

  useEffect(() => {
    api.get('properties').then(response => {
      const property = response.data;
      const media =
        property.reduce((soma: any, prop: any) => (soma += prop.price), 0) /
        property.length;
      setProperties(property);
      setPropertiesMarkers(property);
      setNumberOfProperties(property.length);
      setAveragePrice(media);
    });
  }, []);

  function handleNeighborhood(e: any) {
    const { layer } = e;
    const neighborhood = layer.feature.properties.id;
    const filteredProperties = propertiesMarkers.filter(
      property => property.neighborhood === neighborhood,
    );
    const media =
      filteredProperties.reduce((soma, prop) => (soma += prop.price), 0) /
      filteredProperties.length;

    setNeighborhoodState(neighborhood);
    setNumberOfProperties(filteredProperties.length);
    setAveragePrice(media);
    setProperties(filteredProperties);
  }

  function stylef(feature: any) {
    const mediaPreco = feature.properties.mediapreco;

    TubaraoNeighborhoods.features.map(feature => {
      const neighborhood = feature.properties!.id;
      const filteredProperties = propertiesMarkers.filter(
        (prop: any) => prop.neighborhood === neighborhood,
      );
      const media =
        filteredProperties.reduce((soma, prop) => (soma += prop.price), 0) /
        filteredProperties.length;
      feature.properties = {
        ...feature.properties,
        mediapreco: media,
      };
    });

    const colors = ['#a8a8a8', '#2d9220', '#c8ca44', '#d25656'];
    let cor = '';
    if (mediaPreco === 0) cor = colors[0];
    if (mediaPreco > 0 && mediaPreco < 699) cor = colors[1];
    if (mediaPreco > 700 && mediaPreco < 1499) cor = colors[2];
    if (mediaPreco > 1500) cor = colors[3];

    return {
      fillColor: cor,
      fillOpacity: 0.5,
      weight: 2,
      color: '#555555',
    };
  }

  return (
    <>
      <Map center={[-28.47648, -49.016998]} zoom={12}>
        <GeoJSON
          data={TubaraoNeighborhoods}
          onclick={handleNeighborhood}
          style={stylef}
        />
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {propertiesMarkers.map(property => (
          <Marker
            key={property.id}
            position={[property.latitude, property.longitude]}
          />
        ))}
      </Map>
      <Container>
        <Menu>
          <img src={logoImg} alt="GeoImóveis" />
          <InfoBox>
            <h1>{neighborhoodState}</h1>
            <div>
              <label htmlFor="quantity">Quantidade Imóveis:</label>
              <p>{numberOfProperties}</p>
            </div>
            <div>
              <label htmlFor="averagePrice">Preço médio: </label>
              <p>{`R$ ${averagePrice}`}</p>
            </div>
          </InfoBox>
          <Properties>
            {properties.map(property => (
              <Property key={property.id}>
                <ImageContainer>
                  <img src={property.image_url} alt="Imóvel" />
                </ImageContainer>
                <section>
                  <h2>{property.type}</h2>
                  <p>{`${property.neighborhood}, Tubarão - SC`}</p>
                  <Informacoes>
                    <p>{`Valor locação: R$ ${property.price}`}</p>
                    <div>
                      <span>
                        <MdLocalHotel size={16} />
                        {property.bedrooms}
                      </span>
                      <span>
                        <MdHotTub size={16} />
                        {property.bathrooms}
                      </span>
                      <span>
                        <MdDirectionsCar size={16} />
                        {property.garages}
                      </span>
                      <span>
                        <MdStraighten size={16} />
                        {property.footage}
                      </span>
                    </div>
                  </Informacoes>
                </section>
              </Property>
            ))}
          </Properties>
        </Menu>
        <Link to="/dashboard">
          <FiHome size={24} />
        </Link>
        <Legend>
          <h1>Legenda:</h1>
          <div>
            <div>
              <span style={{ backgroundColor: '#2d9220' }} />
              <p>
                R$ 1,00 até
                <br />
                R$ 699,00
              </p>
            </div>
            <div>
              <span style={{ backgroundColor: '#c8ca44' }} />
              <p>
                R$ 700,00 até
                <br />
                R$ 1.499,00
              </p>
            </div>
            <div>
              <span style={{ backgroundColor: '#d25656' }} />
              <p>
                Maior que
                <br />
                R$ 1.500,000
              </p>
            </div>
            <div>
              <span style={{ backgroundColor: '#a8a8a8' }} />
              <p>
                Sem
                <br />
                Imóveis
              </p>
            </div>
          </div>
        </Legend>
      </Container>
    </>
  );
};

export default Overview;
