import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('52.79.236.16:9000/seorowiki/99423490-5fbb-4832-9278-8a040168fc4c'); // API 엔드포인트 URL로 대체
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // useEffect를 빈 배열로 전달하면 컴포넌트가 마운트될 때만 실행됩니다.

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>Data from API:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default ApiComponent;
