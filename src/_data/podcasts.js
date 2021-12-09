const Parser = require('rss-parser');
const slugify = require('@mikestreety/11ty-utils/filters/slugify');

const parser = new Parser();

const RSS_URL = 'https://feeds.soundcloud.com/users/soundcloud:users:1050178537/sounds.rss';

module.exports = (async () => {
  // eslint-disable-next-line no-console
  console.log('Fetching podcast episodes');

  const feed = await parser.parseURL(RSS_URL);

  const data = feed.items.map((item) => {
    item.short_date = new Date(item.isoDate).toISOString().slice(0, 10);
    item.slug = `/podcast/${slugify(`${item.short_date} ${item.title}`)}`;
    item.date = new Date(item.isoDate);
    item.uuid = item.guid.match(/\d{10}/gm).join('');
    return item;
  });

  return data;
})();
