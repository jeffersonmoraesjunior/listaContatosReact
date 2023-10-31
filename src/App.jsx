import React , {useState} from "react";
import Contato from "./components/contatos";
import { Appstyled } from "./App";
import Headers from "./components/header";

export default function App() {
const [listaContatos, setListaContatos] = useState([])
const [id, setId] = useState(0);
const [nome , setNome] = useState('')
const [telefone, setTelefone] = useState('');
const [temWhats, setTemWhats] = useState(false);
const [observacao, setObservacao] = useState('');

const trocaId = (e) => {
  setId(id + 1);
}
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
    id: id,
    nome: nome,
    telefone: telefone,
    temWhats: temWhats,
    observacao: observacao
    
  }
  setListaContatos([...listaContatos , novoContato]);
  limparFormulario();
}

const editarFormulario = ({id,nome,telefone,temWhats,observacao} ) => {
  setNome(nome);
  setTelefone(telefone);
  setTemWhats(temWhats);
  setObservacao(observacao);

  deletarFormulario(id);
}

const deletarFormulario = (id) => {
  setListaContatos(listaContatos.filter((contato) => contato.id!== id));
}

  return (
    <>
    <Headers/>
    <Appstyled>
  <div className="painel">
    <div>
      
    <h1> Adicionar Contatos </h1>
      <hr />
      <form onSubmit={adicionarContato} onReset={limparFormulario} onClick={trocaId}>
        <div>
          <label className="label" htmlFor="nome">Nome: </label>
          <input type="text" placeholder="Ex.: Jefferson" id="nome" 
            onChange={trocaNome} value={nome} required />
        </div>
        <div>
          <label className="label" htmlFor="telefone">Telefone: </label>
          <input type="number" placeholder="(99) 99999-9999" id="telefone" maxLength={11} minLength={11}
             onChange={trocaTelefone} value={telefone} required/>
        </div>
        <div>
          <label className="label" htmlFor="whatsapp">Possui WhatsApp?</label>
          <input type="checkbox" id="whatsApp" onChange={trocaTemwhats} checked={temWhats} />
        </div>
        <div>
          <label className="label" htmlFor="observacoes">Observações: </label>
          <input type="text" id="observacao" maxLength="100" onChange={trocaObservacao} value={observacao} required/>
        </div>
        <div>
          <input type="submit" id="botao-criar" value="Salvar" />
          <input type="reset" id="botao-limpar" value="Limpar" onClick={limparFormulario} required />
        </div>
      </form>

      <hr />
      <h1> Lista de Contatos </h1>
      
      <table>
        <thead>
          <tr>
          <th>Id</th>
            <th>Nome</th>
            <th>Telefone</th>
            <th>WhatsApp</th>
            <th>Observações</th>          
            <th>Editar</th>          
            <th>Deletar</th>          
          </tr>
        </thead>
        <tbody>
          {listaContatos.map(contato => <Contato key={contato.id}  contato={contato} editarFormulario={editarFormulario} deletarFormulario={deletarFormulario}/>)}
        </tbody>
      </table> 

      </div> 
    </div>
  
  </Appstyled>
  </>
  )
}


