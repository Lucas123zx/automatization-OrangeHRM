const report = require("multiple-cucumber-html-reporter");
const fs = require ('fs');

let mapOs = (os) => {
    if(os.startsWith('win')) {
        return 'windows';
    } else if (os.startsWith('darwin')) {
        return 'osx';
    } else if (os.startsWith('linux')) {
        return 'linux';
    } else if (os.startsWith('ubuntu')) {
        return 'ubuntu';
    } else if (os.startsWith('android')) {
        return 'android';
    } else if (os.startsWith('ios')) {
        return 'ios';
    }
};

fs.readFile('./cypress/reports/.run/results.json', function read(err, data) {
    if (err) {
        throw err;
    }
    let runInfos = JSON.parse(data);

    report.generate({
        jsonDir: './cypress/reports/cucumber-json/',
        reportPath: './cypress/reports/',
        pageTitle: "Report",
        reportName: "OrangeHRM",
        screenshot: true,
        metadata:{
            browser: {
                name: runInfos.browserName,
                version: runInfos.browserVersion
            },
            device: 'not known',
            version: 'nor known',
            platform: {
                name: mapOs(runInfos.osName),
            },
        },
        customData: {
            title: "Informaçôes",
            data: [
                { label: "Project", value: "Todolist" },
                { label: "Realese", value: "0.0.1" },
                { label: "Estudos", value: "01" },
                { label: "Execution Start Time", value: new Date(runInfos.startedTestsAt).toLocaleString() },
                { label: "Execution End Time", value: new Date(runInfos.endedTestsAt).toLocaleString() }
            ],
        }
    });
});