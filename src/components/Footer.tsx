import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

export default function Footer() {
  return (
    <footer className="px-[3vw] py-6 max-[420px]:pb-24">
      <Carousel
        className="border-amber mx-auto w-full max-w-6xl overflow-hidden rounded-2xl border-3"
        plugins={[Autoplay({ delay: 3000 })]}
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem className="bg-amber" key={index}>
              <div>
                <img
                  className="rounded-2xl max-md:h-32"
                  loading="lazy"
                  src="https://obya3wwefi.ufs.sh/f/vL3P6gZND4ZgIyWpVTeJt3eO4juHLbTB5inyAYCqEIx7WGwv"
                  alt="banner"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </footer>
  );
}
