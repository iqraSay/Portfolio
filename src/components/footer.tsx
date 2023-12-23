import Image from "next/image";
import ig from "@/assets/ig.png";
import gh from "@/assets/gh.png";
import li from "@/assets/li.png";
import g from "@/assets/g.png";
import d from "@/assets/d.png";

const Footer = () => {
    return(
        <footer className="flex-col flex justify-center items-center mb-10 mt-40 sm:mt-56 md:mt-4" >
            <div className="flex items-center justify-center text-gray-300 py-4">

      <a href="#" className="mr-4">
        <Image src={gh} className="rounded-full w-8 h-8" alt="github"/>
        </a>
        <a href="https://www.linkedin.com/in/s%CA%9C%E1%B4%80%CA%99%E1%B4%87%E1%B4%87%CA%9C-f%E1%B4%80%E1%B4%9B%C9%AA%E1%B4%8D%E1%B4%80-s%E1%B4%80y%E1%B4%87%E1%B4%85/" className="mr-4">
        <Image src={li} className="rounded-lg w-8 h-8" alt="linkedin"/>
        </a>
        <a href="s.shabeehfatima@gmail.com" className="mr-4">
        <Image src={g} className=" w-8 h-8" alt="Gmail"/>
        </a>
        <a href="#" className="mr-4">
        <Image src={d} className="rounded-lg w-8 h-8" alt="Discord"/>
        </a>
        <a href="#" className="mr-4">
        <Image src={ig} className=" w-8 h-8" alt="Instagram"/>
        </a>
            </div>
        <h1 className=" text-gray-400 w-auto ">
            Copywrite© 2023| Made by Shabeeh Fatima
        </h1>
      </footer>
    );
}

export default Footer;