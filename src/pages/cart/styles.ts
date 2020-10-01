import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;
  margin: 50px auto;
  background: #fff;

  padding-bottom: 20px;
  border-radius: 10px;

  form {
    display: flex;
    margin-top: 10px;
    padding: 10px 30px;
    button {
      flex: 1;
      height: 40px;
      background: #0275d8;
      color: #fff;
      font-weight: 700;
      border: 0;
      border-radius: 8px;
    }
  }

  h1 {
    color: #000;
    border-bottom: 1px solid #000;
    text-align: center;
    padding: 10px 0;

    font-size: 25px;
  }
`;

export const CartList = styled.div`
  margin-top: 10px;
  padding: 10px 30px;
`;

export const CartItem = styled.div`
  display: flex;

  & + div {
    margin-top: 30px;
  }

  img {
    width: 100px;
    height: 100px;
    border: 1px solid #000;
  }
  div.info-item {
    display: flex;
    margin-left: 20px;
    flex-direction: column;
  }

  span {
    color: #ccc;
    font-size: 13px;
    margin-bottom: 5px;
  }
`;

export const CartTotal = styled.div`
  padding: 20px 30px;
  margin-top: 10px;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;

  div.totalCart {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  span {
    margin-top: 10px;
    display: block;
    background: #adfbad;
    text-align: center;
    color: #006400;
    border-radius: 16px;
    padding: 10px;
  }
`;
