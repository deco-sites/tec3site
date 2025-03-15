import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../components/ui/Icon.tsx";
import House from "../components/icons/House.tsx"

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Nav {
  logo?: {
    src?: ImageWidget;
    alt?: string;
  };
  navigation?: {
    links: {
      label?: string;
      url?: string;
    }[];
  };
}

export default function Header({
  logo = {
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04",
    alt: "Logo",
  },
  navigation = {
    links: [
      { label: "Home", url: "/" },
      { label: "About us", url: "/" },
      { label: "Princing", url: "/" },
      { label: "Contact", url: "/" },
    ],
  },
}: Nav) {
  return (
    <nav class="drawer drawer-end absolute top-0 z-[999999] text-white">
      <input id="mobile-drawer-nav" type="checkbox" class="drawer-toggle" />

      {/* main content */}
      <div class="drawer-content justify-self-end md:justify-self-stretch lg:px-0 px-4 pr-0 flex gap-8 items-center justify-between md:ml-20 py-8">
        <div class="hidden items-center justify-between md:flex w-full border-t-2 px-4 border-t-white">
          <ul class="flex items-center py-2 px-4">
            {navigation.links.map((link) => (
              <li className="h-6">
                <a
                  href={link.url}
                  aria-label={link.label}
                  class="link no-underline hover:underline p-4 text-xl uppercase block"
                >
                  {link.url === "/" && <House width={24} height={24} className="fill-white" /> }
                  {link.url !== "/" && link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <label
          htmlFor="mobile-drawer-nav"
          class="flex md:hidden btn btn-ghost drawer-button justify-self-end"
        >
          <Icon id="Bars3" size={24} strokeWidth={0.1} />
        </label>
      </div>

      {/* sidebar */}
      <aside class="drawer-side z-50">
        {/* Close when clicking on overlay */}
        <label
          htmlFor="mobile-drawer-nav"
          aria-label="close sidebar"
          class="drawer-overlay"
        />

        <div class="flex flex-col gap-8 min-h-full w-80 bg-base-100 text-base-content">
          <a class="p-4" href="/">
            <Image
              src={logo.src || ""}
              width={100}
              alt={logo.alt}
            />
          </a>

          <ul class="menu">
            {navigation?.links.map((link) => (
              <li>
                <a
                  href={link.url}
                  aria-label={link.label}
                  class="uppercase block"
                >
                  {link.url === "/" && <House width={24} height={24} className="fill-black" /> }
                  {link.url !== "/" && link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </nav>
  );
}
