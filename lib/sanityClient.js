import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// This is the sanity database configuration,
// but please ensure you store this securely in an environment variable file
// like .env

export const sanityClient = createClient({
  projectId: "smpp650j",
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2023-11-10", // use current date (YYYY-MM-DD) to target the latest API version
  token:
    "skgQKK2BpD3i8Rki1y8iXg49HpVgo9L6Sn5aBnqajorLuuTDqhT7JrvUG6DpqEQSGCyP0b6RGnu94JGj00Yul3MQXPHqsERkmMVscQNt3HtZJM1grVPZn9yhkJryOWORc2HKA4DSOgXSziC905UIzfwDi2CtJGVgQ3dZk21y9oyOmoX4Ryho",
});

const builder = imageUrlBuilder(sanityClient);

// The urlfor is a sanity image url builder 
// You can use it if you wish, 
// although initially, I did not.
// Check `@/components/Project.js` file
export const urlFor = (source) => {
  return builder.image(source);
};
