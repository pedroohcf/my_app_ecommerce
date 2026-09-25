// auth.ts (na raiz do projeto)
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credenciais",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Senha", type: "password" }
      },
      async authorize(credentials) {
        // Aqui farias a validação real com a tua base de dados ou Firebase.
        // Para testes, vamos aceitar um utilizador fixo:
        if (credentials?.email === "admin@admin.com" && credentials?.password === "123456") {
          return { id: "1", name: "Administrador", email: "admin@admin.com" }
        }
        return null
      }
    })
  ],
  pages: {
    signIn: '/login',
  },
})