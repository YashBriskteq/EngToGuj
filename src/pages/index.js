import React from "react";
import { graphql } from "gatsby";
import { Trans } from "gatsby-plugin-react-i18next";
import Header from "./Header";

const IndexPage = () => {
  // const { t } = useTranslation();

  return (
    <main>
      <h1>
        <Header />
      </h1>
      <h1>
        <Trans>Welcome to my Gatsby site!</Trans>
      </h1>
      <p>
        <Trans>My name is Shanika</Trans>
      </p>
      <p>
        <Trans>My profession is SSE</Trans>
      </p>
    </main>
  );
};

export default IndexPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
