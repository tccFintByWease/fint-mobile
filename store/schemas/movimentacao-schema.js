import * as yup from 'yup';
import { getTodayDate } from '../../utils/date-utils';

const movimentacaoSchema = yup.object({
    descricaoMovimentacao: yup.string()
        .required("Insira um título")
        .max(50, 'Limite de caracteres para o título atingido'),
    observacaoMovimentacao: yup.string()
        .max(100, "Limite de caracteres para a descrição"),
    dataMovimentacao: yup.date()
        .required('Insira uma data'),
    valorMovimentacao: yup.string()
        .required('Insira um valor')
});

export {
    movimentacaoSchema
}