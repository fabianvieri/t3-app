import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/0d6b6b2b-9ea8-4cd1-8660-d21afcd82633-3b6tbm.jpg",
  "https://utfs.io/f/6e3c5e46-4cd4-4e9f-b64f-8b2bc3001186-boteja.jpg",
  "https://utfs.io/f/03d68fa2-0ea5-4c9e-a6b7-e1c7805b1895-vm0eb5.jpg",
  "https://utfs.io/f/ee7018b6-c841-468b-8adf-4749c02e613d-kduxvr.jpg",
];

const mockImages = mockUrls.map((url, i) => ({ id: i + 1, url }));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}

        {mockImages.map(({ id, url }) => (
          <div className="w-full p-4 md:w-1/2 lg:w-1/3" key={id}>
            <img src={url} alt={`Image ${id}`} />
          </div>
        ))}
      </div>
    </main>
  );
}
