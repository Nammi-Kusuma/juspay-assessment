import { ChevronDownIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

type NavigationSectionProps = {
  selectedKey: string;
  onSelect: (key: string) => void;
};

const quickLinks = [
  { label: "Overview", icon: "/dot.svg" },
  { label: "Projects", icon: "/dot.svg" },
];

const dashboardItems = [
  {
    label: "Default",
    icon: "/chartpieslice.svg",
    key: "default",
    hasArrow: false,
  },
  {
    label: "eCommerce",
    icon: "/shoppingbagopen.svg",
    key: "ecommerce",
    hasArrow: true,
  },
  {
    label: "Projects",
    icon: "/foldernotch.svg",
    key: "projects",
    hasArrow: true,
  },
  {
    label: "Online Courses",
    icon: "/bookopen.svg",
    key: "online-courses",
    hasArrow: true,
  },
];

const userProfileSubItems = [
  { label: "Overview" },
  { label: "Projects" },
  { label: "Campaigns" },
  { label: "Documents" },
  { label: "Followers" },
];

const pageItems = [
  {
    label: "User Profile",
    icon: "/identificationbadge.svg",
    hasDropdown: true,
    isExpanded: false,
  },
  { label: "Account", icon: "/identificationcard.svg", hasArrow: true },
  { label: "Corporate", icon: "/usersthree.svg", hasArrow: true },
  { label: "Blog", icon: "/notebook.svg", hasArrow: true },
  { label: "Social", icon: "/chatsteardrop.svg", hasArrow: true },
];

export const NavigationSection = ({ selectedKey, onSelect }: NavigationSectionProps): JSX.Element => {
  return (
    <nav className="flex flex-col w-[250px] items-start gap-4 px-4 py-5 border-r border-[#1c1c1c1a] dark:border-white/10 bg-white dark:bg-black/10 flex-shrink-0">
      <div className="flex items-center gap-2 p-1 w-full rounded-lg">
        <div className="flex items-center gap-2 rounded-lg">
          <div className="flex justify-center items-center rounded-lg">
            <div className="w-6 h-6 rounded-[80px] [background:url(../byewind.png)_50%_50%_/_cover]" />
          </div>
          <div className="flex flex-col items-start justify-center rounded-lg">
            <div className="font-14-regular font-[number:var(--14-regular-font-weight)] text-[#1c1c1c] dark:text-[#e5e7eb] text-[length:var(--14-regular-font-size)] tracking-[var(--14-regular-letter-spacing)] leading-[var(--14-regular-line-height)] [font-style:var(--14-regular-font-style)]">
              ByeWind
            </div>
          </div>
        </div>
      </div>

      <section className="flex flex-col items-start gap-1 pt-0 pb-3 px-0 w-full">
        <div className="flex items-center gap-2 w-full rounded-lg">
          <Button
            variant="ghost"
            className="h-auto px-2 py-1 rounded-lg font-14-regular font-[number:var(--14-regular-font-weight)] text-[#1c1c1c66] dark:text-[#9ca3af] text-[length:var(--14-regular-font-size)] tracking-[var(--14-regular-letter-spacing)] leading-[var(--14-regular-line-height)] [font-style:var(--14-regular-font-style)]"
          >
            Favorites
          </Button>
          <Button
            variant="ghost"
            className="h-auto px-2 py-1 rounded-lg font-14-regular font-[number:var(--14-regular-font-weight)] text-[#1c1c1c33] dark:text-[#6b7280] text-[length:var(--14-regular-font-size)] tracking-[var(--14-regular-letter-spacing)] leading-[var(--14-regular-line-height)] [font-style:var(--14-regular-font-style)]"
          >
            Recently
          </Button>
        </div>

        {quickLinks.map((link, index) => (
          <Button
            key={`quick-link-${index}`}
            variant="ghost"
            className="h-auto flex items-center gap-2 px-2 py-1 w-full justify-start rounded-lg"
          >
            <img className="w-4 h-4 dark:invert" alt="Dot" src={link.icon} />
            <span className="font-14-regular font-[number:var(--14-regular-font-weight)] text-[#1c1c1c] dark:text-[#e5e7eb] text-[length:var(--14-regular-font-size)] tracking-[var(--14-regular-letter-spacing)] leading-[var(--14-regular-line-height)] [font-style:var(--14-regular-font-style)]">
              {link.label}
            </span>
          </Button>
        ))}
      </section>

      <section className="flex flex-col items-start gap-1 pt-0 pb-3 px-0 w-full">
        <div className="flex flex-col items-start justify-center px-3 py-1 w-full rounded-lg">
          <div className="font-14-regular font-[number:var(--14-regular-font-weight)] text-[#1c1c1c66] dark:text-[#9ca3af] text-[length:var(--14-regular-font-size)] tracking-[var(--14-regular-letter-spacing)] leading-[var(--14-regular-line-height)] [font-style:var(--14-regular-font-style)]">
            Dashboards
          </div>
        </div>

        {dashboardItems.map((item, index) => {
          const isSelected = item.key === selectedKey;
          return (
            <Button
              key={`dashboard-${index}`}
              variant="ghost"
              onClick={() => onSelect(item.key)}
              className={`h-auto flex items-center gap-1 pl-0 pr-2 py-1 w-full justify-start rounded-lg ${
                isSelected ? "bg-[#1c1c1c0d]" : ""
              }`}
            >
              <div className="flex items-center gap-0">
                {isSelected ? (
                  <img className="w-5 h-5" alt="Selected" src="/selected.svg" />
                ) : (
                  <div className="w-5 h-5" />
                )}
                {item.hasArrow && !isSelected && (
                  <ChevronRightIcon className="w-4 h-4 -ml-3 text-[#1c1c1c] dark:text-white" />
                )}
              </div>
              <img className="w-5 h-5 dark:invert" alt={item.label} src={item.icon} />
              <span className="font-14-regular font-[number:var(--14-regular-font-weight)] text-[#1c1c1c] dark:text-[#e5e7eb] text-[length:var(--14-regular-font-size)] tracking-[var(--14-regular-letter-spacing)] leading-[var(--14-regular-line-height)] [font-style:var(--14-regular-font-style)]">
                {item.label}
              </span>
            </Button>
          );
        })}
      </section>

      <section className="flex flex-col items-start gap-1 pt-0 pb-3 px-0 w-full">
        <div className="flex flex-col items-start justify-center px-3 py-1 w-full rounded-lg">
          <div className="font-14-regular font-[number:var(--14-regular-font-weight)] text-[#1c1c1c66] dark:text-[#9ca3af] text-[length:var(--14-regular-font-size)] tracking-[var(--14-regular-letter-spacing)] leading-[var(--14-regular-line-height)] [font-style:var(--14-regular-font-style)]">
            Pages
          </div>
        </div>

        <Button
          variant="ghost"
          className="h-auto flex items-center gap-1 pl-0 pr-2 py-1 w-full justify-start rounded-lg"
        >
          <div className="flex items-center gap-0">
            <div className="w-5 h-5" />
            <ChevronDownIcon className="w-4 h-4 -ml-3 text-[#1c1c1c] dark:text-white" />
          </div>
          <img
            className="w-5 h-5 dark:invert"
            alt="User Profile"
            src="/identificationbadge.svg"
          />
          <span className="font-14-regular font-[number:var(--14-regular-font-weight)] text-[#1c1c1c] dark:text-[#e5e7eb] text-[length:var(--14-regular-font-size)] tracking-[var(--14-regular-letter-spacing)] leading-[var(--14-regular-line-height)] [font-style:var(--14-regular-font-style)]">
            User Profile
          </span>
        </Button>

        {userProfileSubItems.map((subItem, index) => (
          <Button
            key={`user-profile-sub-${index}`}
            variant="ghost"
            className="h-auto flex items-center gap-1 pl-0 pr-2 py-1 w-full justify-start rounded-lg"
          >
            <div className="flex items-center gap-0">
              <div className="w-5 h-5" />
              <div className="w-4 h-4 -ml-3" />
            </div>
            <div className="w-5 h-5" />
            <span className="font-14-regular font-[number:var(--14-regular-font-weight)] text-[#1c1c1c] dark:text-[#e5e7eb] text-[length:var(--14-regular-font-size)] tracking-[var(--14-regular-letter-spacing)] leading-[var(--14-regular-line-height)] [font-style:var(--14-regular-font-style)]">
              {subItem.label}
            </span>
          </Button>
        ))}

        {pageItems.map((item, index) => (
          <Button
            key={`page-${index}`}
            variant="ghost"
            className="h-auto flex items-center gap-1 pl-0 pr-2 py-1 w-full justify-start rounded-lg"
          >
            <div className="flex items-center gap-0">
              <div className="w-5 h-5" />
              <ChevronRightIcon className="w-4 h-4 -ml-3" />
            </div>
            <img className="w-5 h-5" alt={item.label} src={item.icon} />
            <span className="font-14-regular font-[number:var(--14-regular-font-weight)] text-[#1c1c1c] dark:text-[#e5e7eb] text-[length:var(--14-regular-font-size)] tracking-[var(--14-regular-letter-spacing)] leading-[var(--14-regular-line-height)] [font-style:var(--14-regular-font-style)]">
              {item.label}
            </span>
          </Button>
        ))}
      </section>
    </nav>
  );
};
