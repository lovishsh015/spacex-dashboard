import React from "react";
import Header from "../components/Header";
import BarChart from "../components/BarChart";
import Dropdown from "../components/Dropdown";
import { useSelector } from "react-redux";

const Analytics = () => {
    const { items, status, error } = useSelector((state) => state.data);
    return (
        <>
        <Header />
        <div className="analytics">
            <h2>SpaceX Analytics</h2>
            {status === 'loading' && <h2>Loading....</h2>}
            {status === 'success' && <>
            <Dropdown data={items} />
            <BarChart />
            </>}
            {status === 'failed' && <h2>Error: {error}</h2>}
            
        </div>
        </>
    )
}

export default Analytics;