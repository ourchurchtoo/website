const fs = require('fs');

const sum = (array) => {
  let total = 0;
  for (let i = 0; i < array.length; i += 1) {
    total += array[i];
  }
  return total;
};

const mean = (array) => {
  const arraySum = sum(array);
  return arraySum / array.length;
};

const median = (array) => {
  array = array.sort();
  if (array.length % 2 === 0) { // array with even number elements
    return (array[array.length / 2] + array[(array.length / 2) - 1]) / 2;
  }

  return array[(array.length - 1) / 2]; // array with odd number elements
};

const directory = 'src/posts';
const wordCounts = [];

const getFiles = (numberOfFiles) => {
  let files = [];
  fs.readdirSync(directory).map((fileName) => files.push(fileName));

  if (numberOfFiles) {
    files = (files.slice(Math.max(files.length - numberOfFiles, 0)));
  }

  return files;
};

const getWordCounts = (numberOfFiles) => {
  getFiles(numberOfFiles).map((fileName) => {
    // console.log(fileName);
    try {
      let fileData = fs.readFileSync(`${directory}/${fileName}`, 'utf8');
      fileData = fileData.replace(/\n/g, ' ').replace(/---.*?---/g);
      // fileData = fielData.replace('')
      wordCounts.push(fileData.split(' ').length);
    } catch (err) {
      console.error(err);
    }

    return fileName;
  });
};

const fileCount = 8;
getWordCounts(fileCount);
console.log(
  `The last ${fileCount} posts`, '\n',
  `mean: ${mean(wordCounts)}`, '\n',
  `median: ${median(wordCounts)}`, '\n',
);

getWordCounts();
console.log(
  'All time', '\n',
  `mean: ${mean(wordCounts)}`, '\n',
  `median: ${median(wordCounts)}`, '\n',
);
