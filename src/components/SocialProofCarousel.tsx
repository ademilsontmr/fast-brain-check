import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    id: 1,
    text: "Mostrei no grupo da família, virei assunto na hora 😂",
    author: "João M.",
    rating: 5,
  },
  {
    id: 2,
    text: "Descobri que meu QI é maior que 92% das pessoas.",
    author: "Laura S.",
    rating: 5,
  },
  {
    id: 3,
    text: "Teste muito bem feito, resultado completo e detalhado!",
    author: "Carlos R.",
    rating: 5,
  },
  {
    id: 4,
    text: "Compartilhei no WhatsApp e vários amigos fizeram também.",
    author: "Ana P.",
    rating: 5,
  },
  {
    id: 5,
    text: "Resultado surpreendente! Não esperava ter QI tão alto.",
    author: "Pedro L.",
    rating: 5,
  },
  {
    id: 6,
    text: "Muito rápido e fácil de fazer. Recomendo!",
    author: "Mariana F.",
    rating: 5,
  },
  {
    id: 7,
    text: "A análise do resultado foi muito completa e útil.",
    author: "Ricardo T.",
    rating: 5,
  },
  {
    id: 8,
    text: "Fiz com minha filha e ela adorou descobrir o QI dela.",
    author: "Patrícia M.",
    rating: 5,
  },
];

const SocialProofCarousel = () => {
  const autoplayPlugin = Autoplay({
    delay: 3000, // 3 segundos entre cada slide
    stopOnInteraction: false, // Continua mesmo após interação do usuário
    stopOnMouseEnter: true, // Pausa quando o mouse está sobre o carrossel
  });

  return (
    <div className="w-full py-8">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[autoplayPlugin]}
        className="w-full max-w-5xl mx-auto"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <Card className="p-6 shadow-elegant h-full">
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-primary text-xl">★</span>
                  ))}
                </div>
                <p className="mb-4 text-foreground">
                  "{testimonial.text}"
                </p>
                <p className="text-sm text-muted-foreground">— {testimonial.author}</p>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
};

export default SocialProofCarousel;

