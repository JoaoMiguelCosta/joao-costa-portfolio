import {
  ROUTE_KEYS,
  getAllRoutePaths,
} from "../../../i18n/routing/index.js";

export function getPageKeyFromPathname(pathname) {
  if (pathname === "/") {
    return "home";
  }

  if (getAllRoutePaths(ROUTE_KEYS.PROJECTS_PAGE).includes(pathname)) {
    return "projects";
  }

  return "notFound";
}
