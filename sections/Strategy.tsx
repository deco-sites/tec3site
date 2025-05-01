import Image from "apps/website/components/Image.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";
import StrategyCarousel from "site/components/StrategyCarousel.tsx";
import { hexWithOpacity } from "site/helpers/hex.ts";

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
  background: Background;
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
            src={background.image}
            alt={background.image}
          />

          <div
            className="bg-gradient-to-b absolute top-0 left-0 right-0 w-full h-full z-10"
            style={{
              backgroundImage: `linear-gradient(to bottom, ${hexWithOpacity("#F21F0F", background.gradient_opacity)} 0%, ${hexWithOpacity("#CD7108", background.gradient_opacity)} 100%)`
            }}
          />
        </div>

        <div className="z-50 py-10 pb-6 px-4 text-white lg:p-32">
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
        </div>
      </div>
    </>
  );
}
