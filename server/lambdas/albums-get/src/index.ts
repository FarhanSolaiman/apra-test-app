import fetch from "cross-fetch";
import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from "aws-lambda";
import { ApolloClient, gql, InMemoryCache, HttpLink } from "@apollo/client";

export const handler = async (
  event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyResultV2> => {

  const client = new ApolloClient({
    link: new HttpLink({ uri: "https://graphqlzero.almansi.me/api", fetch }),
    cache: new InMemoryCache(),
  });
  const result = await client.query({
    query: gql`
        {
          albums {
            data {
              id,
              title
            }
          }
        }
    `,
  });

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
    body: JSON.stringify(result),
  };
};
