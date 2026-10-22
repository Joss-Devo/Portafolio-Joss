import { Wrench, BriefcaseBusiness, HomeIcon, UserRound, Linkedin, Phone,Github, User } from "lucide-react";
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
    id: 1,
    logo: <Linkedin size={30} strokeWidth={1} />,
    src: "https://www.linkedin.com/in/jose-alberto-ascencion-silvestre-ba55b533a/",
  },
  {
    id: 2,
    logo: <Github size={30} strokeWidth={1} />,
    src: "https://github.com/Joss-Devo",
  }
 
 
 
];
