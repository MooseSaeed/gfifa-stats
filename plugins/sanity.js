export default function myCoolData(query) {
  const sanityClient = require("@sanity/client");
  const client = sanityClient({
    projectId: "21fy9g0s",
    dataset: "production",
    apiVersion: "2021-03-25",
    useCdn: true,
  });

  client.fetch(query).then((bikes) => {
    console.log(bikes);
    /*     bikes.forEach((bike) => {
      console.log(`${bike.name} (${bike.seats} seats)`);
    }); */
  });

  return client;
}
