import styled from "@emotion/styled";
import Head from "../components/head";
import { PageWrapper } from "../styles/components";
import { GetStaticProps } from "next";

export default function Home({ events }: { events: any }) {
  return (
    <IndexWrapper>
      <Head />
      <h1>{process.env.NEXT_PUBLIC_APP_TITLE}</h1>
    </IndexWrapper>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const calendar: any = []
  return {
    props: {
      calendar
    },
    revalidate: 60,
  };
};

const IndexWrapper = styled(PageWrapper)`
  max-width: var(--content-width-xl);
`;
