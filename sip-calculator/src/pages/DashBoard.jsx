import React, { useEffect, useState } from "react";
import "./css/dashboard.css";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { useDispatch } from "react-redux";
import { setAllYearsDataForSip, updateMainFalg } from "@/toolkit/valuesSlice";
import { toast } from "sonner";
import calculateSIP from "@/utils/sipFunction";
import SimpleCharts from "./SimpleCharts";
import addCommas from "@/utils/addCommas";
import BarDiagram from "@/Components/BarDiagram";

const DashBoard = () => {
  const dispatch = useDispatch();
  const [sipCalculatedData, setSipCalculatedData] = useState("");
  const [monthlyInvestment, setMonthlyInvestment] = useState(1000);
  const [expectedReturn, setExpectedReturn] = useState(10);
  const [timePeriod, setTimePeriod] = useState(10);

  useEffect(() => {
    dispatch(updateMainFalg(false));
  }, [dispatch]);

  const handleInvestmentChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 100) {
      setMonthlyInvestment(value);
    } else {
      setMonthlyInvestment(value);
      toast.error("Monthly investment must be at least $100");
    }
  };

  const handleReturnChange = (e) => {
    const value = parseFloat(e.target.value);
    if (value >= 0 && value <= 100) {
      setExpectedReturn(value);
    } else {
      setExpectedReturn(value);
      toast.error("Expected return must be between 1% and 100%");
    }
  };

  const handlePeriodChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value > 0 && value <= 40) {
      setTimePeriod(value);
    } else {
      setTimePeriod(value);
      toast.error("Time period must be between 1 and 40 years");
    }
  };

  const handleSubmit = () => {
    if (isNaN(monthlyInvestment) || monthlyInvestment < 100) {
      toast.error("Monthly investment must be at least $100");
      return;
    }

    if (isNaN(expectedReturn) || expectedReturn < 1 || expectedReturn > 100) {
      toast.error("Expected return must be between 1% and 100%");
      return;
    }

    if (isNaN(timePeriod) || timePeriod < 1 || timePeriod > 40) {
      toast.error("Time period must be between 1 and 40 years");
      return;
    }

    try {
      const data = calculateSIP(monthlyInvestment, expectedReturn, timePeriod);
      setSipCalculatedData(data);
      dispatch(setAllYearsDataForSip(data));
      toast.success("Data calculated successfully!");
    } catch (error) {
      toast.error("An error occurred while calculating.");
    }
  };

  return (
    <div className="landingpage">
      <h1 className="text-3xl font-bold">SIP Calculator</h1>
      <div className="flex flex-wrap modified">
        <div className=" flex flex-col custom-form-classname">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="investment">Monthly Investment</Label>
            <Input
              type="number"
              id="investment"
              value={monthlyInvestment}
              onChange={handleInvestmentChange}
              className="focus-visible:ring-0"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="returnvalues">Expected Return (%)</Label>
            <Input
              type="number"
              id="returnvalues"
              value={expectedReturn}
              onChange={handleReturnChange}
              className="focus-visible:ring-0"
            />
          </div>
          <div className="grid w-full  items-center gap-1.5">
            <Label htmlFor="period">Time Period (Years)</Label>
            <Input
              type="number"
              id="period"
              value={timePeriod}
              onChange={handlePeriodChange}
              className="focus-visible:ring-0"
            />
          </div>
          <div className="grid w-full  items-center gap-1.5">
            <Button onClick={handleSubmit}>Calculate</Button>
          </div>
          <div className="grid w-full">
            {sipCalculatedData && (
              <div className="flex flex-col justify-between gap-1">
                <div className="flex justify-between mb-3">
                  <b>Invested Amount: </b>
                  <p> {addCommas(sipCalculatedData?.invested_amount.toLocaleString())}</p>
                </div>
                <div className="flex justify-between mb-3">
                  <b>Est Return: </b>
                  <p>
                    
                    {addCommas((
                      sipCalculatedData?.totalAmount -
                      sipCalculatedData?.invested_amount
                    ).toFixed(2).toLocaleString())}
                  </p>
                </div>
                <div className="flex justify-between mb-3">
                  <b>Total value: </b>
                  <p> {addCommas(sipCalculatedData?.totalAmount)}</p>
                </div>
              </div>
            )}
          </div>
        </div>
        {sipCalculatedData&&
        <SimpleCharts />}
      </div>
      {sipCalculatedData&&
        <BarDiagram />}
    </div>
  );
};

export default DashBoard;
