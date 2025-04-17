import React, { useEffect, useState } from "react";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./MovieCarousel.css";
import { useFetch } from "../../Scripts/useFetch";

function MovieCarousel() {
  const url = "https://santosnr6.github.io/Data/favoritemovies.json";
  const { data, isLoading, isError } = useFetch(url);

  const [swiperInstance, setSwiperInstance] = useState(null);
  const [randomMovies, setRandomMovies] = useState([]);

  // Funktion för att slumpa 5 trailers
  const getRandomMovies = (movies, count = 5) => {
    const shuffled = [...movies].sort(() => Math.random() - 0.5); // Slumpar ordningen
    return shuffled.slice(0, count); // Väljer de första 5
  };

  // När datan är hämtad, slumpa filmer
  useEffect(() => {
    if (data) {
      setRandomMovies(getRandomMovies(data)); // Slumpar och sätter de slumpade filmerna
    }
  }, [data]);

  // Initialisera Swiper när datan är klar
  useEffect(() => {
    if (randomMovies.length > 0 && !swiperInstance) {
      const swiper = new Swiper(".swiper", {
        modules: [Navigation],
        direction: "horizontal",
        slidesPerView: 1,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        observer: true,
      observeParents: true,
      });
      setSwiperInstance(swiper);
    }
  }, [randomMovies, swiperInstance]);

  // Laddning eller felmeddelanden
  if (isLoading) {
    return <section>Loading...</section>;
  }

  if (isError) {
    return <section>Something went wrong!</section>;
  }

  // Rendera Swiper slides med slumpade trailers
  return (
    <section className="swiper">
      <section className="swiper-wrapper">
        {randomMovies.map((movie, index) => (
          <section key={index} className="swiper-slide">
            <section className="trailer">
              <iframe
                className="CarouselScreen"
                src={movie.Trailer_link}
                title={`Trailer: ${movie.Title}`}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </section>
          </section>
        ))}
      </section>

      <section className="swiper-button-prev"></section>
      <section className="swiper-button-next"></section>
    </section>
  );
}

export default MovieCarousel;
