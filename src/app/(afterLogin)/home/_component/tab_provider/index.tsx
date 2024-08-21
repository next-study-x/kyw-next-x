"use client";

import { createContext, useState } from "react";

export const TabContext = createContext({
  tab: "rec",
  setTab: (value: "rec" | "fol") => {},
});
TabContext.displayName = "TabProvider";

type Props = { children: React.ReactNode };

export default function TabProvider({ children }: Props) {
  const [tab, setTab] = useState("rec");

  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  );
}
