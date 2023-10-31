import React , {useState} from "react";
import Contato from "./components/contatos";
import { Appstyled } from "./App";
import Headers from "./components/header";




export default function App() {
const [listaContatos, setListaContatos] = useState([])
const [nome , setNome] = useState('')
const [telefone, setTelefone] = useState('');
const [temWhats, setTemWhats] = useState(false);
const [observacao, setObservacao] = useState('');


const trocaNome = (e) =>{
  setNome(e.target.value);
}
const trocaTelefone = (e) =>{
  setTelefone(e.target.value);
}
const trocaTemwhats = (e) =>{
  setTemWhats(e.target.checked);
}
const trocaObservacao = (e) =>{
  setObservacao(e.target.value);
}
const limparFormulario = () =>{
  setNome('');
  setTelefone('');
  setTemWhats(false);
  setObservacao('');
}

const adicionarContato = (e) => {
  e.preventDefault();
  const novoContato = {
    nome: nome,
    telefone: telefone,
    temWhats: temWhats,
    observacao: observacao
    
  }
  setListaContatos([...listaContatos , novoContato])
  limparFormulario();
}

const editarFormulario = ({nome,telefone,temWhats,observacao} ) => {
  setNome(nome);
  setTelefone(telefone);
  setTemWhats(temWhats);
  setObservacao(observacao);

  deletarFormulario(telefone);
}

const deletarFormulario = (telefone) => {
  setListaContatos(listaContatos.filter((contato) => contato.telefone!== telefone));
}

  return (
    <>
    <Headers/>
    <Appstyled>
  <div className="painel">
    <div>
      
    <h1> Adicionar Contatos </h1>
      <hr />
      <form onSubmit={adicionarContato} onReset={limparFormulario}>
        <div>
          <label className="label" htmlFor="nome">Nome: </label>
          <input type="text" placeholder="Ex.: Jefferson" id="nome" 
            onChange={trocaNome} value={nome}  />
        </div>
        <div>
          <label className="label" htmlFor="telefone">Telefone: </label>
          <input type="text" placeholder="(99) 99999-9999" id="telefone" 
             onChange={trocaTelefone} value={telefone} />
        </div>
        <div>
          <label className="label" htmlFor="whatsapp">Possui WhatsApp?</label>
          <input type="checkbox" id="whatsApp" onChange={trocaTemwhats} checked={temWhats} />
        </div>
        <div>
          <label className="label" htmlFor="observacoes">Observações: </label>
          <input type="text" id="observacao" maxLength="100" onChange={trocaObservacao} value={observacao} />
        </div>
        <div>
          <input type="submit" id="botao-criar" value="Salvar" onClick={adicionarContato} />
          <input type="reset" id="botao-limpar" value="Limpar" onClick={limparFormulario} />    
        </div>
      </form>

      <hr />
      <h1> Lista de Contatos </h1>
      
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Telefone</th>
            <th>WhatsApp</th>
            <th>Observações</th>          
            <th>Editar</th>          
            <th>Deletar</th>          
          </tr>
        </thead>
        <tbody>
          {listaContatos.map(contato => <Contato  contato={contato} editarFormulario={editarFormulario} deletarFormulario={deletarFormulario}/>)}
        </tbody>
      </table> 

      </div> 
    </div>
  
  </Appstyled>
  </>
  )
}


