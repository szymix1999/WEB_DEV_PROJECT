import axios from "axios";
import React, { useState } from "react";
import { setAccessToken, setUserUUID } from "../../utils/cookies";

const BoxLogin: React.FC<any> = (): JSX.Element | null => {
  const [email, setEmail] = useState("");

  const handleFormSubmit = (e: any) => {
    e.preventDefault();

    const usernameValue = e.target.elements.email?.value;
    const passwordValue = e.target.elements.password?.value;

    if (usernameValue && passwordValue) {
      axios
        .post("/login", {
          email: usernameValue,
          password: passwordValue,
        })
        .then((res) => {
          console.log(res);
          setAccessToken(res.data.token);
          setUserUUID(usernameValue);
        })
        .catch(() => {
          console.log("niema");
        });
    }
  };

  return (
    <div className="w-96 justify-center items-center bg-gray-100">
      <div className="px-6 py-6 mt-4 text-left bg-white shadow-lg">
        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-20 h-20 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-center">
          Login to your account
        </h3>
        <form onSubmit={handleFormSubmit}>
          <div className="mt-4">
            <div>
              <label className="block" htmlFor="email">
                Email
              </label>
              <input
                type="text"
                placeholder="Email"
                id="email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                onChange={(e) => setEmail(e?.target?.value)}
              />
              {email === "" && (
                <span className="text-xs tracking-wide text-red-600">
                  Email field is required{" "}
                </span>
              )}
            </div>
            <div className="mt-4">
              <label className="block">Password</label>
              <input
                type="password"
                placeholder="Password"
                id="password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="flex items-baseline justify-between">
              <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                Login
              </button>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BoxLogin;
