const queryBackers = `
{
  backerCollection (order: sys_publishedAt_ASC) {
    items {
    	name
      logo {
        url
      }
    }
  }
}
`;

const queryPartners = `
{
  partnerCollection (order: sys_publishedAt_ASC) {
    items {
    	name
      isLongBanner
      logo {
        url
      }
    }
  }
}
`;

const fetchBackers = (setBackers) => {
  window
    .fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authenticate the request
          Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_CONTENT_DELIVERY_ACCESS_TOKEN}`,
        },
        // send the GraphQL query
        body: JSON.stringify({ query: queryBackers }),
      }
    )
    .then((response) => response.json())
    .then(({ data, errors }) => {
      console.log("env var: "+ process.env.REACT_APP_CONTENTFUL_CONTENT_DELIVERY_ACCESS_TOKEN);
      console.log("env var 2: " + process.env.REACT_APP_CONTENTFUL_CONTENT_PREVIEW_ACCESS_TOKEN);
      console.log("env var 3: " + process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID);
      console.log("env var 4: " + process.env.REACT_APP_CONTENTFUL_SPACE_ID);
      if (errors) {
        console.error(errors);
      } else {
        setBackers(data.backerCollection.items);
      }
    });
};

const fetchPartners = (setPartners) => {
  window
    .fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authenticate the request
          Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_CONTENT_DELIVERY_ACCESS_TOKEN}`,
        },
        // send the GraphQL query
        body: JSON.stringify({ query: queryPartners }),
      }
    )
    .then((response) => response.json())
    .then(({ data, errors }) => {
      if (errors) {
        console.error(errors);
      } else {
        setPartners(data.partnerCollection.items);
      }
    });
};

export { fetchBackers, fetchPartners };
