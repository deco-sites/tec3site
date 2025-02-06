import Image from "apps/website/components/Image.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";
import StrategyCarousel from "site/components/StrategyCarousel.tsx";

/**
 * @title {{{title}}}
 */
export interface Strategy {
  title: string;
  description: string;
}

/**
 * @title {{{name}}}
 */
interface Review {
  name: string;
  description: string;
  stars: 1 | 2 | 3 | 4 | 5;
}

interface Props {
  background: ImageWidget;
  title: string;
  /** @maxItems 4 */
  strategies: Strategy[];
  mockup: ImageWidget;
  reviews: Review[];
}

export default function Section(
  { background, title, strategies, mockup, reviews }: Props,
) {
  return (
    <>
      <div className="w-full relative mb-48">
        <div className="absolute h-full w-full -z-10 overflow-hidden rounded-tr-[100px] rounded-bl-[100px]">
          <Image
            width={1920}
            className="min-h-screen h-full w-full object-cover"
            src={background}
            alt={background}
          />

          <div className="bg-gradient-to-b from-[#F21F0F] to-[#CD710899] absolute top-0 left-0 right-0 w-full h-full z-10" />
        </div>

        <div className="z-50 py-10 px-4 text-white lg:p-32">
          <h2 className="text-xs font-bold uppercase mb-6 lg:text-[26px] lg:mb-8">
            {title}
          </h2>

          <div className="grid grid-cols-2 gap-4 mb-8 lg:grid-cols-4 lg:mb-44">
            {strategies.map((strategy) => (
              <fieldset className="border-2 border-white p-2 py-1 pb-2">
                <legend className="px-1 text-[10px] font-bold uppercase lg:text-xl">
                  {strategy.title}
                </legend>

                <p className="text-xs lg:text-xl">{strategy.description}</p>
              </fieldset>
            ))}
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
            <div className="w-full">
            </div>
          </div>
        </div>
      </div>
      <StrategyCarousel reviews={reviews} />
    </>
  );
}
