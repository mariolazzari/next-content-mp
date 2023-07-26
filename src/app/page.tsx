import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <main className="">
      <Label htmlFor="name">Name</Label>
      <Input id="name" name="name" />
    </main>
  );
}
