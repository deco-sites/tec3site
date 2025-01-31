import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

/**
 * @title {{{title}}}
 */
export interface Feature {
  icon: ImageWidget;
  title: string;
  description: string;
}

export interface Props {
  title: string;
  logo: ImageWidget;
  background: ImageWidget;
  cta: string
  /** @maxItems 4 */
  features?: Feature[]
}

export default function HeroFlats({
  title,
  logo,
  background,
  features,
  cta
}: Props) {
  return (
    <div className="h-full relative">
      <div className="absolute h-full w-full -z-10">
        <Image
          width={1920}
          className="w-full h-full object-cover"
          src={background}
          alt={background}
        />

        <div className="bg-gradient-to-b from-[#F7362D99] to-[#5F020099] absolute top-0 left-0 right-0 w-full h-full z-10" />
      </div>

      <div className="z-50 text-white px-4 lg:px-32 py-40 lg:py-64 relative mb-20 lg:mb-40">
        <Image
          width={424}
          height={130}
          class="w-full h-full max-w-[192px] max-h-[60px] mb-8 lg:mb-10 lg:max-w-[424px] lg:max-h-[130px]"
          src={logo}
          alt={logo}
        />

        <h2 className="uppercase text-lg font-bold mb-4 lg:mb-14 leading-1 lg:text-4xl">
          {title}
        </h2>

        <button className="px-4 py-2 border border-white bg-transparent hover:bg-white hover:text-black transition">
          {cta}
        </button>

        {/* FEATURES */}
        {
          features && (
            <section className="absolute bottom-0 left-0 right-0 max-w-[1600px] w-full transform translate-y-1/2 mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 px-4">
              {
                features.map((feature, idx) => (
                  <div className={`bg-[#F7362D] grid grid-cols-[auto_1fr] items-center gap-2 p-2 rounded-md ${idx >= 2 && "hidden lg:grid"}`}>
                    <Image
                      width={40}
                      height={40}
                      class="w-full h-full max-w-10 max-h-10 lg:max-w-[72px] lg:max-h-[72px]"
                      src={feature.icon}
                      alt={feature.icon}
                    />

                    <h3 className="text-xs uppercase lg:text-xl">{feature.title}</h3>

                    <p className="text-xs col-span-full lg:text-base lg:col-start-2">{feature.description}</p>
                  </div>
                ))
              }
            </section>
          )
        }
      </div>
    </div>
  )
}
