import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import logo from "../../assets/heroesS.svg";
import { Contanier, ImageLink, Form, ScapContanier } from "./styles";

export default function Register() {
  return (
    <>
      <Contanier>
        <ScapContanier>
          <section>
            <img src={logo} alt="Be The Hero" />
            <h1>Cadastrar novo caso</h1>
            <p>
              Descreva o caso detalhadamente para encontrar um herói para
              resolver isso.
            </p>
            <ImageLink>
              <Link to="/profile">
                <FiArrowLeft size={16} color="#E02041" />
                Voltar para home
              </Link>
            </ImageLink>
          </section>
          <Form>
            <input placeholder="Titulo do caso" />
            <textarea placeholder="Descrição" />
            <input placeholder="Valor em reais" />
            <button className="button">Cadastrar</button>
          </Form>
        </ScapContanier>
      </Contanier>
    </>
  );
}
