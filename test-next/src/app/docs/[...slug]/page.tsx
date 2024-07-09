export default function Docs({
  params,
}: {
  params: {
    slug: string[0];
  };
}) {
  if (params.slug.length === 2) {
    return (
      <h1>
        Showing feature {params.slug[0]} and example {params.slug[1]}
      </h1>
    );
  } else if (params.slug.length === 1) {
    return <h1>Showing feature {params.slug[0]}</h1>;
  }

  return <h1>Documents home page!</h1>;
}
