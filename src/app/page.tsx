import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {images.map(({ id, url, name }) => (
          <div className="flex w-48 flex-col" key={id}>
            <img src={url} alt={`Image ${id}`} />
            <div>{name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
