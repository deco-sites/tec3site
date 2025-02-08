import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import CasesCarousel from "site/components/CasesCarousel.tsx";

interface Case {
  mockup: ImageWidget;
  link: string;
}

interface Props {
  title: string;
  description: string;
  /** @maxItems 4 */
  cases: Case[]
  cta?: string;
}

export default function Section({ title, description, cases, cta = "Ver mais" }: Props) {
  return (
    <div className="p-4 mb-32 bg-[#cbcbcb41] lg:py-8">
      <h2 class="mb-3 text-sm leading-none font-bold inline-block uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#F7362D] to-[#ED8123] lg:px-28 lg:text-2xl">
        {title}
      </h2>

      <p className="text-xs mb-4 max-w-[746px] lg:px-28 lg:text-xl">{description}</p>

      <div className="w-full mb-8 lg:h-fit lg:grid lg:grid-cols-4">
        <div className="lg:hidden">
          <CasesCarousel cazes={cases} />
        </div>

        {
          cases.map((c) => (
            <a
              href="/portifolio"
              className="hidden lg:block"
            >
              <Image
                width={425}
                height={425}
                src={c.mockup}
                className="max-w-[425px] max-h-[425px] w-full h-full"
              />
            </a>
          ))
        }
      </div>

      <a
        href="/portifolio"
        className="block w-fit py-2 px-14 text-white text-xs mx-auto bg-gradient-to-r from-[#CD6209] to-[#F81504] lg:text-xl"
      >
        {cta}
      </a>
    </div>
  )
}