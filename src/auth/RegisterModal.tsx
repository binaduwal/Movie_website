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

interface RegisterModalProps {
  onClose: () => void;
  onOpenLogin: () => void;
}

export const RegisterModal = ({ onClose, onOpenLogin }: RegisterModalProps) => {
  const { register } = useAuth();
  const [name,setName]=useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    register(email, password);
    toast.success("Registration successful");
    onClose();
    onOpenLogin();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <Card className="relative w-[420px] rounded-3xl p-6">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 rounded-full p-2 hover:bg-cyan-500 hover:text-white"
        >
          <X size={18} />
        </button>

        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">
            Create an Account
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <Label>Name</Label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="w-full rounded-md border px-3 py-2"
              />
            </div>

            <div className="space-y-1">
              <Label>Email</Label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
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

            <div className="space-y-1">
              <Label>Confirm Password</Label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full rounded-md border px-3 py-2"
              />
            </div>

            <Button type="submit" variant="cyan" size="lg" className="w-full">
              Register
            </Button>
          </form>
        </CardContent>
        <CardFooter className="justify-center text-sm">
          Already have an account?
          <Button
            onClick={onOpenLogin}
            variant="void"
            className="ml-1 text-cyan-600 hover:underline"
          >
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
