import { useParams } from "react-router-dom";

const EventDetail = () => {
  const { eventId } = useParams();

  const eventDetails: Record<number, {
    title: string;
    date: string;
    location: string;
    menu: string[];
    photos: string[];
  }> = {
    1: {
      title: "Pool Party After Party",
      date: "04/12/2025",
      location: "Alight Tempe",
      menu: ["Signature Mojito", "Passionfruit Martini", "Espresso Old-Fashioned"],
      photos: ["/cocktail1.jpg", "/cocktail2.jpg", "/cocktail3.webp"],
    },
    2: {
      title: "Fresh Start",
      date: "04/18/2025",
      location: "Alight Tempe",
      menu: ["Summer Cooler", "Mint Spritz", "Sparkling Mimosa"],
      photos: ["/bartender.jpg", "/cocktail3.webp", "/cocktail2.jpg"],
    },
  };

  const event = eventId ? eventDetails[Number(eventId)] : undefined;

  if (!eventId || !event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-jigger-dark text-white px-4">
        <div className="text-center space-y-4">
          <h1 className="text-2xl sm:text-3xl font-bold">WE ARE WORKING TIRELESSLY TO PLAN THIS EVENT FOR YOU</h1>
          <a
            href="/"
            className="text-jigger-gold underline hover:text-white transition-colors text-base"
          >
            ← Go Back to Events
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className=" bg-jigger-dark text-white px-4 py-10 pt-24 sm:px-6 md:px-12 lg:px-24">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-jigger-gold mb-4 leading-tight">
          {event.title}
        </h1>
        <p className="text-base sm:text-lg font-light tracking-wide">
          <span className="font-medium">📅</span> {event.date} &nbsp; | &nbsp;
          <span className="font-medium">📍</span> {event.location}
        </p>
      </div>

      {/* Menu */}
      <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-serif text-jigger-gold mb-6 text-center">
          Menu Highlights
        </h2>
        <ul className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 text-jigger-cream">
          {event.menu.map((item, index) => (
            <li
              key={index}
              className="bg-white/10 backdrop-blur-md px-4 py-3 sm:px-6 sm:py-4 rounded-lg text-center shadow-md hover:scale-105 transition-transform duration-300 w-full sm:w-auto"
            >
              <span className="block text-base sm:text-lg font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Photos */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-serif text-jigger-gold mb-6 text-center">
          Event Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {event.photos.map((photo, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg transform hover:scale-[1.03] transition-transform duration-300"
            >
              <img
                src={photo}
                alt={`Event photo ${index + 1}`}
                className="w-full h-56 sm:h-64 md:h-72 object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EventDetail;
