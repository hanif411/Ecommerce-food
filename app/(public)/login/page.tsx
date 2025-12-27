"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLogin } from "@/hooks/useAuth";

function LoginPage() {
  const { handleLogin, mutation } = useLogin();
  return (
    <div className="flex h-full min-h-[80vh] justify-center items-center">
      <Card className="w-full max-w-sm mx-auto h-fit ">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
          <CardAction>
            <Button variant="link">Sign Up</Button>
          </CardAction>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" name="password" required />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-2 mt-5">
            <Button
              type="submit"
              className="w-full"
              disabled={mutation.isPending}>
              {mutation.isPending ? "Login..." : "Login"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

export default LoginPage;
