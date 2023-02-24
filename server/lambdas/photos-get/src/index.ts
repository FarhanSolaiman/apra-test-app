import fetch from "cross-fetch";
import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from "aws-lambda";
import { ApolloClient, gql, InMemoryCache, HttpLink } from "@apollo/client";

export const handler = async (
  event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyResultV2> => {
  const queryParam = event.queryStringParameters;
  let options;

  if (queryParam !== null && queryParam !== undefined) {
    options = {};
    if (queryParam["limit"] || queryParam["page"]) {
      options = { ...options, paginate: {} };
      if (queryParam["page"]) {
        options.paginate = {
          ...options.paginate,
          page: Number(queryParam["page"]),
        };
      }
      if (queryParam["limit"]) {
        options.paginate = {
          ...options.paginate,
          limit: Number(queryParam["limit"]),
        };
      }
    }
    if (queryParam["title"]) {
      options = {
        ...options,
        search: {
          q: `'${queryParam["title"]}'`,
        },
      };
    }
  }

  const client = new ApolloClient({
    link: new HttpLink({ uri: "https://graphqlzero.almansi.me/api", fetch }),
    cache: new InMemoryCache(),
  });
  const result = await client.query({
    query: gql`
        {
            photos${options ? `(options: ${JSON.stringify(options).replace(/"/g, '').replace(/'/g, '"')})` : ""}{
                data {
                    id,
                    title,
                    url,
                    thumbnailUrl,
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
