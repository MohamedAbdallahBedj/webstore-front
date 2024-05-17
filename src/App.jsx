import "./App.css";
import Carousel from "./components/Carousel/Carousel";
import Categories from "./components/Categories/Categories";
import Copyright from "./components/Copyright/Copyright";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Navigation from "./components/Navigation/Navigation";
import NavigationResponsive from "./components/Navigation/NavigationResponsive";
import Products from "./components/Products/Products";
import Signup from "./components/Signup/Signup";

const slides = [
  {
    id: 0,
    title_ar: "عنوان",
    title_fr: "Titre",
    category_ar: "الفئة",
    category_fr: "Categorie",
    date: new Date(),
    images: [
      {
        link: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  {
    id: 1,
    title_ar: "عنوان",
    title_fr: "Titre",
    category_ar: "الفئة",
    category_fr: "Categorie",
    date: new Date(),
    images: [
      {
        link: "https://images.unsplash.com/photo-1584680226833-0d680d0a0794?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  {
    id: 2,
    title_ar: "عنوان",
    title_fr: "Titre",
    category_ar: "الفئة",
    category_fr: "Categorie",
    date: new Date(),
    images: [
      {
        link: "https://images.unsplash.com/photo-1506617420156-8e4536971650?q=80&w=2023&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
];

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <NavigationResponsive />
      <Carousel slides={slides} />
      <Categories />
      <Products />
      <Footer />
      <Copyright />
      <Login />
      <Signup />
    </>
  );
}

export default App;
