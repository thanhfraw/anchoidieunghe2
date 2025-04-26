import { Link } from "react-router-dom";

const FullGalleryView = () => {
  const featuredEvents = [
    {
      id: 1,
      src: "/cocktail1.jpg",
      alt: "pool party",
      title: "Pool Party - After Party",
      subtitle: "04/12/2025 | Alight Tempe",
    },
    {
      id: 2,
      src: "/bartender.jpg",
      alt: "alight tempe",
      title: "Fresh Start",
      subtitle: "04/18/2025 | Alight Tempe",
    },
  ];

  const upcomingEvents = [
    {
      id: 3,
      src: "/cocktail2.jpg",
      alt: "Upcoming 1",
      title: "Upcoming Bash",
      subtitle: "07/20/2025 | Vegas",
    },
    {
      id: 4,
      src: "/cocktail3.webp",
      alt: "Upcoming 2",
      title: "Mystery Night",
      subtitle: "08/05/2025 | Miami",
    },
  ];

  return (
    <div className="min-h-screen text-white flex flex-col gap-16 p-10 bg-jigger-dark pt-24">
      {/* FEATURED EVENTS */}
      <section className="container">
        <h2 className="text-3xl font-bold text-center text-jigger-gold mb-6">Menu & Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredEvents.map((item) => (
            <Link to={`/event/${item.id}`} key={item.id}>
              <div className="bg-jigger-gold text-black rounded-lg overflow-hidden shadow-md cursor-pointer">
                <img src={item.src} alt={item.alt} className="w-full h-60 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-sm text-black">{item.subtitle}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section className="container">
        <h2 className="text-2xl font-semibold text-center text-jigger-cream mb-4">Upcoming</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcomingEvents.map((item) => (
            <Link to={`/event/${item.id}`} key={item.id}>
              <div className="bg-jigger-gold text-black rounded-lg overflow-hidden shadow-md cursor-pointer">
                <img src={item.src} alt={item.alt} className="w-full h-60 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-sm text-black">{item.subtitle}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Highlight Section */}
      {/* <section className="bg-jigger-dark py-10 w-full border-t border-t-jigger-gold">
        <div className="container">
          <h2 className="text-3xl font-bold text-jigger-gold mb-6 text-center">Highlight</h2>
          <div className="flex justify-center">
            <img
              src="/logo.gif"
              alt="Highlight GIF"
              className="rounded-lg"
            />
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default FullGalleryView;



