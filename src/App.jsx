import React, { useState } from 'react'
import './App.css'
import List from './List'
import persons from './data'
import {
  Box,
  Center,
  Stack,
  useColorModeValue,Button,Heading
} from '@chakra-ui/react';

function App() {
  const [data, setData] = useState(persons)

  return (
    <div className="App-header">
     <Center py={6}>
      <Box
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.100')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Stack spacing={5}>
          <Heading color={'gray.500'}>{data.length>0?data.length+" CUMPLES DE HOY":"No hay cumples"}</Heading>
            <List personas={data}/>
            {data.length>0?<Button  colorScheme="blue" onClick={() =>setData([])}>Clear All</Button>:null}
        </Stack>
      </Box>
    </Center>
    </div>
  )
}

export default App
