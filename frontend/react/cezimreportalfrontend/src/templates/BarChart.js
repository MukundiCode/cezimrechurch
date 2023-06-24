import { Chart } from "react-google-charts";
import useFetch from "./useFetch";

const BarChart = () => {

  const lineData = []
  var oTypes = []
  var dataReady = false

  fetch('http://localhost:3000/api/offering/partnershipTypes', {
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then(res => res.json())
    .then(offeringTypes => {
      oTypes = offeringTypes
      lineData.push(['Amount'].concat(offeringTypes))
      console.log(lineData)
    })
    .then(
      fetch('http://localhost:3000/api/offering/monthlyStatistics', {
        headers: {
          "Content-Type": "application/json",
        }
      })
        .then(
          res => res.json())
        .then(months => {
          console.log(months)
          months.map(month => {
            var arr = []
            arr.push(month.month)
            oTypes.map(type => {
              var found = false
              for (let j = 0; j < month.monthlyStatistics.length; j++) {
                if (type == month.monthlyStatistics[j].partnershipType) {
                  arr.push(month.monthlyStatistics[j].amount)
                  found = true
                }
              }
              if (!found) arr.push(0)
            })
            lineData.push(arr)

          });
          console.log(lineData)
        }
        )
    ).then(
      dataReady = true
    );

  const options = {
    chart: {
      title: "Monthly partnership statistics",
      subtitle: "in dollars (USD)",
    },
  };

  return (
    <div class="card m-3">
      <div class=" card-body" >{dataReady &&
        <Chart
          chartType="Line"
          width="100%"
          height="400px"
          data={lineData}
          options={options}
        />
      }</div>
    </div>
  );

}

export default BarChart