const sanityClient = require("@sanity/client");
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: process.env.PROJECT_ID,
  dataset: process.env.DATA_SET,
  apiVersion: "2021-03-25",
  useCdn: true,
});

export { client };

export default ({}, inject) => {
  const builder = imageUrlBuilder(client);

  function urlFor(source) {
    return builder.image(source);
  }

  inject("urlFor", urlFor);
};
