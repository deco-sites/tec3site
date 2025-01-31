import Icon from "../components/ui/Icon.tsx";
import Slider from "../components/ui/Slider.tsx";
import { useId } from "../sdk/useId.ts";
import Star from "site/components/icons/Star.tsx";

/**
 * @titleBy alt
 */
export interface Testimonial {
  content: {
    name: string;
    description: string;
    stars: 1 | 2 | 3 | 4 | 5;
  };
}

export interface Props {
  title?: string;
  slides: Testimonial[];
}

const DEFAULT_PROPS = {
  title: "This is where you'll put your customer testimonials",
  slides: [
    {
      content: {
        description:
          "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
        name: "Name Surname",
        stars: 5
      },
    },
    {
      content: {
        description:
          "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
        name: "Name Surname",
        stars: 5
      },
    },
    {
      content: {
        description:
          "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
        name: "Name Surname",
        stars: 5
      },
    },
    {
      content: {
        description:
          "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
        name: "Name Surname",
        stars: 5
      },
    },
    {
      content: {
        description:
          "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
        name: "Name Surname",
        stars: 5
      },
    },
    {
      content: {
        description:
          "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
        name: "Name Surname",
        stars: 5
      },
    },
    {
      content: {
        description:
          "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
        name: "Name Surname",
        stars: 5
      },
    },
    {
      content: {
        description:
          "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
        name: "Name Surname",
        stars: 5
      },
    },
    {
      content: {
        description:
          "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
        name: "Name Surname",
        stars: 5
      },
    },
    {
      content: {
        description:
          "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
        name: "Name Surname",
        stars: 5
      },
    },
    {
      content: {
        description:
          "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
        name: "Name Surname",
        stars: 5
      },
    },
    {
      content: {
        description:
          "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
        name: "Name Surname",
        stars: 5
      },
    },
    {
      content: {
        description:
          "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
        name: "Name Surname",
        stars: 5
      },
    },
    {
      content: {
        description:
          "Showcase customer feedback that emphasizes your product or service's key features and addresses prospective clients' concerns. Display endorsements from customer groups that mirror your target audience.",
        name: "Name Surname",
        stars: 5
      },
    },
  ],
};

function SliderItem({ slide, id }: { slide: Testimonial; id: string }) {
  const { content } = slide;

  return (
    <div className="bg-[#CBCBCB22] shadow-[4px_4px_10px_0_#00000033]">
      <div
        id={id}
        className="rounded-br-[128px] rounded-bl-[128px] w-[257px] h-[257px] lg:w-[421px] lg:h-[421px] bg-[#eaddea36] flex flex-col items-center justify-center gap-4 lg:gap-7 text-center p-4 lg:p-8"
      >
        <div className="flex items-center gap-2 shrink-0">
          {Array.from({ length: content.stars }).map((_, index) => (
            <Star key={index} className="text-yellow-400" />
          ))}
        </div>

        <p className="text-sm lg:text-xl">{content.description}</p>

        <p className="text-base lg:text-xl uppercase">{content.name}</p>
      </div>
    </div>
  );
}

function Carousel(props: Props) {
  const id = useId();
  const { title, slides } = { ...DEFAULT_PROPS, ...props };

  return (
    <div
      id={id}
      class="min-h-min flex flex-col w-full px-4 py-12 lg:py-28"
    >
      <h2 class="text-center lg:pl-32 lg:text-start mb-16 text-2xl font-bold inline-block uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#F21F0F] to-[#CE5F03]">
        {title}
      </h2>

      <div className="flex items-center gap-2 lg:gap-8">
        <Slider.PrevButton class="shrink-0 flex items-center justify-center">
          <Icon
            size={24}
            id="ChevronLeft"
            strokeWidth={3}
          />
        </Slider.PrevButton>

        <Slider
          class="carousel carousel-center w-full col-span-full row-span-full gap-16 p-4"
          rootId={id}
          infinite
        >
          {slides?.map((slide, index) => (
            <Slider.Item
              index={index}
              class="carousel-item"
            >
              <SliderItem
                slide={slide}
                id={`${id}::${index}`}
              />
            </Slider.Item>
          ))}
        </Slider>

        <Slider.NextButton class="shrink-0 flex items-center justify-center">
          <Icon
            size={24}
            id="ChevronRight"
            strokeWidth={3}
          />
        </Slider.NextButton>
      </div>
    </div>
  );
}

export default Carousel;
