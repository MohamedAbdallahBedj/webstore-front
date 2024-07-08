import Spinner from "@/components/ui/Spinner";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";
import React from "react";

const Login = ({ setState }) => {
  const { login, loading } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    login({ email, password });
  };
  return (
    <div className="contain py-16">
      <div className="max-w-lg mx-auto px-6 py-7 rounded overflow-hidden">
        <h2 className="text-2xl uppercase font-medium mb-1">S'identifier</h2>
        <p className="text-gray-600 mb-6 text-sm">Veuillez s'indentifier</p>

        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="space-y-2">
            <div>
              <label htmlFor="email" className="text-gray-600 mb-2 block">
                Addresse email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                placeholder="youremail.@domain.com"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="text-gray-600 mb-2 block">
                Mot de passe
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                placeholder="*******"
                required
              />
            </div>
          </div>
          {/* <div className="flex items-center justify-between mt-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                className="text-primary focus:ring-0 rounded-sm cursor-pointer"
              />
              <label
                htmlFor="remember"
                className="text-gray-600 ml-3 cursor-pointer"
              >
                Souviens-toi de moi
              </label>
            </div>
          </div> */}
          <div className="mt-6">
            <Link href="#" className="text-primary">
              Mot de passe oublié?
            </Link>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              disabled={loading}
              className="flex justify-center gap-4 items-center w-full py-2 text-center text-white bg-blue-700 border border-primary rounded hover:bg-blue-500 hover:text-primary transition uppercase font-roboto font-medium"
            >
              S'identifier {loading && <Spinner />}
            </button>
          </div>
        </form>
        {/* ./login with */}
        <p className="mt-4 text-center text-gray-600">
          Vous n'avez pas de compte ?{" "}
          <button
            onClick={() => {
              setState("signup");
            }}
            className="text-primary"
          >
            S'inscrire maintenant
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
