"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type AppId = "profile" | "projects" | "blog" | "settings" | null;

interface OSContextType {
  currentApp: AppId;
  openApp: (appId: AppId) => void;
  closeApp: () => void;
  isHome: boolean;
  goHome: () => void;
  goBack: () => void;
}

const OSContext = createContext<OSContextType | undefined>(undefined);

export function OSProvider({ children }: { children: ReactNode }) {
  const [currentApp, setCurrentApp] = useState<AppId>(null);
  const [history, setHistory] = useState<AppId[]>([]);

  const openApp = (appId: AppId) => {
    if (appId) {
       setHistory(prev => [...prev, appId]);
    }
    setCurrentApp(appId);
  };

  const closeApp = () => {
    setCurrentApp(null);
  };

  const goHome = () => {
    setCurrentApp(null);
    setHistory([]);
  };

  const goBack = () => {
    if (history.length > 0) {
      const newHistory = [...history];
      newHistory.pop(); // Remove current
      const prevApp = newHistory.pop(); // Get previous
      setHistory(newHistory);
      setCurrentApp(prevApp || null);
    } else {
      setCurrentApp(null);
    }
  };

  const isHome = currentApp === null;

  return (
    <OSContext.Provider value={{ currentApp, openApp, closeApp, isHome, goHome, goBack }}>
      {children}
    </OSContext.Provider>
  );
}

export function useOS() {
  const context = useContext(OSContext);
  if (context === undefined) {
    throw new Error("useOS must be used within an OSProvider");
  }
  return context;
}
