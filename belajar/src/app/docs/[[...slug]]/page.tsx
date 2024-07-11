export default function Docs({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  if (params.slug?.length === 2) {
    return (
      <h1>
        Melihat untuk feature ke - {params.slug[0]} dan juga concept ke -{" "}
        {params.slug[1]}
      </h1>
    );
  } else if (params.slug?.length === 1) {
    return <h1>Melihat page untuk feature ke - {params.slug[0]}</h1>;
  }

  return <h1>This is the docs page!</h1>;
}
