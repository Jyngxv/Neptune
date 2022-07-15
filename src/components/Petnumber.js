import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountUp, { useCountUp } from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

function Petnumber() {
  const [policy, setPetcount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchPetcount = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 policy 를 초기화하고
        setError(null);
        setPetcount(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get('https://test.pood.pet/api/pood/main/policy');
        setPetcount(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchPetcount();
  }, []);

  if (loading) return <div>Calling</div>;
  if (error) return <div>Error</div>;
  if (!policy) return null;

  return <CountUp end={policy.saveFirstReviewPoint * 8} separator="," enableScrollSpy duration={1} />;
}

export default Petnumber;
