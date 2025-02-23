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
  const res = await axios.post<ApiResponse>(API_ROUTES.USER.AUTH.SIGNUP, { data });
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
    try {
      const payload: signUpParam = {
        name,
        email,
        password,
        isNistian,
        nistEmail: isNistian ? nistEmail : undefined, // Convert "" to undefined
        roll: isNistian ? roll : undefined,
      }
      const res = await signUpPost(payload);
      if (res.data.success) {
        router.push("/")
      }
      console.log(res);
    }
    catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="bg-bg2 p-8 rounded-xl flex flex-col gap-4 justify-center items-center">
        <h1 className="text-xl font-bold">Create An Account</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-transparent p-2 min-w-[300px] border rounded-lg"
          />
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
          <span className="flex gap-2">
            <input
              type="checkbox"
              checked={isNistian}
              onChange={(e) => setIsNistian(e.target.checked)}
            />
            <p>I am a Nistian</p>
          </span>
          {
            isNistian && (
              <>
                <input
                  type="email"
                  placeholder="NIST Email"
                  value={nistEmail}
                  onChange={(e) => setNistEmail(e.target.value)}
                  className="bg-transparent p-2 min-w-[300px] border rounded-lg"
                  />
                <input
                  type="text"
                  placeholder="Roll Number"
                  value={roll}
                  onChange={(e) => setRoll(e.target.value)}
                  className="bg-transparent p-2 min-w-[300px] border rounded-lg"
                  />
              </>
            )
          }
          <button type="submit" className="bg-primary p-4 font-semibold rounded-lg">Create An Account</button>
        </form>
      </div>
    </div>
  );
}
