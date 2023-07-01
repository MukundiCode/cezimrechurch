import { Chart } from "react-google-charts";
import { CChart } from "@coreui/react-chartjs";
import useFetch from "./useFetch";

const PieChart = () => {

    const { error, isPending, data: stats } = useFetch('http://localhost:3000/api/offering/statistics')

    const options = {
        title: "My Daily Activities",
    };

    return (
        <div class="card m-3">
            <div class="card-body">{stats &&
                <CChart
                    type="doughnut"
                    data={{
                        labels: stats.map(v => { return [v.partnershipType] }),
                        datasets: [
                            {
                                backgroundColor: ['#41B883', '#E46651'],
                                data: stats.map(v => { return [v.amount] }),
                            },
                        ],
                    }}
                />
            }
            </div>
        </div>
    )

}

export default PieChart