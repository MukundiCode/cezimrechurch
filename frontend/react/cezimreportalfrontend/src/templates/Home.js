import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import StatsCard from "./StatsCard";
import PieChart from "./PieChart";
import BarChart from "./BarChart.js";
import TopPartners from "./TopPartners";

const Home = () => {


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
                <StatsCard header={"Total Partnership"} url={'http://localhost:3000/api/offering/getTotalPartnership'}></StatsCard>
              </div>
              <div class="col">
                <StatsCard header={"Total Members"} url={'http://localhost:3000/api/member/total'}></StatsCard>
              </div>
              <PieChart></PieChart>
            </div>
          </div>
          <div class="col-8">
            <BarChart></BarChart>
          </div>
        </div>

        <div class="row">
          <div class="col-sm">
            <div >
              <TopPartners></TopPartners>
            </div>
          </div>
        </div>
      </div>




    </div>
  );
}

export default Home;