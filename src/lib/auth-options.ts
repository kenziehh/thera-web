import {
    BASE_URL,
    NEXTAUTH_SECRET
} from "@/lib/env";
import axios from "axios";
import { NextAuthOptions, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";



export const authOptions: NextAuthOptions = {
    // cookies: {
    //     sessionToken: {
    //         name: `__Secure-next-auth.session-token`,
    //         options: {
    //             httpOnly: true,
    //             sameSite: "lax",
    //             path: "/",
    //             secure: process.env.NODE_ENV === "production",
    //         },
    //     },
    // },
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: "Email", type: "email", placeholder: "thera@gmail.com" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                try {
                    const response = await axios.post(`${BASE_URL}admins/login`, {
                        email: credentials?.email,
                        password: credentials?.password,
                    }, {
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json",
                        },
                    });

                    const user = response.data?.payload;
                    if (user && user.access_token) {
                        return {
                            id: user.id,
                            email: credentials?.email,
                            access_token: user.access_token,
                        };
                    }
                    return null;
                } catch (err) {
                    if (axios.isAxiosError(err)) {
                        throw new Error(
                            err.response?.data?.payload?.error?.body?.fields?.email ||
                            "Login failed"
                        );
                    } else {
                        throw new Error("An unexpected error occurred during login.");
                    }
                }
            },
        }),
    ],
    pages: {
        signIn: "/login",
    },
    session: {
        strategy: "jwt",
        maxAge: 60 * 60, // 1 hour
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.access_token = user.access_token;
            }
            return token;
        },
        async session({ session, token }) {
            if (token.access_token) {
                session.user = {
                    ...session.user,
                    access_token: token.access_token as string,
                };
            }
            return session;
        },
    },
    secret: NEXTAUTH_SECRET,
};
