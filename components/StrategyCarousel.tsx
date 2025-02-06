import Icon from "../components/ui/Icon.tsx";
import Slider from "../components/ui/Slider.tsx";
import { useId } from "../sdk/useId.ts";
import Star from "site/components/icons/Star.tsx";

export interface Reviews {
  name: string;
  description: string;
  stars: 1 | 2 | 3 | 4 | 5;
}

export interface Props {
  reviews: Reviews[];
}

function SliderItem({ review, id }: { review: Reviews; id: string }) {
  return (
    <div
      id={id}
      className="bg-[#eaddea36] flex flex-col items-center justify-center gap-4 lg:gap-7 text-center w-[200px]"
    >
      <div className="flex items-center gap-2 shrink-0">
        {Array.from({ length: review.stars }).map((_, index) => (
          <Star key={index} className="text-yellow-400" />
        ))}
      </div>

      <p className="text-sm lg:text-xl">{review.description}</p>

      <p className="text-base lg:text-xl uppercase">{review.name}</p>
    </div>
  );
}

export default function StrategyCarousel(props: Props) {
  const id = useId();
  const { reviews } = { ...props };

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
          {reviews?.map((strategy, index) => (
            <Slider.Item
              index={index}
              class="carousel-item"
            >
              <SliderItem
                review={strategy}
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
