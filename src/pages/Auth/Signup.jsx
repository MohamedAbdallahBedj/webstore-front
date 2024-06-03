
const Signup = ({ setState }) => {
    return (
        <div className="contain py-16">
            <div className="max-w-lg mx-auto px-6 py-7 rounded overflow-hidden">
                <h2 className="text-2xl uppercase font-medium mb-1">
                    Créer un compte
                </h2>
                <p className="text-gray-600 mb-6 text-sm">Inscrivez-vous en tant que nouveau client</p>
                <form action="#" method="post" autoComplete="off">
                    <div className="space-y-2">
                        <div>
                            <label htmlFor="name" className="text-gray-600 mb-2 block">
                                Nom complet
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                placeholder="john doe"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="text-gray-600 mb-2 block">
                                Addresse Email
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
                        <div>
                            <label htmlFor="confirm" className="text-gray-600 mb-2 block">
                                Confirmer le mot de passe
                            </label>
                            <input
                                type="password"
                                name="confirm"
                                id="confirm"
                                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                                placeholder="*******"
                            />
                        </div>
                    </div>

                    <div className="mt-4">
                        <button
                            type="submit"
                            className="block w-full py-2 text-center text-white bg-blue-700 border border-primary rounded hover:bg-blue-400 hover:text-primary transition uppercase font-roboto font-medium"
                        >
                            Créer un compte
                        </button>
                    </div>
                </form>
                {/* ./login with */}
                <p className="mt-4 text-center text-gray-600">
                    Vous avez déjà un compte ? {" "}
                    <button onClick={() => { setState('login') }} className="text-primary">
                        S'identifier maintenant
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Signup;
