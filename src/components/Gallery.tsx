import FadeInSection from "./ui/FadeInSection";

const Gallery = () => {
    const images = [
      { src: '/cocktail1.jpg', alt: 'Signature cocktail' },
      { src: '/bar1.jpeg', alt: 'Bar interior' },
      { src: '/cocktail2.jpg', alt: 'Cocktail preparation' },
      { src: '/bar2.webp', alt: 'Bar seating' },
      { src: '/cocktail3.webp', alt: 'Seasonal cocktail' },
      { src: '/bartender.jpg', alt: 'Bartender crafting drink' },
    ];
  
    return (
      <section id="gallery" className="py-20 bg-black">
        <FadeInSection className="container">
          <h2 className="font-serif text-4xl text-jigger-gold mb-12 text-center">Gallery</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <div key={index} className="aspect-w-4 aspect-h-3 overflow-hidden">
                <div className="w-full h-full group cursor-pointer">
                  <div className="absolute inset-0 bg-jigger-gold/0 group-hover:bg-jigger-gold/20 transition-all duration-300 z-10"></div>
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* <div className="mt-12 text-center">
            <a 
              href="https://www.instagram.com/jiggerandpony/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 border border-jigger-gold text-jigger-gold hover:bg-jigger-gold hover:text-jigger-dark transition-colors"
            >
              Follow us on Instagram
            </a>
          </div> */}
        </FadeInSection>
      </section>
    );
  };
  
  export default Gallery;