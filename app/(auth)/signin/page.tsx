"use client"
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      alert("Invalid credentials");
    } else {
      router.push('/')
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="bg-bg2 p-8 rounded-xl flex flex-col gap-4 justify-center items-center">
        <h1 className="text-xl font-bold" >Sign In</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-transparent p-2 min-w-[300px] border rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-transparent p-2 min-w-[300px] border rounded-lg"
          />
          <button type="submit" className="bg-primary p-4 font-semibold rounded-lg">Sign In</button>
        </form>
      </div>
    </div>
  );
}
