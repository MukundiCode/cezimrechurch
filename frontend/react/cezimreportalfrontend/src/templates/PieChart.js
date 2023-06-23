import { Chart } from "react-google-charts";
import useFetch from "./useFetch";

const PieChart = () => {

    const { error, isPending, data: value } = useFetch('http://localhost:3000/api/offering/statistics')

    var data2 = [
        ["Task", "Hours per Day"],
        value,
        ["Work", 11],
        ["Eat", 2],
        ["Commute", 2],
        ["Watch TV", 2],
        ["Sleep", 7],
    ];

    const options = {
        title: "My Daily Activities",
    };

    return (
        <div>{value &&
            <Chart
                chartType="PieChart"
                data={[
                    ["Category", "Amount"]
                ].concat(value.map(v => {
                        return [v.partnershipType, v.amount]
                    }))
                }
                options={options}
                width={"100%"}
                height={"400px"}
            />
        }
        </div>
    )

}

export default PieChart