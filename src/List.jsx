import React from 'react'
import {
    Stack,
Avatar,Text
  } from '@chakra-ui/react';
function List({personas}) {
    return (
        <div>
                    {personas.map((per) => (
          <Stack key={per.id}mt={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar
            src={per.image}
            alt={'persona'+per.name}
          />
          <Stack  align="stretch" direction={'column'} spacing={0} fontSize={'sm'}>
            <Text color={'gray.500'} fontWeight={600}>{per.name}</Text>
            <Text color={'gray.500'}> {per.age}</Text>
          </Stack>
        </Stack>))}
        </div>
    )
}

export default List
