import { Content, Footer } from "@/components";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 justify-center items-center animate-fade-up">
      <Content />
      <Footer />
    </div>
  );
}
