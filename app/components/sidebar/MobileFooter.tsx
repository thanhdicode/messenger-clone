"use client";

import useConversation from "@/app/hooks/useConversation";
import useRoutes from "@/app/hooks/useRoute";
import MobileItem from "./MobileItem";

export default function MobileFooter() {
  const routes = useRoutes();

  const isOpen = useConversation();

  if (isOpen) return null;

  return (
    <div
      className="
        fixed 
        justify-between 
        w-full 
        bottom-0 
        z-40 
        flex 
        items-center 
        bg-[#303030] 
        border-t-[1px] 
        lg:hidden
      "
    >
      {routes.map((route) => (
        <MobileItem
          key={route.href}
          href={route.href}
          active={route.active}
          icon={route.icon}
          onClick={route.onClick}
        />
      ))}
    </div>
  );
}
