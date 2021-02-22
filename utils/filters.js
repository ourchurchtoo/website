const { DateTime } = require('luxon');
const markdownIt = require('markdown-it');
const meaningless = require('../src/_data/search-regex.js');

const removeHTML = (text) => {
  // remove all html elements and new lines
  const content = new String(text);
  return unescape(content.replace(/(&lt;.*?&gt;)|(<.*?>)|(&.+?;)/gi, ' '));
};

module.exports = {
  readableDate(date) {
    return DateTime.fromJSDate(date).toFormat('dd LLLL yyyy');
  },
  currentYear() {
    return DateTime.local().toFormat('yyyy');
  },
  limitTo(input, limit) {
    if (typeof limit !== 'number') {
      return input;
    }

    if (typeof input === 'string') {
      if (limit >= 0) {
        return input.substring(0, limit);
      }
      return input.substr(limit);
    }

    if (Array.isArray(input)) {
      limit = Math.min(limit, input.length);

      if (limit >= 0) {
        return input.splice(0, limit);
      }

      return input.splice(input.length + limit, input.length);
    }
    return input;
  },
  removeHTML,
  squash(text) {
    let content = new String(text);

    // all lower case, please
    content = content.toLowerCase();

    // remove all new lines
    content = content.replace(/\n/g, '');
    // const plain = unescape(content.replace(/(&lt;.*?&gt;)|(<.*?>)/gi, ' '));
    const plain = removeHTML(content);

    // remove duplicated words
    const words = plain.split(' ');
    const deduped = [...(new Set(words))];
    const dedupedStr = deduped.join(' ');

    // remove short and less meaningful words
    let result = dedupedStr.replace(meaningless, '');
    // remove newlines, and punctuation
    result = result.replace(/\.|,|"|\?|-|—|\n/g, '');
    // remove repeated spaces
    result = result.replace(/([ ]{2,}|\t+)/g, ' ');

    return result;
  },
  includes(input, string) {
    if (input) {
      return input.includes(string);
    }

    return false;
  },
  log(input) {
    console.log(input);
  },
  markdown(input) {
    const md = markdownIt({
      html: false,
    });
    return md.render(input);
  },
  sortAlpha(input) {
    return input.sort((a, b) => a.data.title.localeCompare(b.data.title));
  },
  postReadableLabel(label) {
    let readableLabel = '';
    switch (label) {
      case 'lgbtq':
        readableLabel = 'LGBTQ+';
        break;
      case 'lets_talk_about':
        readableLabel = 'Let\'s talk about';
        break;
      case 'advent_2020':
        readableLabel = 'Advent';
        break;
      default:
        words = label.replace(/_/g, ' ');
        readableLabel = words.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
        break;
    }

    return readableLabel;
  },
};
