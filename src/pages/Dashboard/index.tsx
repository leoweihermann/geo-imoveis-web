import React, { useState, useEffect } from 'react';
import {
  MdDirectionsCar,
  MdLocalHotel,
  MdStraighten,
  MdHotTub,
} from 'react-icons/md';
import { FiChevronLeft, FiPlus, FiInfo } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import {
  Container,
  NavBar,
  Content,
  InfoBox,
  Properties,
  Property,
  Informacoes,
  ImageContainer,
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

const Dashboard: React.FC = () => {
  const [properties, setProperties] = useState<IPropertiesResponse[]>([]);
  useEffect(() => {
    api.get('properties').then(response => {
      const property = response.data;
      setProperties(property);
    });
  }, []);
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

  return (
    <Container>
      <NavBar>
        <Link to="/">
          <FiChevronLeft size={41} />
        </Link>
        <img src={logoImg} alt="GeoImóveis" />
        <Link to="/create-property">
          <FiPlus size={41} />
        </Link>
      </NavBar>
      <Content>
        <InfoBox>
          <header>
            <FiInfo size={24} />
            <h1>Informações</h1>
          </header>
          <div>
            <label htmlFor="quantity">Imóveis cadastrados:</label>
            <p>{properties.length}</p>
          </div>
          <div>
            <label htmlFor="price">Preço médio dos imóveis:</label>
            <p>
              R$
              {properties.reduce(
                (soma: any, prop: any) => (soma += prop.price),
                0,
              ) / properties.length}
            </p>
            <section>
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <th>Bairro</th>
                    <th>Quantidade</th>
                  </tr>
                  <tr />
                  {neighborhoods.map(neighborhood => (
                    <tr key={neighborhood}>
                      <td>{neighborhood}</td>
                      <td style={{ textAlign: 'center' }}>
                        {
                          properties.filter(
                            property => property.neighborhood === neighborhood,
                          ).length
                        }
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
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
                <span>{property.description.substr(0, 250)}</span>
                <Informacoes>
                  <p>{`Valor locação: R$ ${property.price}`}</p>
                  <div>
                    <span>
                      <MdLocalHotel size={24} />
                      {property.bedrooms}
                    </span>
                    <span>
                      <MdHotTub size={24} />
                      {property.bathrooms}
                    </span>
                    <span>
                      <MdDirectionsCar size={24} />
                      {property.garages}
                    </span>
                    <span>
                      <MdStraighten size={24} />
                      {property.footage}
                    </span>
                  </div>
                </Informacoes>
              </section>
            </Property>
          ))}
        </Properties>
      </Content>
    </Container>
  );
};

export default Dashboard;
