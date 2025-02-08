import { ImageWidget } from "apps/admin/widgets.ts";
import Icon from "../components/ui/Icon.tsx";
import Slider from "../components/ui/Slider.tsx";
import { useId } from "../sdk/useId.ts";
import Image from "apps/website/components/Image.tsx";

export interface Case {
  mockup: ImageWidget;
  link: string;
}

export interface Props {
  cazes: Case[];
}

function SliderItem({ caze, id }: { caze: Case; id: string }) {
  return (
    <a
      href={caze.link}
      className="h-64 w-full lg:h-fit"
      id={id}
    >
      <Image
        width={425}
        height={425}
        src={caze.mockup}
        className="max-w-[256px] max-h-[256px]  lg:max-w-[425px] lg:max-h-[425px] w-full h-full"
      />
    </a>
  );
}

export default function CasesCarousel(props: Props) {
  const id = useId();
  const { cazes } = { ...props };

  return (
    <div
      id={id}
      class="flex flex-col w-full"
    >
      <div className="flex flex-col items-center gap-2 lg:gap-8">
        <Slider
          class="carousel carousel-center w-full col-span-full row-span-full gap-4 lg:gap-7"
          rootId={id}
          infinite
        >
          {cazes?.map((c, index) => (
            <Slider.Item
              index={index}
              class="carousel-item"
            >
              <SliderItem
                caze={c}
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
