import header from "./header.js";
import home from "./home.js";
import projectsPage from "./projectsPage.js";
import footer from "./footer.js";
import feedback from "./feedback.js";

export default {
  header,
  ...home,
  projectsPage,
  footer,
  ...feedback,
};
