import React from "react";
import { Link } from "react-router-dom";

const Login = ({ setState }) => {
  return (
    <div className="contain py-16">
      <div className="max-w-lg mx-auto px-6 py-7 rounded overflow-hidden">
        <h2 className="text-2xl uppercase font-medium mb-1">S'identifier</h2>
        <p className="text-gray-600 mb-6 text-sm">Veuillez s'indentifier</p>
        <form action="#" method="post" autoComplete="off">
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
              />
            </div>
          </div>
          <div className="flex items-center justify-between mt-6">
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

          </div>
          <Link to="#" className="text-primary mt-4">
            Mot de passe oublié?
          </Link>
          <div className="mt-4">
            <button
              type="submit"
              className="block w-full py-2 text-center text-white bg-blue-700 border border-primary rounded hover:bg-blue-500 hover:text-primary transition uppercase font-roboto font-medium"
            >
              S'identifier
            </button>
          </div>
        </form>
        {/* ./login with */}
        <p className="mt-4 text-center text-gray-600">
          Vous n'avez pas de compte ?{" "}
          <button onClick={() => { setState('signup') }} className="text-primary">
            S'inscrire maintenant
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
