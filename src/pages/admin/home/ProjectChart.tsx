

import { ArrowLeft } from 'lucide-react';
import Chart from 'react-apexcharts';


const ProjectChart = () => {
    const ChartData: any = {
        series: [
            {
                name: "",
                data: [4, 10, 9, 7, 9, 10],
            },
        ],

        chart: {
            toolbar: {
                show: false,
            },
            height: 75,
            type: "bar",
            sparkline: {
                enabled: true,
            },
            fontFamily: "inherit",
            foreColor: "#fff",
            offsetX: -5,
        },
        colors: [
            "#fff",
            "#fff",
            "#fff",
            "#fff",
            "#fff",
            "#fff",
        ],
        plotOptions: {
            bar: {
                borderRadius: 6,
                columnWidth: "40%",
                distributed: true,
                endingShape: "rounded",
                borderRadiusApplication: "end",
            },
        },

        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        grid: {
            yaxis: {
                lines: {
                    show: false,
                },
            },
        },
        xaxis: {
            axisBorder: {
                show: false,
            },
            labels: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                show: false,
            },
        },
        tooltip: {
            theme: "dark",
        },
    };
    return (
        <div className='  w-[100%] bg-[#FFC5D6] p-6  rounded-2xl ' >

            <div>
                <p className="text-subtitle">Projects</p>
                <h5 className="text-xl">78,298</h5>
                <div className="flex items-center mt-1 gap-1.5">
                    <span className="rounded-full p-1 bg-lightsuccess dark:bg-lightsuccess text-success flex items-center justify-center ">
                        <ArrowLeft size={15} />
                    </span>
                    <p className="text-dark dark:text-white text-sm mb-0">+9%</p>
                </div>
            </div>

            <div className="rounded-bars mt-2">
                <Chart
                    options={ChartData}
                    series={ChartData.series}
                    type="bar"
                    height='68px'
                    width='100%'
                />
            </div>

        </div>
    );
};

export default ProjectChart;
