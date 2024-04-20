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

const DashBoard = () => {
  const dispatch = useDispatch();
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
      dispatch(setAllYearsDataForSip(data));
      toast.success("Data calculated successfully!");
    } catch (error) {
      toast.error("An error occurred while calculating.");
    }
  };

  return (
    <div className="landingpage">
      <h1 className="text-3xl font-bold">SIP Calculator</h1>
      <div className="flex row-auto flex-wrap-reverse modified">
        <div className=" flex flex-col">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="investment">Monthly Investment</Label>
            <Input
              type="number"
              id="investment"
              value={monthlyInvestment}
              onChange={handleInvestmentChange}
              className="focus-visible:ring-0"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="returnvalues">Expected Return (%)</Label>
            <Input
              type="number"
              id="returnvalues"
              value={expectedReturn}
              onChange={handleReturnChange}
              className="focus-visible:ring-0"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="period">Time Period (Years)</Label>
            <Input
              type="number"
              id="period"
              value={timePeriod}
              onChange={handlePeriodChange}
              className="focus-visible:ring-0"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Button onClick={handleSubmit}>Submit</Button>
          </div>
        </div>
        <SimpleCharts />
      </div>
    </div>
  );
};

export default DashBoard;
