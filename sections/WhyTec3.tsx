import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

/**
 * @title {{{title}}}
 */
interface Feature {
  icon: ImageWidget;
  title: string;
  description: string;
}

/**
 * @title {{{title}}}
 */
interface Slide {
  background: ImageWidget;
  title: string;
  description: string;
  cta: string;
}

interface Props {
  title: string;
  description: string;
  /** @maxItems 4 */
  features: Feature[];
  subtitle: string;
  image: ImageWidget;
  /** @maxItems 4 */
}

export default function Section({ title, description, features, subtitle, image }: Props) {
  return (
    <div className="mb-20">
      <section className="lg:relative">
        <div className="px-4 lg:px-32 mb-4 lg:mb-16">
          <h2 class="mb-1 lg:mb-4 text-xl lg:text-[40px] leading-none font-bold inline-block uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#F7362D] to-[#ED8123]">
            {title}
          </h2>
          <p className="text-xs lg:text-xl lg:w-[60%]">{description}</p>
        </div>

        <div className="shadow-[5px_5px_20px_0_#00000026] rounded-md rounded-tl-none rounded-bl-none p-4 lg:p-16 lg:pl-32 w-[85%] lg:w-1/2 flex flex-col gap-4 lg:gap-16 mb-8 lg:mb-24">
          {
            features.map((feature) => (
              <div className="flex gap-4 lg:gap-8 items-center">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={48}
                  height={48}
                  className="w-8 h-8 lg:w-12 lg:h-12"
                />

                <div>
                  <h3 className="text-xs lg:text-xl lg:mb-1 font-bold uppercase">{feature.title}</h3>
                  <p className="text-xs lg:text-xl col-span-full">{feature.description}</p>
                </div>
              </div>
            ))
          }
        </div>

        {/* IMAGE CONTAINER */}
        <div className="flex items-center w-full h-[261px] relative overflow-x-clip mb-8 lg:absolute lg:top-1/2 lg:right-0 lg:transform lg:-translate-y-1/2">
          <h3 className="max-w-[50%] pl-4 text-xs uppercase font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#F7362D] via-[#A73B2B] to-[#F16F03] lg:hidden"
          >
            {subtitle}
          </h3>

          <div
            className="w-[287px] h-[269px] rounded-[100%] object-cover absolute right-0 top-1/2 transform translate-x-[28%] -translate-y-[52%] bg-gradient-to-b from-[#FF3531] to-[#FF9762] z-10 lg:w-[815px] lg:h-[760px] lg:translate-x-[28%] lg:-translate-y-[50%]"
          />

          <Image
            src={image}
            alt={subtitle}
            width={300}
            height={300}
            className="w-[278px] h-[261px] rounded-[100%] object-cover absolute right-0 top-1/2 transform translate-x-[30%] -translate-y-1/2 z-20 lg:w-[790px] lg:h-[735px]"
          />
        </div>
      </section>

      <div>
        <h3 className="lg:w-[80%] pl-4 lg:px-32 text-xs lg:text-xl uppercase font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F7362D] via-[#A73B2B] to-[#F16F03] hidden lg:inline-block lg:mb-8"
        >
          {subtitle}
        </h3>

        {/* TODO: carousel */}
        <div className="bg-red-500 w-full h-48 lg:h-80">

        </div>
      </div>
    </div>
  )
}