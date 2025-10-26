import React, { useState } from "react";
import { HeaderSection } from "./sections/HeaderSection";
import { MainContentSection } from "./sections/MainContentSection";
import { NavigationSection } from "./sections/NavigationSection";
import { NotificationsSection } from "./sections/NotificationsSection";
import { OrdersListSection } from "./sections/OrdersListSection/OrdersListSection";

export const HomePageLight = (): JSX.Element => {
  const [selectedKey, setSelectedKey] = useState<string>("default");
  return (
    <div className="flex w-full min-h-screen bg-white dark:bg-[#0c0d0f]">
      <NavigationSection selectedKey={selectedKey} onSelect={setSelectedKey} />

      <div className="flex flex-col flex-1 overflow-hidden">
        <HeaderSection />

        <div className="flex flex-1 overflow-auto">
          {selectedKey === "default" ? (
            <OrdersListSection />
          ) : (
            <MainContentSection />
          )}
        </div>
      </div>

      {selectedKey !== "default" ? <NotificationsSection /> : <></>}
    </div>
  );
};
