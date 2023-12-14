import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDropdown1Value, setDropdown2Value, setOptions2, setRocketData } from "../features/dropdownSlice";
import './Dropdown.css';

const Dropdown = ({ data }) => {
  const { dropdown1Value, dropdown2Value, options2 } = useSelector((state) => state.dropdown);
  const dispatch = useDispatch();
  const options1 = ['Rocket-wise', 'Site-wise', 'Year-wise'];

  const handleOption1Change = (value) => {

    dispatch(setDropdown1Value(value));
    dispatch(setRocketData({}));
    if(value === "Rocket-wise"){
        let opt = [];
        data.forEach((item) => {
            if(!opt.includes(item.rocket.rocket_name)){
                opt.push(item.rocket.rocket_name);
            }  
        })
        dispatch(setOptions2(opt));

    }
    else if(value === "Year-wise"){
        let opt = [];
        data.forEach((item) => {
            if(!opt.includes(item.launch_year)){
                opt.push(item.launch_year);
            }  
        })
        dispatch(setOptions2(opt));
    }
    else if(value === "Site-wise"){
      let opt = [];
        data.forEach((item) => {
            if(!opt.includes(item.launch_site.site_name)){
                opt.push(item.launch_site.site_name);
            }  
        })
        dispatch(setOptions2(opt));
    }
    dispatch(setDropdown2Value(''));
  };

  const handleOption2Change = (value) => {
    dispatch(setDropdown2Value(value));
    if(dropdown1Value === "Rocket-wise"){
        let successCount = 0;
        let failureCount = 0;
        let totalCount = 0;
        data.forEach((item) => {
            if(item.rocket.rocket_name === value){
                if(item.launch_success){
                    successCount++;
                }
                else{
                    failureCount++;
                }
                totalCount++;
            }
        })
        successCount = (successCount / totalCount) * 100;
        failureCount = (failureCount / totalCount) * 100;
        totalCount = 100;
        dispatch(setRocketData({ successCount: successCount, failureCount: failureCount, totalCount: totalCount}));
    }
    else if(dropdown1Value === "Year-wise"){
        let successCount = 0;
        let failureCount = 0;
        let totalCount = 0;
        data.forEach((item) => {
            if(item.launch_year === value){
                if(item.launch_success){
                    successCount++;
                }
                else{
                    failureCount++;
                }
                totalCount++;
            }
        })
        successCount = (successCount / totalCount) * 100;
        failureCount = (failureCount / totalCount) * 100;
        totalCount = 100;
        dispatch(setRocketData({ successCount: successCount, failureCount: failureCount, totalCount: totalCount}));
    }
    else if(dropdown1Value === "Site-wise"){
      let successCount = 0;
      let failureCount = 0;
      let totalCount = 0;
      data.forEach((item) => {
          if(item.launch_site.site_name === value){
              if(item.launch_success){
                  successCount++;
              }
              else{
                  failureCount++;
              }
              totalCount++;
          }
      })
      successCount = (successCount / totalCount) * 100;
      failureCount = (failureCount / totalCount) * 100;
      totalCount = 100;
      dispatch(setRocketData({ successCount: successCount, failureCount: failureCount, totalCount: totalCount}));
  }
  }

  return (
    <div className="dropdown-container">
        <div>
      <label>Category</label>
      <select value={dropdown1Value} onChange={(e) => handleOption1Change(e.target.value)}>
        <option value="">Select category</option>
        {options1.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      </div>

      {dropdown1Value && (
        <div>
          <label>Option</label>
          <select value={dropdown2Value} onChange={(e) => handleOption2Change(e.target.value)}>
            <option value="">{dropdown1Value === 'Rocket-wise' ? 'Select Rocket Name' : (dropdown1Value === 'Site-wise' ? 'Select Site Name' : 'Select Year') }</option>
            {options2.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  )
}

export default Dropdown;