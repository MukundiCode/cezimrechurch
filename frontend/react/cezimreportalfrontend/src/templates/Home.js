import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import StatsCard from "./StatsCard";
import PieChart from "./PieChart";
import BarChart from "./BarChart.js";
import TopPartners from "./TopPartners";

const Home = () => {
  

  return (
    <div>
      <div >
        <h1>
          Dashboard
        </h1>
      </div>

      <div class="d-flex flex-row">
        <StatsCard header={"Total Partnership"} url={'http://localhost:3000/api/offering/getTotalPartnership'}></StatsCard>
        <StatsCard header={"Total Members"} url={'http://localhost:3000/api/member/total'}></StatsCard>
      </div>
      <div class="d-flex flex-row">
        <PieChart></PieChart>
        <BarChart></BarChart>
      </div>
      <TopPartners></TopPartners>



    </div>
  );
}

export default Home;