"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const api = "";

function Carousel({ lang = "fr", slides = [] }) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const nextSlide = () => {
      setCurrentIndex((previous) => {
        const isLastSlide = previous === slides.length - 1;
        return isLastSlide ? 0 : previous + 1;
      });
    };
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [slides?.length]);
  return (
    <div className="h-[580px] w-full m-auto relative group overflow-hidden">
      <AnimatePresence>
        {slides?.map(
          (slide, index) =>
            currentIndex === index && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0 }}
                key={index}
                style={{
                  backgroundImage: `linear-gradient(${lang === "ar" ? "-" : ""
                    }150deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 60%, rgba(0,0,0,0) 100%), url(${`${slide?.images[0]?.link || "notFound.png"
                    }`})`,
                }}
                className={`absolute inset-0 bg-center bg-cover text-slate-200 pt-10 ps-10`}
              >
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.9 }}
                  exit={{ opacity: 0, x: -100 }}
                >
                  <span className={`flex items-center gap-2 max-w-[500px]`}>
                    <p className="px-4 bg-gray-200 text-gray-900 rounded-full text-sm">
                      {slide[`category_${lang}`]}
                    </p>
                    <p className="text-xl">
                      {new Date(slide.date).toLocaleDateString()}
                    </p>
                  </span>
                  <h1 className={`max-w-[500px] text-3xl font-medium`}>
                    {slide[`title_${lang}`]}
                  </h1>
                </motion.div>
                <div className="mt-8">
                  <Link to={`#`} className="bg-[#008000] py-2 px-8 rounded">
                    En savoir plus
                  </Link>
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>
    </div>
  );
}

export default Carousel;
