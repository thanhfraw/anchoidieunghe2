import { format } from "date-fns";
import emailjs from "emailjs-com";
import PulsatingButton from "./ui/pulsating-button";
import { AnimatedSubscribeButton } from "./ui/animated-subscribe-button";
import { useState } from "react";

interface DateInfoProps {
  datename: string;
  dateTime: Date | null;
  activity: string;
  outfit: string;
}

function DateInfo({ datename, dateTime, activity, outfit }: DateInfoProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const date = dateTime || new Date();
  const formattedDate = format(date, "EEE MMM dd yyyy HH:mm:ss");


    console.log(formattedDate);
  const handleSubmit = () => {
    if (isSubmitting || isSubmitted) return; // Prevent multiple submissions
    if (!datename || !dateTime || !activity || !outfit) {
      
      alert("Please fill in all the fields.");

      return;
    }

    setIsSubmitting(true);

    // Prepare email parameters
    const templateParams = {
      datename,
      dateTime: formattedDate ? formattedDate : "No date",
      activity,
      outfit,
    };

    // Send email using EmailJS
    emailjs
      .send(
        "service_7coty2g", // Replace with your EmailJS Service ID
        "template_ncn4xlq", // Replace with your EmailJS Template ID
        templateParams,
        "NI4ltYSiXTkw3nfPy" // Replace with your EmailJS User ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setIsSubmitting(false);
          setIsSubmitted(true);
        },
        (error) => {
          console.log("FAILED...", error);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className="flex flex-col">
      <div className="bg-pink-50 p-6 rounded-lg shadow-md w-full mx-auto">
        <h2 className="text-2xl font-bold text-pink-700 mb-4 text-center">
          💖 Date Information 💖
        </h2>

        <div className="flex items-center mb-4">
          <span className="text-pink-500 text-lg mr-2">💌</span>
          <p className="text-lg font-semibold">
            <span className="text-pink-700">Name of Our Date:</span> {datename}
          </p>
        </div>

        <div className="flex items-center mb-4">
          <span className="text-pink-500 text-lg mr-2">📅</span>
          <p className="text-lg font-semibold">
            <span className="text-pink-700">Date:</span>{" "}
            {dateTime ? format(dateTime, "EEEE, MMMM dd, yyyy") : "No date"}
          </p>
        </div>

        <div className="flex items-center mb-4">
          <span className="text-pink-500 text-lg mr-2">⏰</span>
          <p className="text-lg font-semibold">
            <span className="text-pink-700">Time:</span>{" "}
            {dateTime ? format(dateTime, "hh:mm a") : "No time selected"}
          </p>
        </div>

        <div className="flex items-center mb-4">
          <span className="text-pink-500 text-lg mr-2">🎉</span>
          <p className="text-lg font-semibold">
            <span className="text-pink-700">Activity:</span> {activity}
          </p>
        </div>

        <div className="flex items-center">
          <span className="text-pink-500 text-lg mr-2">👗</span>
          <p className="text-lg font-semibold">
            <span className="text-pink-700">Outfit:</span> {outfit}
          </p>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <PulsatingButton
          onClick={handleSubmit}
          disabled={isSubmitting || isSubmitted} // Disable button after submission
          className={`  font-semibold shadow-md transition-all duration-300 ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : isSubmitted
              ? "bg-green-500 text-white"
              : "bg-pink-50 text-white hover:bg-pink-50"
          }`}
          pulseColor="#FF69B4"
        >
          <AnimatedSubscribeButton
            subscribeStatus={isSubmitted}
            initialText={"Confirm Date Plan"}
            changeText={"Confirmed"}
            buttonColor="#FF69B4"

          />
        </PulsatingButton>
      </div>
    </div>
  );
}

export default DateInfo;
