import { Inter } from "next/font/google";
import "./../assets/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";
import { AuthProvider } from "@/contexts/AuthContext";
import { CartContext } from "@/contexts/CartContext";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MarchéMaison : Votre Portail vers la Fraîcheur",
  description: "Bienvenue sur MarchéMaison, votre destination de choix pour des courses pratiques et fraîches.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <AuthProvider>
          <CartContext>
            <Header />
            {children}
            <Footer />
            <Copyright />
          </CartContext>

        </AuthProvider>
      </body>
    </html>
  );
}
