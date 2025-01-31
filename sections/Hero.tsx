import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Header from "site/sections/Header.tsx";

export interface Props {
  title: string;
  description: string;
  logo: ImageWidget;
  background: ImageWidget;
}

export default function HeroFlats({
  title = "Click here to tweak this text however you want.",
  description =
    "This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.",
  logo,
  background,
}: Props) {
  return (
    <div className="min-h-screen h-full relative">
      <div className="absolute h-full w-full -z-10 rounded-tl-[70px] rounded-br-[70px] overflow-hidden">
        <Image
          width={1920}
          className="min-h-screen h-full w-full object-cover"
          src={background}
          alt={background}
        />

        <div className="bg-gradient-to-b from-[#D10D0AD9] to-[#CD710882] absolute top-0 left-0 right-0 w-full h-full z-10" />
      </div>

      <div className="z-50 text-white rounded-tl-[70px] rounded-br-[70px]">
        <Header />

        <div className="grid grid-cols-[160px_1fr] gap-7 px-4">
          <Image
            width={640}
            class="w-full h-full"
            src={logo}
            alt={logo}
            decoding="async"
            loading="lazy"
          />

          <h2 className="h-fit w-fit text-lg uppercase justify-self-end self-end">
            {title}
          </h2>

          <p class="px-6 text-sm md:text-md leading-[150%] col-span-full">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
  // return (
  //   <nav class="lg:container lg:mx-auto min-h-screen text-white">
  //     <div className="absolute min-h-screen h-full w-full z-0 left-0 top-0 right-0">
  //       <Image
  //         width={1920}
  //         class="absolute h-full w-full object-cover z-0 left-0 top-0 right-0"
  //         src={background}
  //         alt={background}
  //         decoding="async"
  //         loading="lazy"
  //       />

  //       <div className="bg-gradient-to-b from-[#D10D0AD9] to-[#CD710882] absolute top-0 left-0 right-0 w-full h-full z-10" />
  //     </div>

  //     <Header />
  //     <div class="flex flex-col items-center gap-8">
  //       <div
  //         class={`flex w-full xl:container xl:mx-auto py-20 mx-5 md:mx-10 z-10 ${
  //           image
  //             ? PLACEMENT[placement]
  //             : "flex-col items-center justify-center text-center"
  //         } lg:py-36 gap-12 md:gap-20 items-center`}
  //       >
  //         {image && (
  //           <Image
  //             width={640}
  //             class="w-[366px] h-[433px]"
  //             src={image}
  //             alt={image}
  //             decoding="async"
  //             loading="lazy"
  //           />
  //         )}
  //         <div
  //           class={`mx-6 lg:mx-auto lg:w-full space-y-4 gap-4 ${
  //             image
  //               ? "lg:w-1/2 lg:max-w-xl"
  //               : "flex flex-col items-center justify-center lg:max-w-3xl"
  //           }`}
  //         >
  //           <div
  //             class="inline-block text-[30px] uppercase"
  //             dangerouslySetInnerHTML={{
  //               __html: title,
  //             }}
  //           >
  //           </div>
  //           <p class="text-lg md:text-md leading-[150%]">
  //             {description}
  //           </p>
  //           <div class="flex items-center gap-3">
  //             {cta?.map((item) => (
  //               <a
  //                 key={item?.id}
  //                 id={item?.id}
  //                 href={item?.href}
  //                 target={item?.href.includes("http") ? "_blank" : "_self"}
  //                 class={`font-normal btn btn-primary ${
  //                   item.outline && "btn-outline"
  //                 }`}
  //               >
  //                 {item?.text}
  //               </a>
  //             ))}
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </nav>
  // );
}
