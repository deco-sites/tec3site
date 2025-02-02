import Image from "apps/website/components/Image.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";

/**
 * @title {{{title}}}
 */
export interface Strategy {
  title: string;
  description: string;
}

interface Props {
  background: ImageWidget;
  title: string;
  /** @maxItems 4 */
  strategies: Strategy[]
  mockup: ImageWidget;
}

export default function Section({ background, title, strategies, mockup }: Props) {
  return (
    <div className="w-full relative mb-48">
      <div className="absolute h-full w-full -z-10 overflow-hidden rounded-tr-[100px] rounded-bl-[100px]">
        <Image
          width={1920}
          className="min-h-screen h-full w-full object-cover"
          src={background}
          alt={background}
        />

        <div className="bg-gradient-to-r from-[#F21F0FE5] to-[#CD7108DA] absolute top-0 left-0 right-0 w-full h-full z-10" />
      </div>

      <div className="z-50 py-10 px-4 text-white lg:p-32">
        <h2 className="text-xs font-bold uppercase mb-6 lg:text-[26px] lg:mb-8">{title}</h2>

        <div className="grid grid-cols-2 gap-4 mb-8 lg:grid-cols-4 lg:mb-44">
          {
            strategies.map((strategy) => (
              <fieldset className="border-2 border-white p-2 py-1 pb-2">
                <legend className="px-1 text-[10px] font-bold uppercase lg:text-xl">{strategy.title}</legend>

                <p className="text-xs lg:text-xl">{strategy.description}</p>
              </fieldset>
            ))
          }
        </div>

        <div className="grid grid-cols-2">
          <div />

          {/* MOCKUP */}
          <Image
            width={945}
            height={610}
            src={mockup}
            className="w-[238px] h-[161px] absolute bottom-0 left-0 transform translate-y-5 object-cover lg:w-[945px] lg:h-[610px] lg:translate-y-28"
          />

          {/* TODO: carousel */}
          <div className="w-full h-44 bg-red-500 lg:h-80"></div>
        </div>
      </div>
    </div>
  )
}