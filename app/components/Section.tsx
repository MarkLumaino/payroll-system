"use client";

import { useRouter } from "next/navigation";

export type SectionItem = {
  title: string;
  icon: string;
  path: string;
};

export default function Section({
  title,
  items,
}: {
  title: string;
  items: SectionItem[];
}) {
  return (
    <div className="mb-12">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {items.map((item) => (
          <MenuCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
}

function MenuCard({ title, icon, path }: SectionItem) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(path)}
      className="bg-[#0A1A40] p-6 rounded-2xl flex flex-col items-center justify-center shadow hover:bg-[#112255] transition cursor-pointer"
    >
      <i className={`bi bi-${icon} text-white text-4xl mb-3`} />
      <p className="text-sm font-medium text-center">{title}</p>
    </div>
  );
}
