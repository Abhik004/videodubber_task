import React from 'react';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css'; 
import DiscordColoredTextGenerator from './components/DiscordColouredTextGenerator';

function App() {
  return (
    <MantineProvider>
      <DiscordColoredTextGenerator />
    </MantineProvider>
  );
}

export default App;