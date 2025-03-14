import { ImageWidget } from "apps/admin/widgets.ts";
import Icon from "../components/ui/Icon.tsx";
import Slider from "../components/ui/Slider.tsx";
import { useId } from "../sdk/useId.ts";
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

export interface Solution {
  background: Background;
  title: string;
  description: string;
}

export interface Props {
  solutions: Solution[];
}

function SliderItem({ solution, id }: { solution: Solution; id: string }) {
  return (
    <div id={id} className="h-[198px] w-[277px] relative group">
      <div className="absolute h-full w-full -z-10">
        <Image
          width={277}
          className="w-full h-full object-cover"
          src={solution.background.image}
          alt={solution.background.image}
        />

        <div
            className="bg-gradient-to-b absolute top-0 left-0 right-0 w-full h-full z-10 transition-all duration-300 group-hover:from-[#00000099] group-hover:to-[#00000099]"
            style={{
              backgroundImage: `linear-gradient(to bottom, ${hexWithOpacity("#F7362D", solution.background.gradient_opacity)} 0%, ${hexWithOpacity("#5F0200", solution.background.gradient_opacity)} 100%)`
            }}
        />
      </div>

      <div className="z-50 text-white h-full flex flex-col items-center justify-center text-center p-8">
        <h3 className="text-sm lg:text-lg font-bold uppercase">{solution.title}</h3>

        <p className="text-xs lg:text-sm h-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:h-auto mt-2">
          {solution.description}
        </p>
      </div>
    </div>
  );
}

export default function SolutionsCarousel(props: Props) {
  const id = useId();
  const { solutions } = { ...props };

  return (
    <div
      id={id}
      class="flex flex-col w-full"
    >
      <div className="flex flex-col items-center gap-2 lg:gap-8">
        <Slider
          class="carousel carousel-center w-full col-span-full row-span-full gap-7 mb-4"
          rootId={id}
          infinite
        >
          {solutions?.map((solution, index) => (
            <Slider.Item
              index={index}
              class="carousel-item"
            >
              <SliderItem
                solution={solution}
                id={`${id}::${index}`}
              />
            </Slider.Item>
          ))}
        </Slider>

        <div className="flex items-center gap-4">
          <Slider.PrevButton class="shrink-0 flex items-center justify-center">
            <Icon
              size={24}
              id="ChevronLeft"
              strokeWidth={3}
            />
          </Slider.PrevButton>

          <Slider.NextButton class="shrink-0 flex items-center justify-center">
            <Icon
              size={24}
              id="ChevronRight"
              strokeWidth={3}
            />
          </Slider.NextButton>
        </div>
      </div>
    </div>
  );
}
