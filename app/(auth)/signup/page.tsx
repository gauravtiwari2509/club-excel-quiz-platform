"use client"
import { API_ROUTES } from "@/lib/routes";
import { signUpParam } from "@/zodSchemas/SignupSchema";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
interface ApiResponse {
  message: string;
  success: boolean;
}

async function signUpPost(data: signUpParam) {
  const res = await axios.post<ApiResponse>(API_ROUTES.USER.AUTH.SIGNUP, {data});
  return res;
}

export default function SignUp() {
  // TODO: reduce
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isNistian, setIsNistian] = useState(false);
  const [nistEmail, setNistEmail] = useState("");
  const [roll, setRoll] = useState("");
  const router = useRouter();

  // TODO: react query mutation
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try{
      const payload: signUpParam = {
        name,
        email,
        password,
        isNistian,
        nistEmail: isNistian ? nistEmail : undefined, // Convert "" to undefined
        roll: isNistian ? roll : undefined,
      }
      const res = await signUpPost(payload);
      if(res.data.success) {
        router.push("/")
      }
      console.log(res);
    }
    catch(err){
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-black"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-black"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-black"
        />
        <input
          type="checkbox"
          checked={isNistian}
          onChange={(e) => setIsNistian(e.target.checked)}
        />
        {
          isNistian && (
            <>
              <input
                type="email"
                placeholder="NIST Email"
                value={nistEmail}
                onChange={(e) => setNistEmail(e.target.value)}
                className="bg-black"
              />
              <input
                type="text"
                placeholder="Roll Number"
                value={roll}
                onChange={(e) => setRoll(e.target.value)}
                className="bg-black"
              />
            </>
          )
        }
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
