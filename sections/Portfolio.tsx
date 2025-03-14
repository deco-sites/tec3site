import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
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

interface Props {
  title: string;
  description: string;
  background: Background;
  projects: {
    mockup: ImageWidget;
    title: string;
    description: string;
  }[]
}

export default function Section({ title, description, background, projects }: Props) {
  return (
    <div className="relative pt-28 md:pt-52 px-4 w-full min-h-screen text-white">
      <div className="absolute h-full w-full -z-10 top-0 left-0 right-0">
        <Image
          width={1920}
          className="h-full w-full object-cover"
          src={background.image}
          alt={background.image}
        />

        <div
          className="bg-gradient-to-b absolute top-0 left-0 right-0 w-full h-full z-10"
          style={{
            backgroundImage: `linear-gradient(to bottom, ${hexWithOpacity("#F81504", background.gradient_opacity)} 0%, ${hexWithOpacity("#CD7108", background.gradient_opacity)} 100%)`
          }}
        />
      </div>

      <h1 className="text-xl lg:text-[40px] font-bold max-w-6xl mx-auto text-center mb-10 uppercase">{title}</h1>
      <h2 className="text-sm lg:text-2xl max-w-6xl mx-auto text-center">{description}</h2>

      <div className="flex flex-col gap-36 lg:gap-24 lg:py-36 lg:px-32 pt-44 pb-20 lg:pt-40">
        {
          projects.map((project, idx) => (
            <div key={idx} className={`relative bg-gradient-to-r from-white to-gray-100 text-black p-8 rounded-xl shadow-[5px_5px_10px_0_#00000059] lg:max-w-[1100px] lg:min-h-[320px] lg:pl-[400px] lg:flex lg:flex-col lg:justify-center ${idx % 2 !== 0 && "self-end !pl-8 lg:pr-[400px]"}`}>
              <Image
                width={532}
                height={532}
                className={`absolute top-0 left-1/2 transform -translate-y-2/3 -translate-x-1/2 max-w-[230px] max-h-[230px] object-fit lg:max-w-[532px] lg:max-h-[532px] lg:left-0 lg:top-[45%] lg:-translate-x-[16%] lg:-translate-y-1/2 ${idx % 2 !== 0 && "lg:left-full lg:top-[45%] lg:-translate-x-[84%] lg:-translate-y-1/2"}`}
                src={project.mockup}
                alt={project.title}
              />
              <h3 className="text-lg uppercase mt-8 lg:mt-0 mb-4 text-center lg:text-start lg:text-2xl">{project.title}</h3>
              <p className="text-sm text-center lg:text-start lg:text-xl">{project.description}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}