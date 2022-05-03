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

export async function getStaticPaths() {
  return {
    paths: [
      "/blog/first-post",
      { params: { site: "sport", slug: "second-post" } },
    ],
    fallback: true,
  };
}

export default Site;
