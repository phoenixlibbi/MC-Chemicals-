import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";

// Function to generate random hex color
function getRandomColor() {
  const r = Math.floor(Math.random() * 128) + 128; // Red component in the range [128, 255]
  const g = Math.floor(Math.random() * 128) + 128; // Green component in the range [128, 255]
  const b = Math.floor(Math.random() * 128) + 128; // Blue component in the range [128, 255]
  return `rgb(${r},${g},${b})`;
}

// Update the data for yesterday's sale
const yesterdayData = [
  { label: "Solvents", value: 420, color: getRandomColor() },
  { label: "Acids", value: 320, color: getRandomColor() },
  { label: "Fragnances", value: 290, color: getRandomColor() },
  { label: "Hand washs", value: 200, color: getRandomColor() },
  { label: "Detergents", value: 150, color: getRandomColor() },
  { label: "Polishers", value: 100, color: getRandomColor() },
  { label: "Cleaners", value: 90, color: getRandomColor() },
  { label: "Disinfectants", value: 80, color: getRandomColor() },
  { label: "Bleaches", value: 70, color: getRandomColor() },
  { label: "Others", value: 60, color: getRandomColor() },
];

// Sort the data by value in descending order
yesterdayData.sort((a, b) => b.value - a.value);

// Take the top five items
const topFive = yesterdayData.slice(0, 5);

// Calculate the total sales for the top five items
const totalTopFiveSales = topFive.reduce((acc, item) => acc + item.value, 0);

// Create a separate item for "Others" containing the total sales of the remaining items
const othersItem = {
  label: "Others",
  value: yesterdayData.slice(5).reduce((acc, item) => acc + item.value, 0),
  color: getRandomColor(),
};

// Output yesterday's sale data
console.log(yesterdayData);

const TOTAL = totalTopFiveSales + othersItem.value;

const getArcLabel = (params) => {
  const percent = params.value / TOTAL;
  return `${(percent * 100).toFixed(0)}%`;
};

export default function PieChartWithCustomizedLabel() {
  return (
    <PieChart
      series={[
        {
          outerRadius: 80,
          data: [...topFive, othersItem],
          arcLabel: getArcLabel,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: "white",
          fontSize: 14,
        },
      }}
      width={350}
      height={200}
      padding={20}
      slotProps={{
        legend: {
          align: "right",
          verticalAlign: "middle",
          layout: "vertical",
          margin: 20,
          iconSize: 20,
          itemGap: 5,
          items: [...topFive, othersItem].map((item) => ({
            id: item.label,
            value: item.label,
            type: "circle",
            color: item.color,
          })),
        },
      }}
    />
  );
}
