import StatsCard from "./components/StatsCard";
import PieChart from "./components/PieChart";
import LineChart from "./components/LineChart.js";
import TopPartners from "./components/TopPartners";

const Home = () => {

  const colors = ['#ef476f','#ffd166','#06d6a0','#118ab2','#073b4c']

  return (
    <div class="bg-light">
      <div >
        <h1>
          Dashboard
          <hr></hr>
        </h1>
      </div>

      <div class="container">
        <div class="row no-gutters">
          <div class="col-4">
            <div class="row">
              <div class="col">
                <StatsCard header={"Total Partnership"} url={'http://localhost:8080/api/offering/getTotalPartnership'}></StatsCard>
              </div>
              <div class="col">
                <StatsCard header={"Total Members"} url={'http://localhost:8080/api/member/total'}></StatsCard>
              </div>
              <PieChart class="justify-content-center" colors={colors}></PieChart>
            </div>
          </div>
          <div class="col-8">
            <LineChart colors={colors}></LineChart>
            <TopPartners></TopPartners>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;