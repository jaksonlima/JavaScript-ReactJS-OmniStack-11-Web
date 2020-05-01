import React from "react";
import { Link } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";

import logoImg from "../../assets/heroesS.svg";
import { Container } from "./styles";

export default function Profiles(props) {
  return (
    <>
      <Container>
        <header>
          <img src={logoImg} alt="Be the Hero" />
          <span>Bem vinda, APAD</span>

          <Link className="button" to="/incident/new">
            Cadastrar novo caso
          </Link>

          <button>
            <FiPower size={18} color="#E02041" />
          </button>
        </header>

        <h1>Casos cadastrados</h1>

        <ul>
          <li>
            <strong>CASO:</strong>
            <p>Caso teste</p>

            <strong>DESCRIÇAO:</strong>
            <p>Descrição teste</p>

            <strong>VALOR:</strong>
            <p>R$ 120,00</p>

            <button type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
          <li>
            <strong>CASO:</strong>
            <p>Caso teste</p>

            <strong>DESCRIÇAO:</strong>
            <p>Descrição teste</p>

            <strong>VALOR:</strong>
            <p>R$ 120,00</p>

            <button type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
          <li>
            <strong>CASO:</strong>
            <p>Caso teste</p>

            <strong>DESCRIÇAO:</strong>
            <p>Descrição teste</p>

            <strong>VALOR:</strong>
            <p>R$ 120,00</p>

            <button type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
          <li>
            <strong>CASO:</strong>
            <p>Caso teste</p>

            <strong>DESCRIÇAO:</strong>
            <p>Descrição teste</p>

            <strong>VALOR:</strong>
            <p>R$ 120,00</p>

            <button type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        </ul>
      </Container>
    </>
  );
}
