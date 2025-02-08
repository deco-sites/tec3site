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
      className="flex flex-col items-center justify-center gap-2 text-center w-[200px] lg:w-[360px] lg:gap-4"
    >
      <div className="flex items-center gap-2 shrink-0">
        {Array.from({ length: review.stars }).map((_, index) => (
          <Star key={index} className="text-yellow-400 w-[14px] h-[14px] lg:w-6 lg:h-6" />
        ))}
      </div>

      <p className="text-xs lg:text-xl">{review.description}</p>

      <p className="text-xs uppercase font-bold lg:text-xl">{review.name}</p>
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
          class="carousel carousel-start w-full col-span-full row-span-full gap-7 mb-4 lg:max-w-[720px]"
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
              id="ChevronLeft"
              strokeWidth={3}
              className="w-[14px] h-[14px] lg:w-6 lg:h-6"
            />
          </Slider.PrevButton>

          <Slider.NextButton class="shrink-0 flex items-center justify-center">
            <Icon
              id="ChevronRight"
              strokeWidth={3}
              className="w-[14px] h-[14px] lg:w-6 lg:h-6"
            />
          </Slider.NextButton>
        </div>
      </div>
    </div>
  );
}
