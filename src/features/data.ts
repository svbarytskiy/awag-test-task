import logo1 from "@/assets/logo1.webp";
import logo2 from "@/assets/logo2.webp";
import logo3 from "@/assets/logo3.webp";
import avatar1 from "@/assets/avatar1.webp";
import avatar2 from "@/assets/avatar2.webp";
import avatar3 from "@/assets/avatar3.webp";

export interface Review {
  company: string;
  text: string;
  name: string;
  position: string;
  logo: string;
  avatar: string;
}

export const reviews: Review[] = [
  {
    logo: logo1,
    avatar: avatar1,
    company: "Global Innovations Inc.",
    text: "Sales Fortuna made managing sales easier and helped us focus on customers. Its tools have been crucial for our growth and client satisfaction.",
    name: "Ethan Morgan",
    position: "Founder and CEO, Serene Living Products",
  },
  {
    logo: logo2,
    avatar: avatar2,
    company: "Tech Solutions Co.",
    text: "Sales Fortuna has made sales so much easier for us. It saves time, simplifies the whole process, and helps us land more deals without extra hassle.",
    name: "Olivia Hayes",
    position: "Owner, Starlight Creations",
  },
  {
    logo: logo3,
    avatar: avatar3,
    company: "Creative Marketing Agency",
    text: "Sales Fortuna has simplified our lead generation, helping us attract qualified prospects effortlessly and drive consistent growth.",
    name: "Alexander Reed",
    position: "Co-Founder, Opulent Living Group",
  },
  {
    logo: logo2,
    avatar: avatar2,
    company: "Future Enterprises",
    text: "Sales Fortuna has made sales so much easier for us. It saves time, simplifies the whole process, and helps us land more deals without extra hassle.",
    name: "Olivia Hayes",
    position: "Owner, Starlight Creations",
  },
  {
    logo: logo3,
    avatar: avatar3,
    company: "Innovate Ltd.",
    text: "Sales Fortuna has made sales so much easier for us. It saves time, simplifies the whole process, and helps us land more deals without extra hassle.",
    name: "Alexander Reed",
    position: "Co-Founder, Opulent Living Group",
  },
];
