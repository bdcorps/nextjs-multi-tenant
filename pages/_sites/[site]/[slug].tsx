import { NextPage } from "next";

const Site: NextPage = ({ site, slug }: any) => {
  return (
    <p>
      Yo! the site is {site} and the slug is {slug}
    </p>
  );
};

export async function getStaticProps({ params }: any) {
  const { site, slug } = params;

  return {
    props: {
      site,
      slug,
    },
  };
}

export default Site;
