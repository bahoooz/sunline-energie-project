"use client";

import { usePathname } from "next/navigation";

export const hideNavbar = () => {
  const pathname = usePathname();
  const hideNavbarPaths = ["/dashboard"];

  const shouldHideNavbar = hideNavbarPaths.includes(pathname);
  return <div>hideNavbar</div>;
};
