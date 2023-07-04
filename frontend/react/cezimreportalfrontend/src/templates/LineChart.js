import useFetch from "./useFetch";
import { CChart } from "@coreui/react-chartjs";

const LineChart = ({colors: colors}) => {

  const { error, isPending, data: stats } = useFetch('http://localhost:3000/api/offering/getPartnershipStatisticsByMonth')

  const options = {
    chart: {
      title: "Monthly partnership statistics",
      subtitle: "in dollars (USD)",
    },
  };

  return (
    <div class="card m-3">
      <h5 class="card-title mt-2">Monthly partnership per category</h5>
      <div class=" card-body" >{stats &&
        <CChart
          type="line"
          data={{
            labels: ["January", "February", "March", "April", "May", "June", "July","August","September","October","November","December"],
            datasets: stats.map((s, index) => {
              return {label: s.label, borderColor: colors[index], pointBackgroundColor: colors[index], data: s.data}
            }),
          }}
        />
      }</div>
    </div>
  );

}

export default LineChart