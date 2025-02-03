import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

/**
 * @title {{{title}}}
 */
interface Platform {
  logo: ImageWidget;
  title: string;
  description: string;
}

interface Props {
  title: string;
  description: string;
  /** @maxItems 4 */
  platforms: Platform[]
}

export default function Section({ title, description, platforms }: Props) {
  return (
    <div className="px-4 mb-32 lg:grid lg:grid-cols-2 lg:gap-8">
      <div className="place-self-center">
        <h2 className="text-xs uppercase mb-4 lg:mb-11 max-w-[333px] mx-auto text-center lg:text-[30px] leading-none lg:max-w-[576px]">{title}</h2>
        <p className="text-xs mb-16 text-center lg:max-w-[630px] lg:mx-auto lg:text-xl lg:mb-0">{description}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:gap-8">
        {
          platforms.map((platform, idx) => (
            <div className={`bg-[#eaddea36] shadow-[4px_4px_10px_0_#00000033] p-4 max-w-[373px] ${idx % 2 === 0 && "justify-self-end"}`}>
              <Image
                src={platform.logo}
                width={180}
                className="max-w-20 w-full mx-auto mb-3 lg:max-w-44"
              />

              <h3 className="uppercase text-[10px] text-center mb-3 lg:text-base lg:mb-4">{platform.title}</h3>

              <p className="text-[10px] text-center mb-3 lg:text-base lg:mb-4 lg:max-w-[331px] lg:mx-auto">{platform.description}</p>

              <a
                href="/portifolio"
                className="block w-fit py-1 px-8 text-white text-xs mx-auto bg-gradient-to-r from-[#CD6209] to-[#F81504] lg:text-sm"
              >
                Saiba mais
              </a>
            </div>
          ))
        }
      </div>
    </div>
  )
}