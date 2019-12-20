const fs = require('fs');
const path = require('path');
const pa11y = require('html/pa11y/pa11y');
const reporter = require('pa11y-reporter-html');
const config = require('./config.json').pa11y;

const test = path.resolve('test');

/**
 * Check directory existence and make directory if doesn't exists
 * @param {string} directory
 */
const checkDirectory = directory => {
    try {
        fs.statSync(directory);
    } catch (e) {
        fs.mkdirSync(directory);
    }
};

/**
 * Write result down to the report html file
 * @param {string} item
 * @param {string} result
 */
const write = (item, result) => {
    const directory = `${test}/pa11y`;

    checkDirectory(directory);

    const file = `${directory}/${item}`;

    fs.writeFile(file, result, err => {
        if (err) {
            throw err;
        }

        console.log(`File ${file} checked`);
    });
};

/**
 * Read source file and configure test
 * @param {string} file
 * @param {string} item
 * @param {string} type
 */
const read = (file, item, type) => {
    pa11y(file, config).then(async results => {
        const result = await reporter.results(results);

        write(`${type}_${item}`, result);
    });
};

/**
 * Check if source file isn't a directory and run reading file
 * @param {string} file
 * @param {string} item
 * @param {string} type
 */
const exclude = (file, item, type) => {
    fs.stat(file, (err, stat) => {
        if (err) {
            throw err;
        }

        if (stat && !stat.isDirectory()) {
            read(file, item, type);
        }
    });
};

/**
 * Run for defining types (mobile, desktop)
 * @param {string} type
 */
const run = type => {
    const directory = path.resolve(`${type}/output_pages`);

    fs.readdir(directory, (err, source) => {
        if (err) {
            throw err;
        }

        source.forEach(item => {
            const file = `${directory}/${item}`;

            exclude(file, item, type);
        });
    });
};

run('pages');
