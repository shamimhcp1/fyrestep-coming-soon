"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const backgroundImages = [
  "/Gemini_Generated_Image_nz9ycunz9ycunz9y_1.png",
  "/Gemini_Generated_Image_pgpxs2pgpxs2pgpx_1.png",
  "/Gemini_Generated_Image_4yp04p4yp04p4yp0_1.png",
];

const ComingSoonCard = () => {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-background text-foreground">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <Carousel
          plugins={[plugin.current]}
          className="w-full h-full"
          opts={{
            loop: true,
            align: "start",
          }}
        >
          <CarouselContent className="h-screen m-0">
            {backgroundImages.map((src, index) => (
              <CarouselItem key={index} className="pl-0 h-full relative w-full">
                <div className="relative w-full h-full">
                  <Image
                    src={src}
                    alt={`Background ${index + 1}`}
                    fill
                    className="object-cover opacity-80 animate-pulse-slow duration-1000"
                    priority={index === 0}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container px-4 md:px-6 flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-10 duration-1000">
        {/* Logo Section */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-background shadow-2xl">
            {/* Using the light logo assuming it contrasts well with the dark background design */}
            <Image
              src="/fyrestep-light.jpeg"
              alt="Fyrestep Logo"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Headlines */}
        <div className="space-y-4 max-w-2xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text bg-gradient-to-r text-primary drop-shadow-sm">
            Coming Soon
          </h1>
          <p className="text-lg md:text-xl leading-relaxed max-w-[600px] mx-auto">
            We are crafting an experience that redefines how you interact with
            the world. Get ready for something extraordinary.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-6 pt-8 text-primary">
          <a
            href="#"
            className="hover:text-primary transition-colors transform hover:scale-110 duration-200"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-instagram"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
          <a
            href="#"
            className="hover:text-primary transition-colors transform hover:scale-110 duration-200"
            aria-label="Twitter"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-twitter"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-12.7 16.4C7.2 23.7 2 20 2 20s3-3.8 6.4-3.5c-3-1-3.6-5.4-3.6-5.4 1 .8 2.6.9 2.6.9c-2.4-1.6-2.5-6.5-1-7.1 2.9 3.2 7.1 5.3 12 5.5 0-2.3 2.1-5.6 5.3-5.3 1.6.2 3.1 1.2 3.1 1.2z" />
            </svg>
          </a>
          <a
            href="#"
            className="hover:text-primary transition-colors transform hover:scale-110 duration-200"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-linkedin"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            href="#"
            className="hover:text-primary transition-colors transform hover:scale-110 duration-200"
            aria-label="Facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-facebook"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 w-full text-center z-10">
        <p className="text-sm text-muted-foreground/60">
          &copy; {new Date().getFullYear()} Fyrestep. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default ComingSoonCard;
