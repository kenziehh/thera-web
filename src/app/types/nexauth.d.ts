import { User as NextAuthUser } from "next-auth";

declare module "next-auth" {
    interface User extends NextAuthUser {
        access_token?: string;
    }

    interface Session {
        user?: {
            name?: string | null;
            email?: string | null;
            image?: string | null;
            access_token?: string;
        };
    }
}
