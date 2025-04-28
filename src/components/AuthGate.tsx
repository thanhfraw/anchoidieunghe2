// src/components/AuthGate.tsx
import { useState } from "react";

const AuthGate = ({ onAuthSuccess }: { onAuthSuccess: () => void }) => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (code.trim() === "KHONGNON") {
      onAuthSuccess();
    } else {
      setError("Invalid code. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-sm rounded-lg bg-[#191919] text-jigger-cream p-6 md:p-8 space-y-4">
        {/* <h2 className="text-2xl font-serif text-center mb-4 text-jigger-gold">
          Enter Code
        </h2> */}

        {/* Input Group */}
        <div>
          <input
            id="codeInput"
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value.toUpperCase())}
            className="p-3 border border-jigger-gold bg-[#191919]
            text-white rounded-md w-full placeholder-current 
            focus:outline-none focus:ring-2 focus:ring-jigger-gold 
            focus:border-transparent transition duration-150 ease-in-out"
            placeholder="e.g. ANDY"
          />
          {/* Error Message */}
          {error && <p className="text-red-400 text-sm mt-3">{error}</p>}
        </div>


        {/* Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-jigger-gold text-jigger-dark px-4 py-3 rounded-md font-semibold hover:bg-transparent hover:text-jigger-gold border border-jigger-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-jigger-gold focus-visible:ring-offset-jigger-dark transition duration-150 ease-in-out"
        >
          Enter
        </button>
      </div>
    </div>
  );
};

export default AuthGate;
