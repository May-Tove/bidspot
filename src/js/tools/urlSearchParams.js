export function getUrlSearchParam(parameter) {
  const url = new URL(location.href);
  return url.searchParams.get(parameter);
}
