import { db } from "~/server/db";

const mockUrls = [
  'https://utfs.io/f/f0fea8de-d002-47c2-81f8-2099108d5cd5-z5iy6c.png',
  'https://utfs.io/f/44bb3b56-22b3-4237-91f7-b724fca66dac-z5li3g.png',
  'https://utfs.io/f/792b473b-9023-44a9-8034-e5905de9440d-uj61vw.png',
  'https://utfs.io/f/a102e6fe-ebbd-42a3-a4ac-8578b7b9f565-l75jjv.png',
  'https://utfs.io/f/be4aad83-7821-4cca-9682-c7c29cbeedc3-knyt7g.png'
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url
}))

export default async function HomePage() {
  const posts = await db.query.posts.findMany()
  console.log(posts)
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map(p => (
          <div key={p.id}>{p.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + '-' + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
