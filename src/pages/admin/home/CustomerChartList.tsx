
import Chart from 'react-apexcharts';

const ChartData: any = {
    series: [
        {
            name: "customers",
            data: [36, 45, 31, 47, 38, 43],
            color: "#16CDC7",
        },
    ],

    chart: {
        type: "area",
        height: 70,
        sparkline: {
            enabled: true,
        },
        group: "sparklines",
        fontFamily: "inherit",
        foreColor: "#adb0bb",
    },
    color: "#16CDC7",
    stroke: {
        curve: "smooth",
        width: 2,
    },
    fill: {
        type: "gradient",
        color: "var(--color-secondary)",
        gradient: {
            shadeIntensity: 0,
            inverseColors: false,
            opacityFrom: 0.2,
            opacityTo: 0.8,
            stops: [100],
        },
    },
    markers: {
        size: 0,
    },
    tooltip: {
        theme: "dark",
        fixed: {
            enabled: true,
            position: "right",
        },
        x: {
            show: false,
        },
    },
};

const CustomerChart = () => {
    return (
        <div className=' bg-[#C5F2F1] w-[20%] rounded-2xl ' >

            <div className="bg-lightsecondary  ">
                <div className="p-6">
                    <p className="text-ld">Customers</p>
                    <div className="flex gap-3 align-self">
                        <h5 className="text-2xl">36,358</h5>
                        <span className="text-13 text-ld font-semibold pt-1">-12%</span>
                    </div>
                </div>
                <Chart
                    options={ChartData}
                    series={ChartData.series}
                    type="area"
                    height="70px"
                    width="100%"
                />
            </div>
        </div>
    );
};

export default CustomerChart;
