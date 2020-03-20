const fs = require('fs');
const {url} = require('./localhost.json');

const scenarios = [];
const pages = [
    {
        label: 'index',
        file: 'index.html',
    },
];

fs.readdirSync('pages').forEach(file => {
    if (!fs.statSync(`pages/${file}`).isDirectory()) {
        pages.push({
            label: file,
            file: `pages/${file}`,
        });
    }
});

pages.forEach(page => {
    const regex = new RegExp('.html', 'g');

    scenarios.push({
        label: page.label.replace(regex, ''),
        url: `${url}/${page.file}`,
    });
});

module.exports = {
    id: 'project',
    fileNameTemplate: '{scenarioLabel}_{selectorIndex}_{viewportLabel}',
    viewports: [
        {
            label: '1600',
            width: 1600,
            height: 1200,
        },
    ],
    scenarios,
    paths: {
        bitmaps_reference: '__test__/backstop/bitmaps_reference',
        bitmaps_test: '__test__/backstop/bitmaps_test',
        engine_scripts: '__test__/backstop/engine_scripts',
        html_report: '__test__/backstop/html_report',
        ci_report: '__test__/backstop/ci_report',
    },
    report: ['browser'],
    engine: 'puppeteer',
    engineOptions: {
        args: ['--lang=cs-CZ', '--no-sandbox'],
    },
    engineFlags: [],
    asyncCaptureLimit: 5,
    asyncCompareLimit: 50,
    debug: false,
    debugWindow: false,
    misMatchThreshold: 0.5,
};
