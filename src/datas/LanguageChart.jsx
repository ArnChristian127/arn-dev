import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
export default function LanguageChart() {
  const data = {
    labels: ["Languages"],
    datasets: [
      {
        label: "Lua",
        data: [40],
        backgroundColor: "#060270",
      },
      {
        label: "Java Script",
        data: [30],
        backgroundColor: "#FFDE59",
      },
      {
        label: "Python",
        data: [30],
        backgroundColor: "#5551C1",
      },
      {
        label: "Java",
        data: [20],
        backgroundColor: "#FE9900",
      },
      {
        label: "Others",
        data: [10],
        backgroundColor: "#CECECE",
      },
    ],
  };
  const options = {
    indexAxis: "y",
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.parsed.x}%`;
          },
        },
      },
    },
    scales: {
      x: {
        stacked: true,
        max: '100%',
      },
      y: {
        stacked: true,
      },
    },
  };
  return (
  <>
    <Bar data={data} options={options}/>
    <div className="flex flex-wrap gap-2 mt-2">
      {data.datasets.map((ds, i) => (
        <span key={i} className="flex items-center gap-1 text-sm">
          <span className="w-3 h-3 inline-block rounded" style={{ backgroundColor: ds.backgroundColor }}/>
            {ds.label} ({ds.data[0]}%)
          </span>
        ))}
      </div>
    </>
  );
}
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);