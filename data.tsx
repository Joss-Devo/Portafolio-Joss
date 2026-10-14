import { Wrench, BriefcaseBusiness, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Phone, Facebook, Instagram, User } from "lucide-react";
import { text } from "stream/consumers";
export const itemsNavbar = [
    {
        id: 1,
        title: <h1 className="text-[11px]" > Home</h1>,
        icon: <HomeIcon size={25} color="#ffffff" strokeWidth={1}  />,
        link: "/",
    },
    {
        id: 2,
        title:<h1 className="text-[11px]" > Sobre mí</h1>,
        icon:<UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about",
        
        
    },
    {
        id: 3,
        title: <h1 className="text-[11px]" > Habilidades</h1>,
        icon: <Wrench size={25} color="#fff" strokeWidth={1} />,
        link: "/skills",
    },
    {
        id: 4,
        title: <h1 className="text-[11px]" > Portafolio</h1>,
        icon: <BriefcaseBusiness size={25} color="#fff" strokeWidth={1} />,
        link: "/portafolio",
    },
    {
        id: 5,
        title: <h1 className="text-[11px]" > Contacto</h1>,
        icon: <Phone size={25}  color="#fff" strokeWidth={1} />,
        link: "/contac",
        
    },
];

export const socialNetworks = [

  {
    id: 2,
    logo: <Linkedin size={30} strokeWidth={1} />,
    src: "https://www.linkedin.com/in/jose-alberto-ascencion-silvestre-ba55b533a/",
  },
  {
    id: 3,
    logo: <Twitter size={30} strokeWidth={1} />,
    src: "#!",
  },
  {
    id: 4,
    logo: <Facebook size={30} strokeWidth={1} />,
    src: "#!",
  },
  {
    id: 5,
    logo: <Instagram size={30} strokeWidth={1} />,
    src: "#!",
  },
 
];
