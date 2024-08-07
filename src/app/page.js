import Carousel from "@/pages/Home/Carousel";
import slides from '@/data/slides.json';
import Categories from "@/pages/Home/Cateories";
import Products from "@/pages/Home/Products";
import About from "@/pages/About/About";

export default function Home() {
  return (
    <main className="">
      <Carousel slides={slides} />
      <Categories />
      <Products />
      <About />
    </main>
  );
}
