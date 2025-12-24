import { X } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { toast } from "react-toastify";

interface LoginModalProps {
  onClose: () => void;
  onOpenRegister: () => void;
}

export const LoginModal = ({ onClose, onOpenRegister }: LoginModalProps) => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      setError("No account found. Please register first.");
      return;
    }

    const user = JSON.parse(storedUser);
    if (user.email === email && user.password === password) {
      login(email, password);
      toast.success("Login successful");
      onClose();
    } else {
      setError("Invalid email or password");
    }
    console.log(email, password);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <Card className="relative w-[420px] rounded-3xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 rounded-full p-2 hover-bg-primary hover:text-white"
        >
          <X size={18} />
        </button>

        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Welcome back!</CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            {error && (
              <div className="rounded-md bg-red-100 px-3 py-2 text-sm text-red-700">
                {error}
              </div>
            )}
            <div className="space-y-1">
              <Label>Email address</Label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@email.com"
                className="w-full rounded-md border px-3 py-2"
              />
            </div>

            <div className="space-y-1">
              <Label>Password</Label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full rounded-md border px-3 py-2"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember me
              </label>
              <button type="button" className="text-primary hover:underline">
                Forgot password?
              </button>
            </div> 

            <Button type="submit" size="lg" className="w-full">
              Login
            </Button>
          </form>
        </CardContent>

        <CardFooter className="justify-center text-sm">
          Don't have an account?
          <Button
            onClick={onOpenRegister}
            variant="void"
            className="ml-1 hover:underline"
          >
            Register
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
