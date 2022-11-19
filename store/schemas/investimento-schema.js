import * as yup from 'yup';
import { getTodayDate } from '../../utils/date-utils';

const investimentoSchema = yup.object({
    dataInicial: yup.date()
        .required('Insira uma data'),

    dataFinal: yup.date()
        .required('Insira uma data'),
});

export {
    investimentoSchema
}