"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import ModalVideo from "react-modal-video";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  const handleModalOpen = () => {
    setOpen(true);
  };

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="We are ready to help"
          paragraph="At Oscca Media College, we provide personalized guidance and support, ensuring you succeed in your media journey. Whether you’re new to media or enhancing your skills, we are here to assist every step of the way."
          center
          mb="80px"
        />

        <div className="relative aspect-[77/40] items-center justify-center">
          {/* Local video */}
          <video
            src="/images/video/videomain.mp4"
            controls
            className="w-full h-full object-cover"
          />
        </div>

        {/* Separate button to trigger YouTube modal */}
        <button
          className="mt-5 px-4 py-2 bg-blue-600 text-white rounded"
          onClick={handleModalOpen}
        >
          Watch YouTube Video
        </button>

        {/* YouTube modal video */}
        <ModalVideo
          channel="youtube"
          autoplay={true}
          isOpen={isOpen}
          videoId="L61p2uyiMSo"
          onClose={() => setOpen(false)}
        />

        <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
      </div>
    </section>
  );
};

export default Video;
