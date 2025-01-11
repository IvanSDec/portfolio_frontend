import React, { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "../../Embla.css";

const EmblaCarousel = ({ slides }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        slidesToScroll: 1,
        breakpoints: {
            900: { slidesToScroll: 1, dragFree: false },
            901: { slidesToScroll: 4, dragFree: true },
        },
    });

    const parallaxValues = useRef([]);

    const updateParallax = () => {
        if (!emblaApi) return;

        emblaApi.slidesInView(true).forEach((index) => {
            const slide = parallaxValues.current[index];
            if (!slide) return;
            const slideProgress = emblaApi.slides()[index].progress;
            const parallaxOffset = slideProgress * 2;
            slide.style.transform = `translateX(${parallaxOffset}%)`;
        });
    };

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on("scroll", updateParallax);
        emblaApi.on("resize", updateParallax);
        updateParallax();
    }, [emblaApi]);

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                {slides.map((slide, index) => (
                    <div className="embla__slide__parallax" key={index}>
                        <div className="embla__slide__text">
                            <h3 className="font-jura font-bold text-yellow-500 text-2xl">{slide.name}</h3>
                        </div>
                        <img
                            src={slide.img}
                            alt={`Slide ${index + 1}`}
                            className="embla__slide__img"
                        />
                    </div>  
                ))}
            </div>
        </div>
    );
};

export default EmblaCarousel;