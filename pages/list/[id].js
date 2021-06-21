export const getStaticPaths = async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await resp.json();

  const paths = data.map((item) => {
    return {
      params: {
        id: item.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const resp = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await resp.json();

  return {
    props: {
      data: data,
    },
  };
};

const DetailsPage = ({ data }) => {
  return (
    <div>
      <h1>{data.name}</h1>
      <h4>{data.email}</h4>
      <h4>{data.website}</h4>
      <h4>{data.address.city}</h4>
    </div>
  );
};

export default DetailsPage;
