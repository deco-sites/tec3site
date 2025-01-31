import Image from "apps/website/components/Image.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";
import { Section } from "@deco/deco/blocks";

interface Props {
  header: Section;
  title: string;
  description: string;
  logo: ImageWidget;
  background: ImageWidget;
  /** @maxItems 3 */
  metrics?: {
    value: string
    label: string
  }[]
}

export default function HeroSobreNosSection({ title, description, logo, background, metrics }: Props) {
  return (
    <div className="min-h-screen h-full relative">
      <div className="absolute h-full w-full -z-10 rounded-tl-[70px] md:rounded-tl-none rounded-br-[70px] md:rounded-bl-[100px] md:rounded-br-none overflow-hidden">
        <Image
          width={1920}
          className="min-h-screen h-full w-full object-cover"
          src={background}
          alt={background}
        />

        <div className="bg-gradient-to-b from-[#D10D0AD9] to-[#CD710882] absolute top-0 left-0 right-0 w-full h-full z-10" />
      </div>

      <div className="pt-28 md:pt-40 z-50 text-white rounded-tl-[70px] md:rounded-tl-none rounded-br-[70px] md:rounded-bl-[100px] md:rounded-br-none pb-8">
        <div className="grid grid-cols-[160px_1fr] md:grid-cols-[auto_1fr] gap-7 md:gap-x-16 lg:gap-x-24 px-4 max-w-[1520px] mx-auto">
          <Image
            width={640}
            class="w-full h-full md:max-h-[333px] md:max-w-[266px] lg:max-h-[433px] lg:max-w-[366px] md:row-span-2"
            src={logo}
            alt={logo}
            decoding="async"
            loading="lazy"
          />

          <h2 className="h-fit w-fit text-lg uppercase justify-self-end self-end md:text-[30px] md:self-end md:justify-self-start md:max-w-[615px]">
            {title}
          </h2>

          <p class="text-sm md:text-md leading-[150%] col-span-full md:col-span-1 md:text-xl">
            {description}
          </p>

          <div className="col-span-full grid grid-cols-2 md:grid-cols-3 gap-4 mt-8 md:mt-16 lg:mt-28">
            {metrics?.map(({ value, label }, idx) => (
              <div key={label} className={`flex flex-col items-center ${idx === 0 && "col-span-full md:col-span-1"}`}>
                <span className="text-[60px] font-bold leading-none uppercase">{value}</span>
                <span className="text-base font-bold uppercase">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}