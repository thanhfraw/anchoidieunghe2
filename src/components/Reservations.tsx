import { useState } from 'react';
import FadeInSection from "./ui/FadeInSection";
import emailjs from "emailjs-com";


const Reservations = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    time: '',
    guests: '2',
    message: ''
  });


  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    else if (isSubmitted) {
      alert("Your reservation request has already been submitted.");
      return;
    }

    setIsSubmitting(true);

    // Prepare email parameters
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      time: formData.time,
      guests: formData.guests,
      message: formData.message,
    };

    // Send email using EmailJS
    emailjs
      .send(
        "service_hbij0cj", // Replace with your EmailJS Service ID
        "template_rqcnahi", // Replace with your EmailJS Template ID
        templateParams,
        "7pqC1vzNxKBpS-aGf" // Replace with your EmailJS User ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Your reservation request has been sent successfully!");
          setIsSubmitting(false);
          setIsSubmitted(true);

          // Reset form
          setFormData({
            name: "",
            email: "",
            phone: "",
            time: "",
            guests: "2",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Failed to send your reservation request. Please try again.");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="reservations" className="py-10 bg-[#e0ded8]">
      <FadeInSection className="container">
        <h2 className="font-serif text-4xl text-jigger-gold mb-12 text-center">Make a Reservation</h2>


        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-black mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#191919] border border-black px-4 py-2 text-jigger-cream focus:border-jigger-gold outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-black mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#191919] border border-jigger-gold/30 px-4 py-2 text-jigger-cream focus:border-jigger-gold outline-none"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-black mb-1">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#191919] border border-jigger-gold/30 px-4 py-2 text-jigger-cream focus:border-jigger-gold outline-none"
                />
              </div>

              <div>
                <label htmlFor="guests" className="block text-black mb-1">Number of Guests</label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#191919] border border-jigger-gold/30 px-4 py-2 text-jigger-cream focus:border-jigger-gold outline-none"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="time" className="block text-black mb-1">Time</label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#191919] border-jigger-gold/30 px-4 py-2 text-white focus:border-jigger-gold outline-none"
                >
                  <option value="">Select a time</option>
                  <option value="18:00">6:00 PM</option>
                  <option value="18:30">6:30 PM</option>
                  <option value="19:00">7:00 PM</option>
                  <option value="19:30">7:30 PM</option>
                  <option value="20:00">8:00 PM</option>
                  <option value="20:30">8:30 PM</option>
                  <option value="21:00">9:00 PM</option>
                  <option value="21:30">9:30 PM</option>
                  <option value="22:00">10:00 PM</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-black mb-1">Special Requests (Optional)</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-[#191919] border border-jigger-gold/30 px-4 py-2 text-jigger-cream focus:border-jigger-gold outline-none"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-[#191919] text-white font-medium hover:bg-transparent hover:text-jigger-gold border border-jigger-gold transition-colors mt-10"
              >
                Submit Reservation
              </button>
            </div>
          </form>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Reservations;