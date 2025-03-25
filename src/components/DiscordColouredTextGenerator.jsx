import React, { useState } from 'react';
import { 
  Container, 
  Title, 
  Text, 
  Button, 
  Group, 
  Stack, 
  Textarea, 
  Paper,
  Box,
  Flex,
  Tooltip,
  Anchor
} from '@mantine/core';

const FG_COLORS = [
  '#555555',    
  '#FF0000',    
  '#9ACD32',    
  '#FFD700',    
  '#87CEFA',    
  '#FF69B4',    
  '#008080',    
  '#FFFFFF'     
];

const BG_COLORS = [
  '#0A0A1A',    
  '#8B4513',    
  '#666666',    
  '#727272',   
  '#8C8C8C',  
  '#7289DA',   
  '#9A9A9A',   
  '#FFFAFA'   
];

const FG_COLOR_NAMES = [
  'Dark Gray',
  'Red',
  'Yellowish Green',
  'Gold',
  'Light Blue',
  'Pink',
  'Teal',
  'White'
];

const BG_COLOR_NAMES = [
  'Blueish Black',
  'Rust Brown',
  'Gray (40%)',
  'Gray (45%)',
  'Light Gray (55%)',
  'Blurple',
  'Light Gray (60%)',
  'Cream White'
];

const DiscordColoredTextGenerator = () => {
  const [text, setText] = useState('Welcome to Rebane\'s Discord Colored Text Generator!');
  const [fgColor, setFgColor] = useState('#555555');
  const [bgColor, setBgColor] = useState('#0A0A1A');
  const [isBold, setIsBold] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);

  const generateDiscordText = () => {
    const colorCode = `\`\`\`ansi\n${isBold ? '\x1b[1m' : ''}${isUnderline ? '\x1b[4m' : ''}` +
      `\x1b[${30 + FG_COLORS.indexOf(fgColor)};${40 + BG_COLORS.indexOf(bgColor)}m` +
      `${text}\x1b[0m\n\`\`\``;
    
    navigator.clipboard.writeText(colorCode);
  };

  const resetAll = () => {
    setText('Welcome to Rebane\'s Discord Colored Text Generator!');
    setFgColor('#555555');
    setBgColor('#0A0A1A');
    setIsBold(false);
    setIsUnderline(false);
  };

  return (
    <Box 
      bg="#2C2F33" 
      h="100vh" 
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center' 
      }}
    >
      <Container size="sm" w="100%" maw={500}>
        <Stack gap="md" bg="#36393F" p="md" style={{ borderRadius: '8px' }}>
          <Title order={2} c="white" ta="center">Rebane's Discord Colored Text Generator</Title>

          <Text c="gray.4" ta="center">
            This is a simple app that creates colored Discord messages using the 
            ANSI color codes available on the latest Discord desktop versions.
            <br />
            <Anchor 
              href="https://github.com/" 
              target="_blank" 
              c="blue.4" 
              style={{ display: 'block', marginTop: '8px' }}
            >
              View on GitHub
            </Anchor>
          </Text>

          <Textarea
            value={text}
            onChange={(event) => setText(event.currentTarget.value)}
            bg="#2C2F33"
            c="white"
            placeholder="Enter your text here"
            autosize
            minRows={3}
            styles={{
              input: {
                border: 'none',
                backgroundColor: '#2C2F33',
                color: 'white'
              }
            }}
          />

          <Group justify="center" gap="xs">
            <Button 
              variant={isBold ? 'filled' : 'outline'} 
              onClick={() => setIsBold(!isBold)}
              color="gray"
            >
              Bold
            </Button>
            <Button 
              variant={isUnderline ? 'filled' : 'outline'}
              onClick={() => setIsUnderline(!isUnderline)}
              color="gray"
            >
              Line
            </Button>
            <Button 
              variant="outline" 
              color="gray" 
              onClick={resetAll}
            >
              Reset All
            </Button>
          </Group>

          <Flex gap="sm" direction="column">
            <Text c="white">FG Colors</Text>
            <Group justify="center">
              {FG_COLORS.map((color, index) => (
                <Tooltip 
                  key={color} 
                  label={FG_COLOR_NAMES[index]} 
                  color="green" 
                  withArrow 
                  position="bottom"
                >
                  <Box 
                    bg={color} 
                    w={30} 
                    h={30} 
                    style={{ 
                      cursor: 'pointer', 
                      border: fgColor === color ? '2px solid white' : 'none',
                      borderRadius: '4px'
                    }}
                    onClick={() => setFgColor(color)}
                  />
                </Tooltip>
              ))}
            </Group>
          </Flex>

          <Flex gap="sm" direction="column">
            <Text c="white">BG Colors</Text>
            <Group justify="center">
              {BG_COLORS.map((color, index) => (
                <Tooltip 
                  key={color} 
                  label={BG_COLOR_NAMES[index]} 
                  color="green" 
                  withArrow 
                  position="bottom"
                >
                  <Box 
                    bg={color} 
                    w={30} 
                    h={30} 
                    style={{ 
                      cursor: 'pointer', 
                      border: bgColor === color ? '2px solid white' : 'none',
                      borderRadius: '4px'
                    }}
                    onClick={() => setBgColor(color)}
                  />
                </Tooltip>
              ))}
            </Group>
          </Flex>

          <Paper 
            bg="#2C2F33" 
            withBorder 
            p="md" 
            style={{ 
              color: fgColor, 
              backgroundColor: bgColor,
              fontWeight: isBold ? 'bold' : 'normal',
              textDecoration: isUnderline ? 'underline' : 'none',
              borderRadius: '4px'
            }}
          >
            {text}
          </Paper>

          <Button 
            fullWidth 
            color="gray" 
            onClick={generateDiscordText}
          >
            Copy text as Discord formatted
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default DiscordColoredTextGenerator;