import React, { useRef } from "react";
import { Form } from "@unform/web";
import * as Yup from "yup";

import Input from "./InputProdutos";
import "./Cdproduto.css";
import Topbar from "../../componentes/topbar/Topbar";

export default function CdProduto() {
  const formRef = useRef(null);

  async function ProdSubmit(data) {
    try {
      const schema = Yup.object().shape({
        produto: Yup.string().required("Nome do Produto Obrigatório"),
      });

      await schema.validate(data, { abortEarly: false });
      formRef.current.setErros({});
    } catch (err) {
      const validadtionsErros = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validadtionsErros[error.path] = error.message;
        });
        formRef.current.setErros(validadtionsErros);
      }
    }
  }

  return (
    <>
      <Topbar />
      <div className="teste">
        <h1>Cadastro Produtos</h1>

        <Form ref={formRef} onSubmit={ProdSubmit}>
          <Input
            name="produto"
            placeholder="Nome do Produto"
            className="nomeprod"
          />
          <Input
            name="ProdutoNF"
            placeholder="Nome do Produto na NF"
            className="prodNf"
          />

          <button name="buttonenv" type="submit">
            Enviar
          </button>
        </Form>
      </div>
    </>
  );
}
