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
            <h1>Cadastro</h1>
            <p>
              Faça seu cadastro, entre na plataforma e ajude pessoas a
              encontrarem os casos da sua ONG.
            </p>
            <ImageLink>
              <Link to="/">
                <FiArrowLeft size={16} color="#E02041" />
                Já tenho cadastro
              </Link>
            </ImageLink>
          </section>
          <Form>
            <input type="text" placeholder="Nome da ONG" />
            <input type="email" placeholder="E-mail" />
            <input placeholder="WhatsApp" />

            <div>
              <input placeholder="Cidade" />
              <input placeholder="UF" style={{ width: 80 }} />
            </div>

            <button className="button">Cadastrar</button>
          </Form>
        </ScapContanier>
      </Contanier>
    </>
  );
}
