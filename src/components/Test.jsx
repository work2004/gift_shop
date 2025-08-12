import React, { useEffect, useState } from 'react';
import { supabase } from './DataBaseFecth.js';

function Test() {
  const [cakes, setCakes] = useState([]);

  useEffect(() => {
    async function fetchCakes() {
      const { data, error } = await supabase.from('cake_table').select('*');
      if (error) {
        console.error('Error fetching cakes:', error);
      } else {
        console.log('Cakes data:', data);
        setCakes(data);
      }
    }

    fetchCakes();
  }, []);

  return (
    <div>
      <h1>Cakes List</h1>
      {cakes.length === 0 ? (
        <p>No cakes available.</p>
      ) : (
        <ul>
          {cakes.map((cake) => (
            <li key={cake.id}>
              {cake.name} - {cake.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Test;
