import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  form {
    h2 {
      margin-bottom: 16px;
    }
    margin-top: 32px;
    width: 50%;
    background: #ffffff;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
    padding: 16px;
  }
  button {
    margin-top: 16px;
    margin-bottom: 16px;
    height: 56px;
    border: none;
    background-color: #80b94b;
    color: #ffffff;
    width: 100%;
  }
`;
export const InputGroup = styled.div`
  flex: 1;
  display: flex;
`;

export const NavBar = styled.header`
  padding: 0 8px;
  width: 100%;
  height: 62px;
  display: flex;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  div {
    flex: 1;
    display: flex;
    justify-content: center;
  }
  a {
    svg {
      color: #3e64c5;
    }
  }
`;

export const InputContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  margin-left: 10px;

  input {
    flex: 1;
    background: #f0f0f5;
    border-radius: 8px;
    border: 0;
    padding: 16px 24px;
    font-size: 16px;
    color: #6c6c80;
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    flex: 1;
    background: #f0f0f5;
    border-radius: 8px;
    border: 0;
    padding: 16px 24px;
    font-size: 16px;
    color: #6c6c80;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    flex: 1;
    background: #f0f0f5;
    border-radius: 8px;
    border: 0;
    padding: 16px 24px;
    font-size: 16px;
    color: #6c6c80;
  }
`;
