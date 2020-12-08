import axios from 'axios';
import { queryCache, useQuery } from 'react-query';

export default function useLanterns() {
  return useQuery(
    'lanterns',
    async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const lanterns = await axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/post`)
        .then((res) => res.data);

      lanterns.forEach((lantern) => {
        queryCache.setQueryData(['lantern', lantern.id], lantern);
      });
      return lanterns;
    },
    {
      staleTime: 5000,
    }
  );
}
