import React from 'react';
import millify from 'millify';
import { Typography, Row, Statistic, Col } from 'antd';
import { Link } from 'react-router-dom';
import  Loader  from './Loader';

import { useGetCryptosQuery } from '../services/cryptoApi';
import { Cryptocurrencies, News } from './index'

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);       // all data [Api request] is fetched by hook UGCQ() homepage only 10 coins
  const globalStats = data?.data?.stats;                  //accessing data object from Api

  if (isFetching) return <Loader />;


  return (
    <>
      <Title level={2} className="heading">Global Crypto Stats</Title>
      <Row>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={globalStats.totalExchanges} /></Col>
        <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} /></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} /></Col>
        <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.total)} /></Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title" >Top 10 Global Cryptocurrencies</Title>
        <Title level={3} className="show-more" ><Link to="/cryptocurrencies">Show More</Link></Title>

      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title" >Latest Crypto News</Title>
        <Title level={3} className="show-more" ><Link to="/news">Show More</Link></Title>

      </div>
      <News simplified />
    </>
  )
}

export default Homepage;