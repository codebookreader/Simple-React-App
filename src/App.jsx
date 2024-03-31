import { useEffect, useState } from 'react'
import { Button, Container, Center, Heading, Text, Highlight, Mark } from '@chakra-ui/react';

function App() {

  const storageKeyName = "count";
  const retrieveCountValue = () => Number(localStorage.getItem(storageKeyName) || 0);

  const [count, setCount] = useState(retrieveCountValue);

  const addNumber = () => setCount(count + 1);

  useEffect(() => {
    localStorage.setItem(storageKeyName, String(count));
  }, [count]);

  return (
    
      <Container maxW={['full','container.lg']}>
        <Center m={2}>
          <Heading lineheight='tall'>
            <Highlight 
          query='Stranger' 
          styles={{ px: '1', py:'1', bg: 'orange.100'}}
          >
            Karibu! Stranger🎊
            </Highlight>
            </Heading>
        </Center>

        <Center m={2}>
          <Text fontSize='md'>This is my beautiful React webapp!</Text>
          </Center>
          <Center>
          <Mark bg='black' color='white' fontFamily='NewYork' px='4' fontSize='lg' fontWeight='bold'>
            Count is Already {count}
            </Mark>
        </Center>
        <Center>
        <Button 
        size='md'
        height='48px'
        width='200px'
        border='2px'
         variant='solid' 
         fontStyle='italic' 
         onClick={() => addNumber(count)}>
          Count Me!
        </Button>
        </Center>
      </Container>
    
  );
}

export default App;