import Image from "apps/website/components/Image.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";

interface Props {
  title: string;
  description: string;
  background: ImageWidget;
}

export default function Section({ title, description, background }: Props) {
  // return (
  //   <div className="pt-52 pb-32 px-4 w-full bg-red-400 text-white rounded-bl-[100px]">
  //     <h1 className="text-[40px] font-bold max-w-6xl mx-auto text-center mb-10">{title}</h1>
  //     <h2 className="text-2xl max-w-6xl mx-auto text-center">{description}</h2>
  //   </div>
  // )
  return (
    <div className="relative pt-28 md:pt-52 pb-28 md:pb-32 px-4 w-full text-white rounded-bl-[100px] mb-32">
      <div className="absolute h-full w-full -z-10 top-0 left-0 right-0 rounded-bl-[100px] overflow-hidden">
        <Image
          width={1920}
          className="h-full w-full object-cover"
          src={background}
          alt={background}
        />

        <div className="bg-gradient-to-b from-[#F21F0FCC] to-[#CD7108CC] absolute top-0 left-0 right-0 w-full h-full z-10" />
      </div>

      <h1 className="text-[40px] font-bold max-w-6xl mx-auto text-center mb-10">{title}</h1>
      <h2 className="text-2xl max-w-6xl mx-auto text-center">{description}</h2>
    </div>
  )
}