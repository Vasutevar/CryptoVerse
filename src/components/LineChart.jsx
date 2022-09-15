import React from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';
import { Chart , LineController, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js';
import moment from 'moment'
Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale);


const { Title } = Typography;

//imported as props from CryptoDetails
const LineChart =  ({ coinHistory, coinName, currentPrice }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  //looping till end of coinHistory
  for (let i = 0; i < coinHistory?.data?.history?.length; i += 25) {
    // console.log(coinHistory?.data?.history[i].price);
     coinPrice.push(coinHistory?.data?.history[i].price);
  }
 
  

  for (let i = 0; i < coinHistory?.data?.history?.length; i+= 25) {
    // console.log(coinHistory?.data?.history[i].timestamp);
    coinTimestamp.push(moment.unix(coinHistory.data.history[i].timestamp).format('ll'));
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price in USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd'

      }
    ]
  }

  const options = {
    scales: {
      y: {
        ticks: {
          beginAtZero: true,
        }
      }
    }
  }

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">{coinName} Price Chart</Title>
        <Col className="price-container">
          <Title level={5} className="price-change">{coinHistory?.data?.change}%</Title>
          <Title level={4} className="current-price">Current {coinName} Price : ${currentPrice} </Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  )
}

export default LineChart;



