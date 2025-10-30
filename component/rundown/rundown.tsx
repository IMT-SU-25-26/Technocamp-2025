"use client";

import Image from "next/image";
import { useState } from "react";
import { gsap } from "gsap";

export default function Rundown() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 2;

  const handleNext = () => {
    const nextSlide = (currentSlide + 1) % totalSlides;
    animateSlide(currentSlide, nextSlide);
    setCurrentSlide(nextSlide);
  };

  const handlePrev = () => {
    const prevSlide = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
    animateSlide(currentSlide, prevSlide);
    setCurrentSlide(prevSlide);
  };

  const animateSlide = (from: number, to: number) => {
    const slideElements = document.querySelectorAll(".carousel-slide");

    gsap.to(slideElements[from], {
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut",
    });

    gsap.to(slideElements[to], {
      opacity: 1,
      duration: 0.5,
      ease: "power2.inOut",
    });
  };

  return (
    <div className="w-full py-8 overflow-hidden">
      {/* Banner Rundown */}
      <div className="relative mb-[20] sm:mb-[20] md:mb-[40] lg:mb-20">
        <div className="relative w-full h-auto">
          <Image
            src="/rundown/rundownbanner.svg"
            alt="Rundown Banner"
            width={1920}
            height={1080}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>

      {/* Container untuk Carousel dengan Arrow di luar */}
      <div className="relative w-full max-w-[90%] md:max-w-[80%] lg:max-w-[70%] 2xl:max-w-[80%] mx-auto px-4 sm:px-8">
        {/* Kotak Rundown dengan Carousel */}
        <div className="relative bg-gradient-to-br from-[#3d1f1f] via-[#2d1515] to-[#1d0d0d] rounded-lg overflow-hidden shadow-2xl border-4 border-white p-3 sm:p-4 md:p-6">
          {/* Carousel Container */}
          <div className="relative w-full h-110 md:h-190 lg:h-200 2xl:h-300 bg-[#2d1515] rounded-md overflow-hidden">
            {/* Slide 1 */}
            <div className="carousel-slide absolute inset-0 w-full h-full">
              <Image
                src="/rundown/carouselrundown1.svg"
                alt="Rundown Day 1"
                fill
                className="object-contain p-2"
                priority
              />
            </div>

            {/* Slide 2 */}
            <div className="carousel-slide absolute inset-0 w-full h-full opacity-0">
              <Image
                src="/rundown/carouselrundown2.svg"
                alt="Rundown Day 2"
                fill
                className="object-contain p-2"
              />
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-2 md:bottom-3 lg:bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  animateSlide(currentSlide, index);
                  setCurrentSlide(index);
                }}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === index
                    ? "bg-white w-6 sm:w-8 h-1 md:h-3"
                    : "bg-white/50 hover:bg-white/70 w-3 h-1 md:h-3"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        {currentSlide > 0 && (
          <button
            onClick={handlePrev}
            className="absolute -left-7 md:-left-12 lg:-left-20 2xl:-left-30 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 md:p-4"
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="white"
              className="w-10 h-10 md:w-18 md:h-18 lg:w-28 lg:h-28 2xl:w-36 2xl:h-36"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        )}

        {currentSlide < totalSlides - 1 && (
          <button
            onClick={handleNext}
            className="absolute -right-7 md:-right-12 lg:-right-20 2xl:-right-30 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 md:p-4"
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="white"
              className="w-10 h-10 md:w-18 md:h-18 lg:w-28 lg:h-28 2xl:w-36 2xl:h-36"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
