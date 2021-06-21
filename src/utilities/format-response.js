const { convertISODateToAEST, } = require("./format-iso-date-to-AEST");

function formatResponse(response, limit) {
  const { title, description, items, } = response;

  function formatEpisodes(episode) {
    const { title, pubDate, enclosure, } = episode;
    return {
      title: title,
      audioUrl: enclosure.url,
      publishedDate: convertISODateToAEST(pubDate),
    };
  }

  return {
    title: title,
    description: description,
    episodes: items.map(formatEpisodes).slice(0, limit),
  };
}

module.exports = {
  formatResponse,
};