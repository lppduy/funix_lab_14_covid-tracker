const api = 'https://disease.sh/v3/covid-19/nyt/usa';

// Fetch data from the API
fetch(api)
  .then(response => response.json())
  .then(data => {
    plotData(data.filter((el, index) => index % 7 == 0));
  })
  .catch(error => {
    console.error('>>> An error occurred:', error.message);
  });

// Process and plot the data
function plotData(data) {
  // / Extract dates and cases from the data
  const keys = ['dates', ...data.map(entry => entry.date)];
  const cases = ['cases', ...data.map(entry => entry.cases)];
  const columns = [keys, cases];

  console.log(data);
  // console.log(keys);
  // console.log(cases);
  // console.log(columns);

  // Generate the chart using the extracted data
  bb.generate({
    bindto: '#covid-us-cases-weekly',
    data: {
      x: 'dates',
      columns: columns,
    },
    axis: {
      x: {
        type: 'category',
        clipPath: false,
        tick: {
          count: 10,
        },
      },
    },
    padding: { right: 50 },
  });
}
