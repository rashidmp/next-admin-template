import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="container flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">Shadcn UI Buttons</h1>
      <div className="flex gap-4">
        <Button>Click me</Button>
        <Button variant="outline">Click me</Button>
        <Button variant="ghost">Click me</Button>
        <Button variant="link">Click me</Button>
        <Button variant="destructive">Click me</Button>
      </div>
    </div>
  );
}
