export const HOST = 'http://localhost:4000';
export async function fetchJson(path, options = {}) {
  const responce = await fetch(`${HOST}${path}`, {
    ...options,
    credentials: 'include',
  });
  const data = await responce.json();
  return data;
}
