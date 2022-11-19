import * as yup from 'yup';
import { getTodayDate } from '../../utils/date-utils';

const simulationSchema = yup.object({
    /* descricaoSimulacao: yup.string()
        .required("Insira um título")
        .max(50, 'Limite de caracteres para o título atingido'), */
    dataFinalSimulacao: yup.date()
        .required('Insira uma data'),
    valorInicialSimulacao: yup.number()
        .required('Insira um valor')
        .typeError('Amount must be a number'),
    taxaCorretagemSimulacao: yup.number()
        .required('Insira um valor')
        .typeError('Amount must be a number'),
});

export {
    simulationSchema
}
