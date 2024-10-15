"use client";

import Image from "next/image";

const Admission = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        {/* Admission Picture Section */}
        <div className="relative mb-10">
          <Image
            src="/images/admission/admission-image.jpg"
            alt="Admission at Oscca Media College"
            width={1200}
            height={500}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Admission Information Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-center mb-6">ONLINE ADMISSION</h2>
          <p className="text-lg font-semibold mb-4">APPLICATION PROCESS:</p>
          <ul className="list-disc list-inside mb-4 text-lg">
            <li>Pay GH¢ 200 non-refundable application form fee.</li>
            <li>Fill and submit the form online.</li>
            <li>Print the application form you submitted online.</li>
            <li>Add Passport Picture.</li>
            <li>
              Submit them to our admission office at Oscca Media College, Tema
              Community 6.
            </li>
          </ul>
          <p className="text-red-500 font-semibold mb-6">
            NB: if any problem call our admission hotline +233 247877483
          </p>
        </div>

        {/* Start Registration Button */}
        <div className="flex justify-center">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700">
            Start Registration
          </button>
        </div>
      </div>
    </section>
  );
};

export default Admission;