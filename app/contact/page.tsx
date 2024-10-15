import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Get in Touch"
        description="Have questions or need assistance? We’re here to help! Whether you're interested in our courses, admissions, or have any inquiries, reach out to us. Our team is ready to provide the support and information you need to kickstart your media journey."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
