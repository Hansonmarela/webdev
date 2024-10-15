import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Top 5 Creative Tools Every Media Student Should Know",
    paragraph:
      "Unlock your potential with these essential tools for video editing, graphic design, and digital content creation.",
    image: "/images/blog/blog-1.png",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2024",
  },
  {
    id: 2,
    title: "How Oscca Media College Prepares You for a Career in Media",
    paragraph:
      "Explore the unique learning experience at Oscca Media College and how it equips you with industry-relevant skills.",
    image: "/images/blog/blog-2.png",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["video"],
    publishDate: "2024",
  },
  {
    id: 3,
    title: "10 Ways to Elevate Your Storytelling in Film and Media",
    paragraph:
      "Master techniques in cinematography, scriptwriting, and editing to bring your stories to life.",
    image: "/images/blog/blog-3.png",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2024",
  },
];
export default blogData;
