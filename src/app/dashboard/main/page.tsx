import { WidgetsGrid } from "@/components";

export const metadata = {
  title: "admin dashboard",
  description: "admin dashboard",
};

export default function MainPage() {
  return (
    <div className="flex items-center text-black p-10">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span className="text-xl">general information</span>
      <WidgetsGrid />
    </div>
  );
}
