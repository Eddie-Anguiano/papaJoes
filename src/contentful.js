import { createClient } from "contentful";

export default createClient({
  space: "n069d8hsdsjq",
  accessToken: process.env.REACT_APP_API_KEY,
});
