import styled from 'styled-components';

export const Menu = styled.nav`
  background-color: #fff;
  width: 25%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99999;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  padding: 8px;
`;

export const Container = styled.div`
  a {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: absolute;
    z-index: 9999;
    bottom: 32px;
    right: 16px;
    background: #ffffff;
    border: none;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    justify-content: center;
    display: flex;
    align-items: center;
    svg {
      color: #3e64c5;
    }
  }
`;

export const HomeButton = styled.button``;

export const Properties = styled.section`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  margin-top: 8px;
  width: 100%;
  flex: 1;
  align-items: center;
  display: flex;
  height: 100%;
  padding: 0px 3px 3px;
`;

export const Property = styled.div`
  margin-bottom: 16px;
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

export const Informacoes = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  div {
    span {
      svg {
        margin-right: 2px;
      }
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

export const InfoBox = styled.div`
  margin-top: 50px;
  width: 100%;
  height: 150px;
  h1 {
    margin-bottom: 16px;
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

export const Legend = styled.div`
  width: 30%;
  position: absolute;
  z-index: 9999;
  height: 75px;
  background-color: #fff;
  left: 40%;
  bottom: 0;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  h1 {
    margin: 8px;
    font-size: 12px;
  }
  div {
    display: flex;
    justify-content: space-around;

    span {
      width: 12px;
      height: 25px;
      background-color: blue;
      margin-left: 6px;
    }
    p {
      font-size: 12px;
      margin-left: 2px;
    }
  }
`;
