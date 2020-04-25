import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  section {
    width: 100%;
    max-width: 350px;
    margin-right: 30px;
  }
`;

export const Form = styled.form`
  margin-top: 100px;

  h1 {
    font-size: 32px;
    margin-bottom: 32px;
  }

  input {
    font-size: 18px;
  }
`;

export const LinkPage = styled.div`
  a {
    display: flex;
    align-items: center;
    margin-top: 40px;
    color: #41414d;
    font-size: 18px;
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.2s;
  }

  a:hover {
    opacity: 0.8;
  }

  svg {
    margin-right: 8px;
  }
`;
