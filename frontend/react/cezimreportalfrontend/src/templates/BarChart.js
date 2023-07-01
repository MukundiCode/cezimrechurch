import { Chart } from "react-google-charts";
import useFetch from "./useFetch";
import { CChart } from "@coreui/react-chartjs";

const BarChart = () => {

  const { error, isPending, data: stats } = useFetch('http://localhost:3000/api/offering/getPartnershipStatisticsByMonth')

  const options = {
    chart: {
      title: "Monthly partnership statistics",
      subtitle: "in dollars (USD)",
    },
  };

  return (
    <div class="card m-3">
      <div class=" card-body" >{stats &&
        <CChart
          type="line"
          data={{
            labels: ["January", "February", "March", "April", "May", "June", "July","August","September","October","November","December"],
            datasets: stats,
          }}
        />
      }</div>
    </div>
  );

}

export default BarChart