import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  flex-direction: column;
`;

export const Content = styled.div`
  margin: 32px;
  height: 85vh;
  display: flex;
`;

export const Properties = styled.div`
  margin-left: 32px;
  overflow-y: scroll;
  flex: 1;
  flex-direction: column;
  align-items: center;
  display: flex;
  height: 100%;
  padding: 0px 10px 10px;
`;

export const InfoBox = styled.div`
  width: 25%;
  height: 100%;
  background: #ffffff;
  padding: 8px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
    svg {
      margin-right: 8px;
    }
  }

  section {
    font-size: 16px;
    margin-top: 16px;
    li {
      margin-bottom: 2px;
    }

    table {
      width: 100%;
      height: 100%;
    }
    table,
    th,
    td {
      border: 1px solid #ddd;
      border-collapse: collapse;
    }
    th,
    td {
      padding-bottom: 5px;
    }
  }
  div {
    margin-top: 8px;
    label {
      font-size: 14px;
      font-weight: bold;
      color: #3e64c5;
    }
    p {
      margin-left: 5px;
    }
  }
`;

export const NavBar = styled.header`
  padding: 0 8px;
  width: 100%;
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  a {
    svg {
      color: #3e64c5;
    }
  }
`;

export const Informacoes = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    span {
      margin-left: 8px;
    }
  }
`;

export const ImageContainer = styled.div`
  height: 100%;
  width: 25%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Property = styled.div`
  margin-bottom: 32px;
  width: 99%;
  height: 166px;
  background: #ffffff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  flex-shrink: 0;
  margin-top: 2px;
  display: flex;
  section {
    flex: 1;
    margin: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    span {
      color: #9e9e9e;
    }
  }
`;
