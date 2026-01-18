"use client";

import { useTranslation } from "@/context/LanguageContext";
import { Button } from "@/components/ui/Button";
import { Globe } from "lucide-react";
import type { Language } from "@/lib/i18n/translations";

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang: Language = language === "vi" ? "en" : "vi";
    setLanguage(newLang);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className="rounded-full relative group"
      aria-label={t.language.toggle}
    >
      <Globe className="h-[1.2rem] w-[1.2rem]" />
      <span className="absolute -bottom-1 right-0 text-[10px] font-bold uppercase">
        {language}
      </span>
    </Button>
  );
}
