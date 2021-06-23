const API_URL = process.env.DATOCMS_API_URL;
const API_TOKEN = process.env.DATOCMS_READ_ONLY_API_TOKEN;

async function fetchCmsAPI(query, { variables } = {}) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    throw new Error("Failed to fetch API");
  }

  return json.data;
}

export async function getAllTechnologies() {
  const data = await fetchCmsAPI(`
  {
    allTechnologies {
      id
      nome
      defaultVisibility
      logo {
        url(imgixParams: {fm: png, fit: crop, w: 40, h: 40})
      }
      ordem
    }
  }
  `);

  return data.allTechnologies;
}

export default { getAllTechnologies };
