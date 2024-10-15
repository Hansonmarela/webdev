import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About"
        description="At Oscca Media College, we are passionate about empowering the next generation of media professionals. With a commitment to hands-on learning, we provide our students with the skills and knowledge to excel in the ever-evolving media industry. Our curriculum covers diverse fields, from film production and photography to digital marketing and graphic design.
        Through expert guidance, state-of-the-art resources, and real-world projects, we help students transform their creative potential into successful careers. Whether you’re looking to break into the media industry or refine your craft, Oscca Media College is where your journey begins."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
