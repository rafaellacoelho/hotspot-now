feather.replace();

// SUBMENU
let aside = document.querySelector('aside');
let icon = aside.querySelector('.menu-icon');
let li = aside.getElementsByClassName('nav-item');

for (let i of li){
    i.onclick = activeLi;
}

function activeLi() {
    const list = Array.from(li);
    list.forEach(e=>e.classList.remove('active'));
    this.classList.add('active');
}

// CHART
const xValues = [
  "14/08",
  "15/08",
  "16/08",
  "17/08",
  "18/08",
  "19/08",
  "20/08",
  "21/08",
  "22/08",
  "22/08",
  "23/08",
  "24/08",
];

const newConnections = [10, 20, 45, 22, 12, 50, 33, 80, 65, 42, 85, 37];
const authenticationAccess = [2, 16, 34, 61, 73, 87, 20, 99, 25, 3, 90, 55];
const noAuthenticationAccess = [1, 9, 2, 5, 0, 20, 0, 0, 0, 0, 0, 0];

const lineChart = new Chart("lineChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [
      {
        fill: false,
        lineTension: 0,
        backgroundColor: "#9226C3",
        borderColor: "#9226C3",
        borderWidth: 1,
        data: newConnections,
      },
      {
        fill: false,
        lineTension: 0,
        backgroundColor: "#0066CC",
        borderColor: "#0066CC",
        borderWidth: 1,
        data: authenticationAccess,
      },
      {
        fill: false,
        lineTension: 0,
        backgroundColor: "#FF0000",
        borderColor: "#FF0000",
        borderWidth: 1,
        data: noAuthenticationAccess,
        borderDash: [5, 4],
      },
    ],
  },
  options: {
    legend: { display: false },
    tooltips: {
      callbacks: {
        title: function () {
          return "";
        },
        label: function (tooltipItem, data) {
          return tooltipItem.yLabel;
        },
      },
    },
    scales: {
      yAxes: [
        {
          min: 0,
          max: 100,
          ticks: {
            stepSize: 25,
            fontSize: 10,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            fontSize: 10,
            fontColor: "black",
            fontFamily: "Poppins",
          },
        },
      ],
    },
  },
});

const accessNet = [25, 33, 44, 29, 20, 30, 32, 34, 49, 42, 50, 37];

const barChart = new Chart("barChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [
      {
        fill: false,
        lineTension: 0,
        backgroundColor: "#F2EFFF",
        borderRadius: 10,
        hoverBackgroundColor: "#9226C3",
        data: accessNet,
      },
    ],
  },
  options: {
    legend: { display: false },
    tooltips: {
      callbacks: {
        title: function () {
          return "";
        },
        label: function (tooltipItem, data) {
          return tooltipItem.yLabel;
        },
      },
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            beginAtZero: true,
            max: 50,
            stepSize: 5,
            fontSize: 10,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            fontSize: 10,
            fontColor: "black",
            fontFamily: "Poppins",
          },
        },
      ],
    },
  },
});
