import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';

const useServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    axios
      .get('https://car-doctor-server-umber-psi.vercel.app/services')
      .then(res => {
        setServices(res.data);
      });
  }, []);

  const { data } = useQuery({
    queryKey: ['services'],
    queryFn: () => {
      return axios
        .get('https://car-doctor-server-umber-psi.vercel.app/services')
        .then(res => {
          return res.data;
        });
    },
  });
  console.log(data);

  return services;
};
export default useServices;
