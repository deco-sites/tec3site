import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Person from "site/components/icons/Person.tsx";
import Mail from "site/components/icons/Mail.tsx";
import { hexWithOpacity } from "site/helpers/hex.ts";

export interface Background {
    image: ImageWidget;
    /**
     * @maximum 100
     * @minimum 0
     * @title Gradient Opacity (0-100%)
     */
    gradient_opacity: number
}

export interface Props {
  background: Background;
  title?: string;
  description?: string;
}

export default function Footer({
    background,
    title = "Fale conosco",
    description = "Estamos a apenas um clique de transformar suas ideias em resultados"
}: Props) {
  return (
    <div className="w-full relative">
      <div className="absolute h-full w-full -z-10 overflow-hidden">
        <Image
          width={1920}
          className="min-h-screen h-full w-full object-cover"
          src={background.image}
          alt={background.image}
        />

        <div
          className="bg-gradient-to-r absolute top-0 left-0 right-0 w-full h-full z-10"
          style={{
            backgroundImage: `linear-gradient(to bottom, ${hexWithOpacity("#F21F0F", background.gradient_opacity)} 0%, ${hexWithOpacity("#CD7108", background.gradient_opacity)} 100%)`
          }}
        />
      </div>

      <div className="z-50 py-20 max-w-xl mx-auto px-4 text-white">
        <p className="uppercase text-xl text-center mb-3">{title}</p>
        <p className="text-base text-center mb-7">{description}</p>

        <form className="flex flex-col">
          <div className="relative w-full mb-8">
            <Person className="absolute left-2 top-1/2 transform -translate-y-1/2 fill-white" />
            <input
              type="text"
              name="email"
              id="email"
              placeholder="E-mail"
              className="w-full placeholder:text-white outline-none border-b border-b-white bg-transparent py-2 px-4 pl-10"
            />
          </div>

          <div className="relative w-full mb-8">
            <Mail className="absolute left-2 top-2 fill-white" />
            <textarea
              name="message"
              id="message"
              placeholder="Digite sua mensagem"
              rows={5}
              className="w-full placeholder:text-white outline-none border border-white rounded-lg bg-transparent py-2 px-4 pl-10 resize-none"
            />
          </div>

          <button type="submit" className="py-2 border border-white px-10 uppercase mx-auto hover:bg-white hover:text-black transition duration-300">Enviar</button>
        </form>
      </div>
    </div>
  );
}
