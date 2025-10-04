

import Chart from 'react-apexcharts';
const ChartData: any = {
  series: [
    {
      name: "April 07 ",
      data: [0, 20, 15, 19, 14, 25, 30],
    },
    {
      name: "Last Week",
      data: [0, 8, 19, 13, 26, 16, 25],
    },
  ],
  chart: {
    fontFamily: "inherit",
    height: 100,
    type: "line",
    toolbar: {
      show: false,
    },
    sparkline: {
      enabled: true,
    },
  },
  colors: ["#635BFF", "#C8C5FF"],
  grid: {
    show: false,
  },
  stroke: {
    curve: "smooth",
    colors: ["#635BFF", "#C8C5FF"],
    width: 2,
  },
  markers: {
    colors: ["#635BFF", "#C8C5FF"],
    strokeColors: "transparent",
  },
  tooltip: {
    theme: "dark",
    x: {
      show: false,
    },
    followCursor: true,
  },
};
const CustomerChart = () => {
  return (
    <div className=' w-[30%] bg-white p-7 rounded-2xl ' >
      
        <div className="flex justify-between align-baseline">
          <div>
            <h5 className="h5Tag">Customers</h5>
            <p className=" pColor ">Last 7 days</p>
          </div>
          <span className="text-13 font-semibold text-[#49CC7A] text-success">+26.5%</span>
        </div>
        <div className="mt-5">
          <Chart
            options={ChartData}
            series={ChartData.series}
            type="line"
            height="120px"
            width="100%"
          />
        </div>
        <div className="mt-8">
          <div className="flex justify-between">
            <div className="flex gap-2 text-sm  items-center">
              <span className="bg-[#635BFF] rounded-full h-2 w-2"></span>
              <span className="text-ld opacity-90">April 07 - April 14</span>
            </div>
            <span className="text-ld opacity-90 ">6,380</span>
          </div>
          <div className="flex justify-between mt-2">
            <div className="flex gap-2 text-sm  items-center">
              <span className="bg-[#EFF4FA] rounded-full h-2 w-2"></span>
              <span className="text-ld opacity-90">Last Week</span>
            </div>
            <span className="text-ld opacity-90 ">4,298</span>
          </div>
        </div>
      
    </div>
  );
};

export default CustomerChart;
