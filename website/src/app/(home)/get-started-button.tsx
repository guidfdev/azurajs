"use client";

import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/useLanguage";

export function GetStartedButton() {
  const { language, isClient } = useLanguage();
  const href = isClient ? `/docs/${language}` : "/docs/en";

  return (
    <Link
      href={href}
      className="h-12 px-8 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
    >
      <BookOpen size={18} />
      Get Started
      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
    </Link>
  );
}
