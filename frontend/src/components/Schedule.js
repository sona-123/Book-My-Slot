import React, { useState } from 'react';
import { Tabs, Tab, Box, Grid, Paper } from '@mui/material';

const Schedule = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div>
      <Box className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">Schedule</h2>
          <p className="text-gray-600">27th Feb 2024</p>
        </div>
        <div className="space-x-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded">Rent & Sell</button>
          <button className="bg-green-500 text-white py-2 px-4 rounded">+ New Customer</button>
        </div>
      </Box>

      <Tabs value={activeTab} onChange={handleTabChange} className="mt-4">
        <Tab label="Swimming" />
        <Tab label="Badminton" />
      </Tabs>

      <Grid container spacing={2} className="mt-4">
        {Array.from({ length: 6 }).map((_, courtIndex) => (
          <Grid item xs={2} key={courtIndex}>
            <Paper className="p-4 text-center">Court {courtIndex + 1}</Paper>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={2} className="mt-4">
        {Array.from({ length: 6 }).map((_, slotIndex) => (
          <Grid item xs={2} key={slotIndex}>
            <Paper className="p-4 text-center">Slot {slotIndex + 1}</Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Schedule;
