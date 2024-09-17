export const exerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/status',
    headers: {
      'x-rapidapi-key': '7e077f66e6msh48606c1ae882807p1771c2jsn1e051a0b54e1',
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
  };

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '7e077f66e6msh48606c1ae882807p1771c2jsn1e051a0b54e1',
        'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
    },
};

export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();

    return data;
};
