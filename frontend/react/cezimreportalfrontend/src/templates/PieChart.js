import { Chart } from "react-google-charts";
import useFetch from "./useFetch";

const PieChart = () => {

    const { error, isPending, data: stats } = useFetch('http://localhost:3000/api/offering/statistics')

    const options = {
        title: "My Daily Activities",
    };

    return (
        <div class="card m-3">
            <div class="card-body">{stats &&
                <Chart
                    chartType="PieChart"
                    data={[
                        ["Category", "Amount"]
                    ].concat(stats.map(v => {
                        return [v.partnershipType, v.amount]
                    }))
                    }
                    options={options}
                    width={"100%"}
                    height={"270px"}
                />
            }
            </div>
        </div>
    )

}

export default PieChart