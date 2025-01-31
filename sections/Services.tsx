import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  services: {
    icon: ImageWidget;
    title: string;
    description: string;
    cta?: string
  }[]
}

export default function Section({ services }: Props) {
  return (
    <section className="mb-32 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 px-4">
      {
        services.map((service, idx) => (
          <div className={`shadow-[0_4px_20px_0_#00000040] flex flex-col gap-4 justify-between md:max-w-[584px] min-h-[306px] w-full h-full p-8 bg-white ${idx % 2 === 0 && "md:justify-self-end"}`}>
            <div className="flex items-center gap-4">
              <Image
                width={100}
                src={service.icon}
                className="max-w-24 w-full max-h-24 h-full object-cover"
              />

              <h3 className="font-semibold text-xl uppercase">{service.title}</h3>
            </div>

            <p className="text-base">{service.description}</p>

            <a
              href={service.cta}
              className="bg-gradient-to-r from-[#F81504] to-[#FF5642] text-white px-4 py-2 self-center"
            >
              {service.cta ?? "Fale com um especialista"}
            </a>
          </div>
        ))
      }
    </section>
  )
}