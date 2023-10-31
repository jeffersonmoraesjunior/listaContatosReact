/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const Contato = ({ contato, editarFormulario, deletarFormulario}) => {
    const {nome, telefone, temwhats, observacao}  = contato;
    return(
        <tr>            
            <td>{nome}</td>
            <td>{telefone}</td>
            <td>{temwhats ? 'Sim' : 'Não'}</td>
            <td>{observacao}</td>
            <td><button type="button" onClick={() => {editarFormulario(contato)}}>Editar</button></td>
            <td><button type="button" onClick={() => {deletarFormulario(telefone)}}>Deletar</button></td>
        </tr>
    );
};

export default Contato;