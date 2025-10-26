import {
  BellIcon,
  ClockIcon,
  MenuIcon,
  SearchIcon,
  StarIcon,
  SunIcon,
} from "lucide-react";
import React from "react";
import { useTheme } from "../../../../theme/ThemeProvider";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../../../components/ui/breadcrumb";
import { Button } from "../../../../components/ui/button";

const iconButtons = [
  { icon: SunIcon, alt: "Theme toggle" },
  { icon: ClockIcon, alt: "History" },
  { icon: BellIcon, alt: "Notifications" },
  { icon: MenuIcon, alt: "Sidebar" },
];

export const HeaderSection = (): JSX.Element => {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="flex w-full items-center justify-between px-7 py-5 bg-white dark:bg-black/10 border-b border-[#1c1c1c1a] dark:border-white/10 flex-shrink-0">
      <div className="inline-flex gap-2 items-center">
        <div className="inline-flex gap-2 items-center">
          <Button variant="ghost" size="icon" className="h-auto p-1">
            <MenuIcon className="w-5 h-5 text-[#1c1c1c] dark:text-white" />
          </Button>

          <Button variant="ghost" size="icon" className="h-auto p-1">
            <StarIcon className="w-5 h-5 text-[#1c1c1c] dark:text-white" />
          </Button>
        </div>

        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink className="font-14-regular font-[number:var(--14-regular-font-weight)] text-[#1c1c1c66] text-[length:var(--14-regular-font-size)] tracking-[var(--14-regular-letter-spacing)] leading-[var(--14-regular-line-height)] [font-style:var(--14-regular-font-style)]">
                Dashboards
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="font-14-regular font-[number:var(--14-regular-font-weight)] text-[#1c1c1c33] text-[length:var(--14-regular-font-size)] tracking-[var(--14-regular-letter-spacing)] leading-[var(--14-regular-line-height)] [font-style:var(--14-regular-font-style)]">
              /
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage className="font-14-regular font-[number:var(--14-regular-font-weight)] text-[#1c1c1c] text-[length:var(--14-regular-font-size)] tracking-[var(--14-regular-letter-spacing)] leading-[var(--14-regular-line-height)] [font-style:var(--14-regular-font-style)]">
                Default
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="inline-flex items-center gap-5">
        <div className="flex w-40 items-center gap-2 px-2 py-1 bg-[#1c1c1c0d] dark:bg-white/10 rounded-lg">
          <SearchIcon className="w-4 h-4 text-[#1c1c1c33] dark:text-white/60" />
          <span className="flex-1 font-14-regular font-[number:var(--14-regular-font-weight)] text-[#1c1c1c33] dark:text-white/60 text-[length:var(--14-regular-font-size)] tracking-[var(--14-regular-letter-spacing)] leading-[var(--14-regular-line-height)] [font-style:var(--14-regular-font-style)]">
            Search
          </span>
          <span className="font-14-regular font-[number:var(--14-regular-font-weight)] text-[#1c1c1c33] dark:text-white/40 text-[length:var(--14-regular-font-size)] tracking-[var(--14-regular-letter-spacing)] leading-[var(--14-regular-line-height)] [font-style:var(--14-regular-font-style)]">
            ⌘/
          </span>
        </div>

        <div className="inline-flex gap-2 items-center">
          {iconButtons.map((item, index) => {
            const isTheme = item.alt === "Theme toggle";
            return (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className="h-auto p-1"
                onClick={isTheme ? toggleTheme : undefined}
              >
                {isTheme ? (
                  <SunIcon className="w-5 h-5 text-[#1c1c1c] dark:text-white" />
                ) : (
                  <item.icon className="w-5 h-5 text-[#1c1c1c] dark:text-white" />
                )}
              </Button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
