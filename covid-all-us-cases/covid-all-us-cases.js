const api = 'https://disease.sh/v3/covid-19/nyt/usa';

// Fetch data from the API
fetch(api)
  .then(response => response.json())
  .then(plotData)
  .catch(error => {
    console.error('>>> An error occurred:', error.message);
  });

// Process and plot the data
function plotData(data) {
  // / Extract dates and cases from the data
  const keys = ['dates', ...data.map(entry => entry.date)];
  const cases = ['cases', ...data.map(entry => entry.cases)];
  const columns = [keys, cases];

  // console.log(data);
  // console.log(keys);
  // console.log(cases);
  // console.log(columns);

  // Generate the chart using the extracted data
  bb.generate({
    bindto: '#covid-all-us-cases',
    data: {
      x: 'dates',
      type: 'line',
      columns, // columns: columns
    },
    axis: {
      x: {
        type: 'category',
        tick: {
          count: 10,
        },
      },
    },
    padding: { right: 50 },
  });
}

/*
Notes:
- billboard.js library to give us a simple, interactive graph. It supports a few different chart types, and allows you to customize axes, labels, and all the standard ingredients of a chart.
- https://naver.github.io/billboard.js/
- https://www.section.io/engineering-education/nodejs-charts/
- bb.generate({}): generates a chart with the arguments passed to it.
- bindto: "#charting" holds the div id where the chart will be displayed in our HTML file.
- data: holds an object with all the information required to create the chart.
- columns: hold the data from which the chart will be plotted.
- types: indicates the type of chart to be used.\
- colors: specifies the color in which each data will be presented.
*/
