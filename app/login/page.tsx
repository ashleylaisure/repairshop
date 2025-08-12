import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
    return (
        <div className="h-dvh flex flex-col items-center justify-center gap-6 text-4xl p-4">
            <h1>Repair Shop</h1>
            <Button asChild>
                <LoginLink>
                    <Button>Login</Button>
                </LoginLink>
            </Button>
        </div>
    );
}
