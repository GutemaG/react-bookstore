const APP_ID = '9uq1wHmR0h44s8SSSioM';
const BASE_URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${APP_ID}/books`;

export const apiFetchBooks = async () => {
  const resp = await fetch(BASE_URL);
  const data = await resp.json();

  const books = Object.entries(data).map(([id, book]) => {
    const { title, author, category } = book[0];
    return {
      id, title, author, category,
    };
  })
    .sort((a, b) => a.title.localeCompare(b.title));
  return books;
};

export const apiAddBook = async ({
  id,
  title,
  author,
  category,
}) => {
  await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      title,
      author,
      category,
    }),
  });
};

export const apiRemoveBook = async (id) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
