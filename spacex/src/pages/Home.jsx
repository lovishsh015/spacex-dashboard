import React from "react";
import Header from "../components/Header";
import Table from "../components/Table";
import { useSelector } from "react-redux";
import About from "../components/About";
import Footer from "../components/Footer";


const Home = () => {
    const { items, status, error } = useSelector((state) => state.data); 

      

      const columns = React.useMemo(
        () => [
          {
            Header: 'Flight ID',
            accessor: 'flight_number',
          },
          {
            Header: 'Mission Name',
            accessor: 'mission_name',
          },
          {
            Header: 'Launch Year',
            accessor: 'launch_year',
          },
          {
            Header: 'Site ID',
            accessor: 'launch_site.site_id',
          },
          {
            Header: 'Rocket Name',
            accessor: 'rocket.rocket_name',
          },
          {
            Header: 'Mission ID',
            accessor: 'mission_id',
          },
          {
            Header: 'Site Name',
            accessor: 'launch_site.site_name',
          },
        ],
        []
      );
    
      
    return (
        <>
        <Header />
        <div className="dashboard">
          <About />
            <h2>SpaceX Rocket Launch Table</h2>
            {status === 'loading' && <h2>Loading....</h2>}
            {status === 'success' && <Table columns={columns} data={items} />}
            {status === 'failed' && <h2>Error: {error}</h2>}
            
            
        </div>
        <Footer />
        </>
    )
}

export default Home;