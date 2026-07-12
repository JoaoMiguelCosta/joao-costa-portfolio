export function getPageKeyFromPathname(pathname) {
  if (pathname === "/") {
    return "home";
  }

  return "notFound";
}
