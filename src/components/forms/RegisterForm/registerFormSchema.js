import { z } from "zod";

export const registerFormSchema = z.object({
   name: z.string().nonempty("O nome é obrigatório"),
   email: z.string().nonempty("O e-mail é obrigatório").email("Forneça um e-mail válido"),
   password: z
      .string()
      .nonempty("A senha é obrigatória")
      .min(8, "São necessários pelo menos oito caracteres")
      .regex(/[A-Z]+/, "É necessário conter pelo menos uma letra maiúscula")
      .regex(/[a-z]+/, "É necessário conter pelo menos uma letra minúscula")
      .regex(/[0-9]+/, "É necessário pelo menos um número")
      .regex(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/]/, "É necessário pelo menos um caracter especial."),
    confirmPassword: z.string().nonempty("Confirmar a senha é obrigatória") 
}).refine(({password, confirmPassword}) => password === confirmPassword, {
    message: "As senhas não correspondem",
    path: ["confirmPassword"]
});

// regex - expressão regular - algoritmo de validação que permite validar diversas formatos de string
