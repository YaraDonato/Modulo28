import { useState, useEffect } from "react";

import "./Form.css"

// Inicio Consts
const Formulario = () => {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");

  const [alturaNum, setAlturaNum] = useState(0);
  const [pesoNum, setPesoNum] = useState(0);

  const [resultado, setResultado] = useState(0);

  const [mostraResultado, setMostraResultado] = useState(false);
  const [mensagemPesoIf, setMensagemPesoIf] = useState("");

  //Fim Consts

  //Inicio Funções

  function Funcao() {
    setMostraResultado(true);
    Calculo();
  }

  function Debug() {
    console.log(mensagemPesoIf);
  }

  function Calculo() {
    console.log("entrou no calculo");

    console.log(`peso ${pesoNum} altura ${alturaNum}`);

    setResultado(pesoNum / (alturaNum * alturaNum));
  }

  function DefinirmensagemPeso(padroes) {
    if (padroes < 16.9) {
      setMensagemPesoIf("muito abaixo do peso");
    } else if (padroes > 17 && padroes < 18.4) {
      setMensagemPesoIf("abaixo do peso");
    } else if (padroes > 18.5 && padroes < 24.9) {
      setMensagemPesoIf("com peso normal");
    } else if (padroes > 25 && padroes < 29.9) {
      setMensagemPesoIf("acima do peso");
    } else if (padroes > 30 && padroes < 34.9){
      setMensagemPesoIf("com obesidade grau I");
    } else if (padroes > 35 && padroes < 40) {
        setMensagemPesoIf("com obesidade grau II");
    } else{
        setMensagemPesoIf("com obesidade grau III");
    }
  }

  // Fim Funções

  //Inicio codigo

  useEffect(() => {
    setAlturaNum(parseFloat(altura) / 100);
    setPesoNum(parseFloat(peso));
  }, [peso, altura]);

  useEffect(() => {
    DefinirmensagemPeso(resultado.toFixed(2));
  }, [resultado]);

  return (
    <div className="container-formulario">
      <form className="formulario">
     

        <h1>Formulario IMC</h1>
        <input
          className="inputTabela"
          type="number"
          placeholder="Altura (ex: 170)"
          onChange={(e) => setAltura(e.target.value)}
        />
        <input
          className="inputTabela"
          type="number"
          placeholder="Peso (ex: 35)"
          onChange={(e) => setPeso(e.target.value)}
        />
        <p className="botao" onClick={Funcao}>
          Ver resultado
        </p>
        {mostraResultado ? (
            <>
          <p className="ParagrafoResultado">
            Você está com IMC: {resultado.toFixed(2)}
          </p>
          <p className="ParagrafoResultado">
          E de acordo com a tabela está {mensagemPesoIf}
          </p>
          </>
        ):
        <>
        <p className="ParagrafoResultado opacity0">
          Você está com IMC: {resultado.toFixed(2)}
        </p>
        <p className="ParagrafoResultado opacity0">
        E de acordo com a tabela está {mensagemPesoIf}
        </p>
        </>
        }
      </form>
    </div>
  );
};
export default Formulario;
