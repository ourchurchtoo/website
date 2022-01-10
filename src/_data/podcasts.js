const Parser = require('rss-parser');
const slug = require('@nothingrandom/11ty-utils/filters/slug');

const parser = new Parser();

const RSS_URL = 'https://feeds.soundcloud.com/users/soundcloud:users:1050178537/sounds.rss';

module.exports = (async () => {
  // eslint-disable-next-line no-console
  console.log('Fetching podcast episodes');

  const feed = await parser.parseURL(RSS_URL);

  const data = feed.items.map((item) => {
    item.short_date = new Date(item.isoDate).toISOString().slice(0, 10);
    item.slug = `/podcast/${slug(`${item.short_date} ${item.title}`)}`;
    item.date = new Date(item.isoDate);
    item.uuid = item.guid.match(/\d{10}/gm).join('');
    return item;
  });

  return data;
})();
