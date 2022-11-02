import * as yup from 'yup';

const forgotPasswordSchema = yup.object({
    emailUsuario: yup.string()
        .email('Insira um email válido')
        .required('Insira seu email')
        .max(100, 'O email deve conter um máximo de 100 caracteres')
});

const recoverPasswordSchema = yup.object({
    codigoRecuperacao: yup.number()
        .required('Insira o código')
        .min(6, "O código deve conter 6 dígitos")
}); //terminar

const resetPasswordSchema = yup.object({
    senhaUsuario: yup.string()
        .required('Insira sua senha')
        .min(8, 'A senha deve ter no mínimo 8 caracteres')
        .max(50, 'A senha deve ter entre 8 e 50 caracteres')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
            'Sua senha deve conter letras maiúsculas e minúsculas e ao menos um número e um caractere especial'
        ),

    confirmarSenha: yup.string()
        .required('Confirme sua senha')
        .oneOf([yup.ref('senhaUsuario'), null], 'As senhas não coincidem')
}); // fazer tela e schema

export {
    forgotPasswordSchema,
    recoverPasswordSchema,
    resetPasswordSchema
}