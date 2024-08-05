"use client";
import React from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/gmail.svg";
import tel from "../../public/tel.svg";  // Asegúrate de que este icono sea el correcto para LinkedIn
import GiftIcon from "../../public/gifterandi.gif"; // Asegúrate de que este es el archivo GIF animado
import Link from "next/link";
import Image from "next/image";

const Conect = () => {
    const phoneNumber = "524641055730"; // Número de teléfono en formato internacional
    const message = "Hola, me gustaría que trabajáramos juntos!";
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section
      id="contact"
      className="relative py-24 my-12 flex flex-col items-center justify-center"
    >
      {/* Fondo de gradiente */}
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -center-4 transform -translate-x-1/2 -translate-y-1/2"></div>
      
      {/* Contenido principal */}
      <div className="z-9 text-center ">
        <h5 className="text-xl font-bold text-white mb-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md mx-auto">
         Hello! I&apos;m currently looking for new opportunities, my email is always
          open, as well as my WhatsApp. Whether you have a question about my projects or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="flex justify-center gap-4 mb-4">
          <Link href="https://github.com/JenniferMich" passHref>
              <Image
                src={GithubIcon}
                alt="Github Icon"
                width={32}
                height={32}
                className="w-8 h-8" // Ajusta el tamaño de los íconos
              />
          </Link>
          <Link href="mailto:jceledon353@gmail.com" passHref >
              <Image
                src={LinkedinIcon}
                alt="Linkedin Icon"
                width={32}
                height={32}
                className="w-8 h-8" // Ajusta el tamaño de los íconos
              />
          </Link>
          <Link href={whatsappLink} passHref >
              <Image
                src={tel}
                alt="tel"
                width={32}
                height={32}
                className="w-8 h-8" // Ajusta el tamaño de los íconos
              />
          </Link>
        </div>
        {/* Ícono GIF animado alineado a la derecha */}
        <div className=" flex justify-center gap-4 mb-4">
          <Image
            src={GiftIcon}
            alt="Gift Icon"
            width={64} // Ajusta el tamaño del GIF según lo desees
            height={64} // Ajusta el tamaño del GIF según lo desees
            className="w-32 h-32" // Ajusta el tamaño del GIF según lo desees
          />
        </div>
      </div>
    </section>
  );
};

export default Conect;
