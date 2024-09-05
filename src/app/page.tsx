import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/db/queries";
import CopyUrlButton from "./_components/CopyUrlButton";

export const dynamic = 'force-dynamic'

async function Images() {
  const images = await getMyImages()

  return (
    <div className="flex flex-wrap gap-4 justify-center py-10">
      {images.map(image => (
        <div key={image.id} className="flex relative">
          <img src={image.url} className="max-w-96 object-contain" />
          <CopyUrlButton url={image.url} />
        </div>
      ))}
    </div>)
}

export default function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-2xl text-center">Please sign in above</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
