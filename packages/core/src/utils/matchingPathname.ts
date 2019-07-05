export default function matchingPathname(pathnames: string[]) {
  return (location: Location) => pathnames.some(pathname => location.pathname === pathname);
}
