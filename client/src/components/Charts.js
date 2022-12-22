import React from 'react'
import ApexCharts from 'react-apexcharts';
import axios from 'axios';

const Charts = () => {
    // chart를 그려내는 레이아웃 명세 및 임의의 데이터 셋 할당
    // 8개 정도 표현되도록 옵션 수정 및 그래프 열 로직 구성해야함.
    const datas = {
      series: [   // series에는 차트를 그래프에 나타내는 아이템 이름과 데이터로 구성 되어있다.
        {
        name: "미세먼지",
        data: [30, 41, 35, 51, 49, 62, 69, 50, 30]
      },
      {
        name: "이산화탄소",
        data: [20, 31, 24, 37, 33, 41, 52, 59, 55]
      },
      {
        name: "온도",
        data: [20, 21, 15, 31, 29, 25, 35, 37, 45]
      },
      {
        name: "습도",
        data: [17, 15, 22, 25, 23, 27, 29, 23, 24]
      }
    ],

      options: {  
        chart: {
          height: 280,
          // type: "area",
          // background: '#f0f0f0',
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 5,
            left: 5,
            blur: 3,
            // color: 'gray',
            opacity: 0.5
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth',
          width: 2,
        },
        fill: {
          // colors: ['#abedff', '#abffe6'],
          gradient: {
            type: "horizontal",
            shadeIntensity: 1,
            gradientToColors: undefined,
            // inverseColors: true,
            opacityFrom: 0.7,
            opacityTo: 0.7,
            stops: [100, 50, 50]
          }
        },
        zoom: {
          enabled: false
        },
        title: {
          text: '공기질 측정 분석',
          align: 'center'
        },
        grid: {
          row: {
            colors: ['#f3f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {    // x축에 대한 데이터 셋 -> 시간을 나타낸다
          categories: ['00:00','03:00','06:00','09:00','12:00','15:00','18:00','21:00','24:00'],
        }
      }
    };
    // console.log(datas.series[0].data.length)
    // chart 선 얇게 수정
  return (
    <div className='charts-ctn'>
        	<ApexCharts
        options={datas.options}
        series={datas.series}
        type={'area'}
        width={400}
        height={300}
        />
    </div>
  )
}

export default Charts;