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
    <div id={id} className="h-[198px] w-[277px] relative group">
      <div className="absolute h-full w-full -z-10">
        <Image
          width={277}
          className="w-full h-full object-cover"
          src={caze.mockup}
        />

        <div className="bg-gradient-to-b from-[#F7362D99] to-[#5F020099] absolute top-0 left-0 right-0 w-full h-full z-10 transition-all duration-300 group-hover:from-[#00000099] group-hover:to-[#00000099]" />
      </div>

      <div className="z-50 text-white h-full flex flex-col items-center justify-center text-center p-8">
        <p className="text-xs lg:text-sm h-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:h-auto mt-2">
          aaaaa
        </p>
      </div>
    </div>
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
          class="carousel carousel-center w-full col-span-full row-span-full gap-7 mb-4"
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
