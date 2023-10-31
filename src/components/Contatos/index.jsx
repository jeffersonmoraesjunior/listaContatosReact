import { ContStyle } from "./style";
import {BsTrash} from "react-icons/Bs";
import { BiEdit } from "react-icons/Bi"

const Contato = ({ contato, editarFormulario, deletarFormulario}) => {
    const {nome, telefone, temWhats, observacao}  = contato;
    return(
        <ContStyle>
        {/* <tr> */}
            <td>{nome}</td>
            <td>{telefone}</td>
            <td>{temWhats ? 'Sim' : 'Não'}</td>
            <td>{observacao}</td>
            <td><BiEdit type="button" onClick={() => {editarFormulario(contato)}}/></td>
            <td><BsTrash type="button" onClick={() => {deletarFormulario(telefone)}}/></td>
        {/* </tr> */}
        </ContStyle>
    );
};

export default Contato