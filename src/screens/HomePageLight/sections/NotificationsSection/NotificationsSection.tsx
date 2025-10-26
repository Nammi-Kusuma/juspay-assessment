import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";

const notificationsData = [
  {
    id: 1,
    icon: "/bugbeetle.svg",
    bgColor: "bg-[#e3f5ff]",
    message: "You have a bug that needs to be fixed.",
    time: "Just now",
  },
  {
    id: 2,
    icon: "/user.svg",
    bgColor: "bg-[#e5ecf6]",
    message: "New user registered",
    time: "59 minutes ago",
  },
  {
    id: 3,
    icon: "/bugbeetle.svg",
    bgColor: "bg-[#e3f5ff]",
    message: "You have a bug that needs to be fixed.",
    time: "12 hours ago",
  },
  {
    id: 4,
    icon: "/broadcast.svg",
    bgColor: "bg-[#e5ecf6]",
    message: "Andi Lane subscribed to you",
    time: "Today, 11:59 AM",
  },
];

const activitiesData = [
  {
    id: 1,
    avatar: "..//3d05.png",
    message: "You have a bug that needs to be fixed.",
    time: "Just now",
  },
  {
    id: 2,
    avatar: "..//female05.png",
    message: "Released a new version",
    time: "59 minutes ago",
  },
  {
    id: 3,
    avatar: "..//3d08.png",
    message: "Submitted a bug",
    time: "12 hours ago",
  },
  {
    id: 4,
    avatar: "..//male07.png",
    message: "Modified A data in Page X",
    time: "Today, 11:59 AM",
  },
  {
    id: 5,
    avatar: "..//male11.png",
    message: "Deleted a page in Project X",
    time: "Feb 2, 2023",
  },
];

const contactsData = [
  {
    id: 1,
    avatar: "..//female15.png",
    name: "Natali Craig",
  },
  {
    id: 2,
    avatar: "..//male08.png",
    name: "Drew Cano",
  },
  {
    id: 3,
    avatar: "..//male06.png",
    name: "Orlando Diggs",
  },
  {
    id: 4,
    avatar: "..//female08.png",
    name: "Andi Lane",
  },
  {
    id: 5,
    avatar: "..//female09.png",
    name: "Kate Morrison",
  },
  {
    id: 6,
    avatar: "..//3d03.png",
    name: "Koray Okumus",
  },
];

export const NotificationsSection = (): JSX.Element => {
  return (
    <aside className="flex flex-col w-[280px] h-full items-start gap-6 p-5 border-l [border-left-style:solid] border-[#1c1c1c1a] dark:border-white/10 bg-white dark:bg-black/10 flex-shrink-0">
      <section className="flex flex-col items-start gap-2 w-full">
        <header className="flex flex-col items-start justify-center px-1 py-2 w-full rounded-lg">
          <h2 className="mt-[-1.00px] font-14-semibold font-[number:var(--14-semibold-font-weight)] text-[#1c1c1c] dark:text-[#e5e7eb] text-[length:var(--14-semibold-font-size)] tracking-[var(--14-semibold-letter-spacing)] leading-[var(--14-semibold-line-height)] [font-style:var(--14-semibold-font-style)]">
            Notifications
          </h2>
        </header>

        {notificationsData.map((notification) => (
          <div
            key={notification.id}
            className="flex w-full items-start gap-2 p-1 rounded-lg hover:bg-[#f5f5f5] cursor-pointer transition-colors"
          >
            <div
              className={`p-1 ${notification.bgColor} inline-flex items-center justify-center flex-shrink-0 rounded-lg`}
            >
              <img
                className="w-4 h-4"
                alt="Notification icon"
                src={notification.icon}
              />
            </div>

            <div className="flex flex-col items-start justify-center flex-1 min-w-0 rounded-lg">
              <p className="w-full mt-[-1.00px] font-14-regular font-[number:var(--14-regular-font-weight)] text-[#1c1c1c] dark:text-[#e5e7eb] text-[length:var(--14-regular-font-size)] tracking-[var(--14-regular-letter-spacing)] leading-[var(--14-regular-line-height)] [font-style:var(--14-regular-font-style)]">
                {notification.message}
              </p>

              <span className="w-full font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c66] dark:text-[#9ca3af] text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
                {notification.time}
              </span>
            </div>
          </div>
        ))}
      </section>

      <section className="flex flex-col items-start gap-2 w-full relative">
        <header className="flex flex-col items-start justify-center px-1 py-2 w-full rounded-lg">
          <h2 className="mt-[-1.00px] font-14-semibold font-[number:var(--14-semibold-font-weight)] text-[#1c1c1c] dark:text-[#e5e7eb] text-[length:var(--14-semibold-font-size)] tracking-[var(--14-semibold-letter-spacing)] leading-[var(--14-semibold-line-height)] [font-style:var(--14-semibold-font-style)]">
            Activities
          </h2>
        </header>

        {activitiesData.map((activity) => (
          <div
            key={activity.id}
            className="flex w-full items-start gap-2 p-1 rounded-lg hover:bg-[#f5f5f5] cursor-pointer transition-colors"
          >
            <div className="inline-flex justify-center flex-shrink-0 rounded-lg items-center">
              <Avatar className="w-6 h-6">
                <AvatarImage src={activity.avatar} alt="User avatar" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </div>

            <div className="flex flex-col items-start justify-center flex-1 min-w-0 rounded-lg">
              <p className="w-full mt-[-1.00px] font-14-regular font-[number:var(--14-regular-font-weight)] text-[#1c1c1c] dark:text-[#e5e7eb] text-[length:var(--14-regular-font-size)] tracking-[var(--14-regular-letter-spacing)] leading-[var(--14-regular-line-height)] [font-style:var(--14-regular-font-style)]">
                {activity.message}
              </p>

              <span className="w-full font-12-regular font-[number:var(--12-regular-font-weight)] text-[#1c1c1c66] dark:text-[#9ca3af] text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
                {activity.time}
              </span>
            </div>
          </div>
        ))}

        <div className="flex flex-col w-px h-44 items-center gap-10 absolute top-20 left-4">
          <div className="flex-1 w-full bg-[#1c1c1c1a] dark:bg-white/10" />
          <div className="flex-1 w-full bg-[#1c1c1c1a] dark:bg-white/10" />
          <div className="flex-1 w-full bg-[#1c1c1c1a] dark:bg-white/10" />
          <div className="flex-1 w-full bg-[#1c1c1c1a] dark:bg-white/10" />
        </div>
      </section>

      <section className="flex flex-col items-start gap-2 w-full">
        <header className="flex flex-col items-start justify-center px-1 py-2 w-full rounded-lg">
          <h2 className="mt-[-1.00px] font-14-semibold font-[number:var(--14-semibold-font-weight)] text-[#1c1c1c] dark:text-[#e5e7eb] text-[length:var(--14-semibold-font-size)] tracking-[var(--14-semibold-letter-spacing)] leading-[var(--14-semibold-line-height)] [font-style:var(--14-semibold-font-style)]">
            Contacts
          </h2>
        </header>

        {contactsData.map((contact) => (
          <div
            key={contact.id}
            className="flex items-center gap-2 p-1 w-full rounded-lg hover:bg-[#f5f5f5] cursor-pointer transition-colors"
          >
            <Avatar className="w-6 h-6 flex-shrink-0">
              <AvatarImage src={contact.avatar} alt={contact.name} />
              <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
            </Avatar>

            <span className="font-14-regular font-[number:var(--14-regular-font-weight)] text-[#1c1c1c] dark:text-[#e5e7eb] text-[length:var(--14-regular-font-size)] tracking-[var(--14-regular-letter-spacing)] leading-[var(--14-regular-line-height)] [font-style:var(--14-regular-font-style)]">
              {contact.name}
            </span>
          </div>
        ))}
      </section>
    </aside>
  );
};
