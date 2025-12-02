'use client'

import UseBoardGroup from "@/components/layout/board-group";
import UseThemeToggle from "@/components/layout/theme-toggle";

export default function Home() {
  return (
    <main className="min-h-screen w-full m-auto flex-col p-4 bg-white dark:bg-black sm:items-start">
      <div className="relative flex justify-end mb-4">
        <UseThemeToggle />
      </div>
      <UseBoardGroup />
    </main>
  )
}
