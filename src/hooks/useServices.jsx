import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';

const useServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/services').then(res => {
      setServices(res.data);
    });
  }, []);

  const { data } = useQuery({
    queryKey: ['services'],
    queryFn: () => {
      return axios.get('http://localhost:5000/services').then(res => {
        return res.data;
      });
    },
  });
  console.log(data);

  return services;
};
export default useServices;
