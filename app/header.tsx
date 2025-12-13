"use client";

import { MapPinIcon, MailIcon, LanguagesIcon } from "lucide-react";
import { ContactItem } from "../components/ui/contact-item";
import Image from "next/image";
import { useIsMobile } from "../hooks/use-mobile";
import { cn } from "../lib/utils";

export function Header() {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 w-full">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Dylan Kruyff</h1>
        <p className="text-lg italic flex">DevOps Software Engineer</p>
        <div className="flex flex-col gap-2">
          <ContactItem icon={MapPinIcon}>Utrecht, The Netherlands</ContactItem>
          <ContactItem icon={MailIcon}>
            <a href="mailto:dylan.kruyff@gmail.com" className="underline">
              dylan.kruyff@gmail.com
            </a>
          </ContactItem>
          <ContactItem icon={LanguagesIcon}>English, Dutch</ContactItem>
        </div>
      </div>
      <div
        className={cn(
          "rounded-lg overflow-hidden",
          isMobile && "w-32 h-32 rounded-full"
        )}
      >
        <Image
          src="/profile.jpg"
          alt="Dylan Kruyff"
          width={150}
          height={150}
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}
