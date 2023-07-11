import { CChart } from "@coreui/react-chartjs";
import useFetch from '../../../hooks/useFetch';

const PieChart = ({colors: colors}) => {

    const { error, isPending, data: stats } = useFetch('/api/offering/statistics')

    const options = {
        title: "My Daily Activities",
    };

    return (
        <div class="card m-3">
            <h5 class="card-title mt-2">Partnership compared by category</h5>
            <div class="card-body">{stats &&
                <CChart
                    type="doughnut"
                    data={{
                        labels: stats.map(v => { return [v.partnershipType] }),
                        datasets: [
                            {
                                backgroundColor: colors,
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