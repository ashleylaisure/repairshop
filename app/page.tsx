import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black bg-home bg-cover bg-center">
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/80 w-4/5 sm:max-w-96 mx-auto text-white sm:text-2xl">
          <h1 className="text-4xl font-bold">Welcome to the <br />Repair Shop</h1>
          <address>
            555 Gateway Lane <br/>
            Kansas City, MO 64101
          </address>
          <p>
            Open Daily: 8:00 AM - 6:00 PM
          </p>
          <Link href="tel:5555555555" className="hover:underline">
            (555) 555-5555
          </Link>
        </div>
      </main>

    </div>
  );
}
