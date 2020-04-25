import React from "react";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Container, Form, LinkPage } from "./styles";
import heroesImg from "../../assets/heroesP.png";
import logo from "../../assets/heroesS.svg";

export default function Logon() {
  return (
    <>
      <Container>
        <section>
          <img src={logo} alt="Heroes logo" />

          <Form>
            <h1>Faça seu logon</h1>

            <input placeholder="Seu ID" />
            <button className="button" type="submit">
              Entrar
            </button>

            <LinkPage>
              <Link to="/register">
                <FiLogIn size={16} color="#E02041" />
                Não tenho cadastro
              </Link>
            </LinkPage>
          </Form>
        </section>

        <img src={heroesImg} alt="Heroes" />
      </Container>
    </>
  );
}
