import Filter from "@/components/Filter";
import ProjectList from "../components/ProjectListClient";
import Link from "next/link";

// This is your landing page
// You can start from here
// Very easy to understand

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center flex-col">
      <h2>This is the landing page.</h2>
      <Link className="text-[#cfba82]" href={"/projects"}>
        Go to product page here
      </Link>
    </main>
  );
}
