import {useState} from "react"
import Contato from "./components/Contatos";

export default function App() {
const [listaContatos, setListaContatos] = useState([])
const [nome , setNome] = useState('')
const [telefone, setTelefone] = useState('');
const [temwhats, setTemwhats] = useState(false);
const [observacao, setObservacao] = useState('');

const trocaNome = (e) =>{
  setNome(e.target.value);
}
const trocaTelefone = (e) =>{
  setTelefone(e.target.value);
}
const trocaTemwhats = (e) =>{
  setTemwhats(e.target.checked);
}
const trocaObservacao = (e) =>{
  setObservacao(e.target.value);
}

const limparFormulario = () =>{
  setNome('');
  setTelefone('');
  setTemwhats(false);
  setObservacao('');
}

const adicionarContato = (e) => {
  e.preventDefault();
  const novoContato = {
    nome: nome,
    telefone: telefone,
    temwhats: temwhats,
    observacao: observacao
  }
  setListaContatos([...listaContatos , novoContato])
  limparFormulario();
}

const editarFormulario = ({nome,telefone,temwhats,observacao} ) => {
  setNome(nome);
  setTelefone(telefone);
  setTemwhats(temwhats);
  setObservacao(observacao);

  deletarFormulario(telefone);
}

const deletarFormulario = (telefone) => {
  setListaContatos(listaContatos.filter((contato) => contato.telefone!== telefone));
}
  return (
    <>
      <h1> Adicionar Contatos </h1>
      <hr />
      <form onSubmit={adicionarContato}>
        <div>
          <label className="label" htmlFor="nome">Nome: </label>
          <input type="text" placeholder="Ex.: Jefferson" id="nome" required maxLength="50" 
            onChange={trocaNome} value={nome} />
        </div>
        <div>
          <label className="label" htmlFor="telefone">Telefone: </label>
          <input type="number" placeholder="(99) 99999-9999" id="telefone" required minLength="11"
            maxLength="11" onChange={trocaTelefone} value={telefone} />
        </div>
        <div>
          <label className="label" htmlFor="whatsapp">Possui WhatsApp?</label>
          <input type="checkbox" id="whatsApp" onChange={trocaTemwhats} checked={temwhats} />
        </div>
        <div>
          <label className="label" htmlFor="observacoes">Observações: </label>
          <input type="text" id="observacao" maxLength="100" onChange={trocaObservacao} value={observacao} />
        </div>
        <div>
          <input type="submit" id="botao-criar" value="Salvar" onClick={adicionarContato}/>
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
          </tr>
        </thead>
        <tbody>
          {listaContatos.map(contato => <Contato key={telefone} contato={contato} editarFormulario={editarFormulario} deletarFormulario={deletarFormulario}/>)}
        </tbody>
      </table> 

    </>
  )
}