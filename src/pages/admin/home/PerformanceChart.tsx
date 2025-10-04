
import { Icon } from 'lucide-react';
import Chart from 'react-apexcharts';
const ChartData: any = {
  series: [20, 20, 20, 20, 20],
  labels: ["245", "45", "14", "78", "95"],
  chart: {
    height: 230,
    fontFamily: "inherit",
    type: "donut",
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 90,
      offsetY: 10,
      donut: {
        size: "90%",
      },
    },
  },
  grid: {
    padding: {
      bottom: -80,
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
    name: {
      show: false,
    },
  },
  stroke: {
    width: 2,
    colors: "var(--color-surface-ld)",
  },
  tooltip: {
    fillSeriesColor: false,
  },
  colors: [
    "#FF94C0",
    "#FFF55C",
    "#FFFDD6",
    "#D6FFFE",
    "#5DFFFA",
  ],
};

const PerformanceChart = () => {
  return (
    <div className=' p-6 w-[40%] shadow bg-white rounded-2xl  ' >
      
        <div>
          <h5 className="card-title">Your Performance</h5>
          <p className="card-subtitle pColor">Last check on 25 february</p>
        </div>
        <div className="grid grid-cols-12 mt-6">
          <div className="md:col-span-6 col-span-12">
            <div className="flex flex-col gap-5">
              <div className="flex gap-4 items-center">
                <span className="h-16 w-16 p-3   rounded-2xl flex-shrink-0 flex items-center justify-center bg-[#D8D6FF] text-[#8079FF]  rounded-tw">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="#000000"><g fill="none" stroke="#000000" stroke-width="1.5"><path stroke-linecap="round" d="M22 22H2m18 0V11M4 22V11"/><path stroke-linejoin="round" d="M16.528 2H7.472c-1.203 0-1.804 0-2.287.299c-.484.298-.753.836-1.29 1.912L2.49 7.76c-.324.82-.608 1.786-.062 2.479A2 2 0 0 0 6 9a2 2 0 1 0 4 0a2 2 0 1 0 4 0a2 2 0 1 0 4 0a2 2 0 0 0 3.571 1.238c.546-.693.262-1.659-.062-2.479l-1.404-3.548c-.537-1.076-.806-1.614-1.29-1.912C18.332 2 17.731 2 16.528 2Z"/><path stroke-linecap="round" d="M9.5 21.5v-3c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C10.598 16 11.065 16 12 16s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75v3"/></g></svg>
                </span>
                <div>
                  <h5 className="text-15">64 new orders</h5>
                  <p className="text-sm pColor">Processing</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4 items-center">
                  <span className="h-16 w-16 p-3  rounded-2xl flex-shrink-0 flex items-center justify-center bg-[#FFC5D6] rounded-tw">
                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24"><path fill="#FF6692" fill-rule="evenodd" d="M12 2.75a5.25 5.25 0 1 0 0 10.5a5.25 5.25 0 0 0 0-10.5ZM5.25 8a6.75 6.75 0 1 1 13.274 1.738A6.752 6.752 0 1 1 12 21.438a6.75 6.75 0 1 1-6.524-11.7A6.76 6.76 0 0 1 5.25 8Zm.77 3.136A5.252 5.252 0 0 0 8 21.25a5.25 5.25 0 0 0 5.079-6.586a6.75 6.75 0 0 1-7.058-3.529Zm8.504 3.126c.148.555.226 1.138.226 1.738a6.723 6.723 0 0 1-1.625 4.393a5.25 5.25 0 1 0 4.854-9.258a6.775 6.775 0 0 1-3.455 3.127Z" clip-rule="evenodd"/></svg>
                  </span>
                  <div>
                    <h5 className="text-15">4 orders</h5>
                    <p className="text-sm pColor">On hold</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4 items-center">
                  <span className="h-16 w-16 p-3 rounded-2xl flex-shrink-0 flex items-center justify-center bg-[#C5F2F1] rounded-tw">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="#16CDC7"><g fill="none" stroke="#16CDC7" stroke-width="1.5"><path stroke-linecap="round" d="M11 9.5a4.5 4.5 0 1 0-9 0m9 0a4.5 4.5 0 0 1-9 0m9 0H2m12.757-2.379A3 3 0 1 0 19 2.88a3 3 0 0 0-4.243 4.242Z"/><path d="M20.905 17.381a3.738 3.738 0 0 0-5.286-5.286l-3.524 3.524a3.738 3.738 0 0 0 5.286 5.286l3.524-3.524Z"/><path d="M14 14s.281 1.46 1.911 3.09C17.541 18.718 19 19 19 19"/></g></svg>
                  </span>
                  <div>
                    <h5 className="text-15">12 orders</h5>
                    <p className="text-sm pColor ">Delivered</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-6 col-span-12 md:-mt-8 mt-4">
            <Chart
              options={ChartData}
              series={ChartData.series}
              type="donut"
              height="230px"
              width="100%"
            />
            <h4 className="text-center text-3xl md:mt-3 font-semibold ">275</h4>
            <p className="text-sm text-center mt-3 pColor ">
            Learn insigs how to manage all aspects of your startup.
            </p>
          </div>
        </div>
     
    </div>
  );
};

export default PerformanceChart;
