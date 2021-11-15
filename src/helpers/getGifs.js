export const getGifs = async (category) => {
  // prettier-ignore
  const api_url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=FALxPRXmvsWA6VSWSDY8ILjMkn7AyycO`;

  try {
    const res = await fetch(api_url);
    const { data } = await res.json(); // here we retrive the data

    // Para obtener solo los datos que necesitamos
    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });

    return gifs;
  } catch (error) {
    alert(error);
    return error;
  }
};
