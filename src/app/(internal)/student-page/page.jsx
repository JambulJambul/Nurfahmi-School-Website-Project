'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from "next/navigation";

const UserProfile = () => {
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [dataHarianEntries, setDataHarianEntries] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/user/fetch-user-data', { withCredentials: true });
        if (response.status === 200) {
          setUserData(response.data);
        } else {
          console.error('Error fetching user data:', response.data.error);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/user/fetch-data-harian', { withCredentials: true });
        if (response.status === 200) {
          setDataHarianEntries(response.data.dataHarianEntries);
        } else {
          console.error('Error fetching data harian:', response.data.error);
        }
      } catch (error) {
        console.error('Error fetching data harian:', error);
      }
    };

    fetchData();
  }, []);

  const handleLogout = async () => {
    try {
      const response = await axios.post('http://localhost:3001/auth/logout',{}, { withCredentials: true });
      if (response.status === 200) {
        setUserData(null);
        setDataHarianEntries(null);
        router.push('/');
      } else {
        console.error('Error logging out:', response.data.error);
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };


  return (
    <><div>
      {userData ? (
        <div>
          <h1>User Profile</h1>
          <p>ID: {userData.id}</p>
          <p>Username: {userData.username}</p>
          <p>Full Name: {userData.fullname}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    <div>
  {dataHarianEntries ? (
    <div>
      <h1>Data Harian {userData.fullname}</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Waktu</th>
            <th>Tanggal</th>
            <th>Nama Murid</th>
            <th>Menu Sarapan</th>
            <th>Menu Snack</th>
            <th>Menu Makan Siang</th>
            <th>Buah</th>
            <th>Minum Susu</th>
            <th>Menu Makan Sore</th>
            <th>BAB</th>
            <th>BAK</th>
            <th>Catatan Orang Tua</th>
            <th>Dijemput Jam</th>
            <th>Suhu Badan Saat Datang</th>
            <th>Tidur Siang</th>
            <th>Suhu Badan Saat Pulang</th>
            <th>Catatan Internal</th>
            <th>Materi Pelajaran</th>
          </tr>
        </thead>
        <tbody>
          {dataHarianEntries.map(entry => (
            <tr key={entry.id}>
              <td>{entry.id}</td>
              <td>{entry.waktu}</td>
              <td>{entry.tanggal}</td>
              <td>{entry.namamurid}</td>
              <td>{entry.menusarapan}</td>
              <td>{entry.menusnack}</td>
              <td>{entry.menumakansiang}</td>
              <td>{entry.buah}</td>
              <td>{entry.minumsusu}</td>
              <td>{entry.menumakansore}</td>
              <td>{entry.bab}</td>
              <td>{entry.bak}</td>
              <td>{entry.catatanorangtua}</td>
              <td>{entry.dijemputjam}</td>
              <td>{entry.suhubadansaatdatang}</td>
              <td>{entry.tidursiang}</td>
              <td>{entry.suhubadansaatpulang}</td>
              <td>{entry.catataninternal}</td>
              <td>{entry.materipelajaran}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <p>Loading...</p>
  )}
</div>
<button onClick={handleLogout}>Logout</button>
</>
  );
};

export default UserProfile;
