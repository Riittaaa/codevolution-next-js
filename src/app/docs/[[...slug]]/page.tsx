export default async function Docs({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  if (slug?.length == 2) {
    return (
      <h1>
        View for doc {slug[0]} and feature {slug[1]}
      </h1>
    );
  }
  if (slug?.length == 1) {
    return <h1>View for doc {slug[0]} </h1>;
  }
  return <h1>DOCS </h1>;
}
