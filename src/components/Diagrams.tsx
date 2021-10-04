import React, { FunctionComponent } from "react";
import { Bar } from "react-chartjs-2";
import { CollectionItem } from "../types/common";
interface VerticalBarProps {
  item: CollectionItem[];
}

const VerticalBar: FunctionComponent<VerticalBarProps> = ({ item }) => {
  const data = {
    labels: item.map((i: any) => i.collection),
    datasets: [
      {
        label: "Потрачено",
        data: item.map((i) => i.totalPrice),
        backgroundColor: item.map((i) => "rgba(250, 250, 250, 0.8)"),
        borderColor: item.map((i) => "rgba(255, 255, 255, 1)"),
        borderWidth: 0,
      },
    ],
  };

  const options = {
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: "white",
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            fontColor: "white",
            fontSize: 16,
          },
        },
      ],
    },
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default VerticalBar;
