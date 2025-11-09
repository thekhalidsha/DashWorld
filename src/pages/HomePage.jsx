import React, { useState, useMemo } from 'react';
import { useGetCountriesQuery } from '../features/api/countriesApi';
import MainHeader from '../components/MainHeader';
import MainFooter from '../components/MainFooter';
import Slider from '../components/Slider';
import CountryList from '../components/CountryList';
import LoadMoreButton from '../components/LoadMoreButton';
import { Container, Spinner } from 'react-bootstrap';
import HeroSection from '../components/HeroSection';
import WelcomeDivider from '../components/WelcomeDivider';

const PAGE_SIZE = 10;

export default function HomePage() {
  const [filter, setFilter] = useState('All');
  const { data, isLoading } = useGetCountriesQuery();
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = useMemo(() => {
    if (!data) return [];
    if (filter === "All") return data;
    return data.filter(c => c.region === filter);
  }, [filter, data]);

  const visibleCountries = filteredData.slice(0, PAGE_SIZE * currentPage);

  return (
    <div style={{ background: "#fafbfc", minHeight: "100vh", display: 'flex', flexDirection: 'column' }}>
      <MainHeader filter={filter} setFilter={setFilter} />
      <Container style={{ maxWidth: 950, margin: "0 auto", flex: 1 }}>
        <WelcomeDivider/>
        <HeroSection countries={filteredData.slice(0, 10)}  />
        {isLoading ? (
          <div className="my-5 text-center">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : (
          <CountryList countries={visibleCountries} />
        )}
        {(visibleCountries.length < filteredData.length) && (
          <LoadMoreButton onClick={() => setCurrentPage(p => p + 1)} />
        )}
      </Container>
      <MainFooter />
    </div>
  );
}
