import styled from 'styled-components';

export const DropzoneContainer = styled.div`
  height: 300px;
  background: #e1ebfa;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  outline: 0;
  margin-bottom: 32px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    width: calc(100% - 60px);
    height: calc(100% - 60px);
    border-radius: 10px;
    border: 1px dashed #4e63cb;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #333;
  }
  p svg {
    color: #4e63cb;
    width: 24px;
    height: 24px;
    margin-bottom: 8px;
  }
`;
