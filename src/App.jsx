import React from 'react';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css'; // Import Mantine core styles
import DiscordColoredTextGenerator from './components/DiscordColouredTextGenerator';

function App() {
  return (
    <MantineProvider>
      <DiscordColoredTextGenerator />
    </MantineProvider>
  );
}

export default App;