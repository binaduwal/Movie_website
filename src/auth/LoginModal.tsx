import { X } from "lucide-react";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { useAuth } from "../context/AuthContext";
interface LoginModalProps {
  onClose: () => void;
}
export const LoginModal = ({ onClose }: LoginModalProps) => {
  const { login } = useAuth();
  const handleLogin = () => {
    login("abc@gmail.com", "password");
  };
  return (
    <div className="fixed inset-0 flex bg-black/50 items-center justify-center z-99">
      <div className="relative bg-white rounded-3xl w-[420px] p-6">
           <div className="absolute top-3 right-3 hover:rounded-full p-2 hover-bg-primary">

            <X className="text-black hover:text-white " size={18} onClick={onClose} />
          </div>
        <div className="flex justify-between">

          <h2 className="text-xl py-2 font-bold text-center text-black">
            Welcome Back!
          </h2>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-3 ">
          <Label htmlFor="email" className="text-gray-800" title="Email">
            Email
          </Label>
          <input
            type="email"
            placeholder="Email"
            className="border px-3 py-2 rounded"
          />
          <Label htmlFor="password" className="text-gray-800">
            Password
          </Label>
          <input
            type="password"
            placeholder="Password"
            className="border px-3 py-2 rounded"
          />
          <Button onClick={handleLogin} variant="cyan" size="lg">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};
