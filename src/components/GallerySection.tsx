import gallery1 from "@/assets/herobg.jpg";
import gallery2 from "@/assets/herobg1.jpg";
import gallery3 from "@/assets/herobg2.jpg";
import gallery4 from "@/assets/herobg3.jpg";
import gallery5 from "@/assets/herobg4.jpg";
import gallery6 from "@/assets/herobg5.jpg";

const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-hero bg-clip-text text-transparent">
          Our Gallery
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-hover transition-all duration-300 aspect-square"
            >
              <img
                src={src}
                alt={`Gallery ${idx + 1}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <p className="text-primary-foreground font-semibold text-lg">
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
