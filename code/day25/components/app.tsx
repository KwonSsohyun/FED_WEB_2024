// ▶ Text, VStack, HStack
/*
import React from 'react';
import { Text, VStack, HStack } from '@chakra-ui/react';

export default function (){
    return <div>
        <HStack>
            <VStack>
                <Text>텍스트1</Text>
                <Text>텍스트2</Text>
                <Text>텍스트3</Text>
                <Text>텍스트4</Text>
            </VStack>
            <VStack>
                <Text>텍스트1</Text>
                <Text>텍스트2</Text>
                <Text>텍스트3</Text>
                <Text>텍스트4</Text>
            </VStack>
        </HStack>
    </div>
}
*/



// ▶ AspectRatio (비율)
/*
import React from 'react';
import { AspectRatio } from '@chakra-ui/react';

export default function (){
    return <div>
        <AspectRatio w={200} ratio={20/10}>
            <img src="https://cdn.pixabay.com/photo/2024/09/02/13/08/kingfisher-9016787_1280.jpg"/>
        </AspectRatio>
    </div>
}
*/



// ▶ Box (박스)
/*
import React from 'react';
import { Box } from '@chakra-ui/react';

export default function (){
    return <div>
        <Box bg='red'>
            내용물
        </Box>
    </div>
}
*/



// ▶ Center, Circle, Square
/*
import React from 'react';
import { Center, Circle, Square, Box } from '@chakra-ui/react';

export default function (){
    return <div>
        <Center w={500} h={200} bg="pink" color="white">
            내용물
        </Center>
        <Box w={50} h={50}>
            <Circle bg="pink" color="white">
                내용물
            </Circle>
            <Square bg="pink" color="white">
                내용물
            </Square>
        </Box>
    </div>
}
*/



// ▶ Flex, Spacer
/*
import React from 'react';
import { Flex, Spacer, Box } from '@chakra-ui/react';

export default function (){
    return <div>
        <Flex>
            <Box>1</Box>
            <Spacer/>
            <Box>2</Box>
            <Spacer/>
            <Box>3</Box>
            <Spacer/>
            <Box>4</Box>
            <Spacer/>
            <Box>5</Box>
            <Spacer/>
        </Flex>
    </div>
}
*/



// ▶ Grid, GridItem
/*
import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

export default function (){
    return <div>
        <Grid  templateRows={} templateColumns="repeat(4, 1fr)" gap={3}>
            <GridItem bg="pink">1</GridItem>
            <GridItem bg="pink" rowSpan={2}>2</GridItem>
            <GridItem bg="pink">3</GridItem>
            <GridItem bg="pink">4</GridItem>
            <GridItem bg="pink">5</GridItem>
            <GridItem bg="pink">6</GridItem>
        </Grid>
    </div>
}
*/


// ▶ Stack, VStack, HStack, StackDivider
/*
import React from 'react';
import { Stack, VStack, HStack, StackDivider, Box } from '@chakra-ui/react';

export default function (){
    return <div>
        <Stack direction={'column'} divider={<StackDivider borderColor='pink'/>}>
            <Box w={50}>1</Box>
            <Box w={50}>2</Box>
            <Box w={50}>3</Box>
            <Box w={50}>4</Box>
            <Box w={50}>5</Box>
            <Box w={50}>6</Box>
            <Box w={50}>7</Box>
            <Box w={50}>8</Box>
            <Box w={50}>9</Box>
            <Box w={50}>10</Box>
        </Stack>
    </div>
}
*/



// ▶ Image, Editable(EditablePreview, EditableInput, EditableTextarea)
/*
import React from 'react';
import { Image, Editable, EditablePreview, EditableInput, EditableTextarea } from '@chakra-ui/react';

export default function (){
    return <div>

        <Editable defaultValue='기본값'>
            <EditablePreview/>
            <EditableTextarea/>
        </Editable>

        <Image src="https://cdn.pixabay.com/photo/2024/09/02/13/08/kingfisher-9016787_1280.jpg" 
         fallbackSrc="로딩되기 전까지 보여주는 이미지"/>
    </div>
}
*/



// ▶ Input, InputGroup(InputAddon, InputLeftAddon, InputLeftElement, InputRightAddon, InputRightElement)
// ▶ Chakra Icons 아이콘 사용
/*
import React from 'react';
import { Input, InputGroup, InputLeftAddon, InputLeftElement, InputRightAddon, InputRightElement, InputAddon } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

export default function (){
    return <div>
        <InputGroup>
            <InputLeftElement><SearchIcon/></InputLeftElement>
            <Input/>
        </InputGroup>

        <InputGroup>
            <InputLeftAddon>https://www.</InputLeftAddon>
            <InputAddon borderRadius={0}>www.</InputAddon>
            <Input/>
            <InputRightAddon>.com</InputRightAddon>
        </InputGroup>

        <InputGroup>
            <InputLeftAddon>+82</InputLeftAddon>
            <InputLeftElement>+82</InputLeftElement>
            <Input/>
        </InputGroup>
    </div>
}
*/



// ▶ PinInput, PinInputField
/*
import React from 'react';
import { PinInput, PinInputField, HStack } from '@chakra-ui/react';

export default function (){
    return <div>
        <HStack>
            <PinInput type='number' mask placeholder='예시글자' defaultValue='12' onChange={(value)=>{
                console.log(value);
            }}>
                <PinInputField/>
                <PinInputField/>
                <PinInputField/>
            </PinInput>
        </HStack>
    </div>
}
*/




import React from 'react';
import { Button, Center, HStack, Input, InputGroup, InputRightAddon, InputRightElement, VStack } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export default function (){
    return <div>
        <Center>        
            <VStack w={400}>
                <Center>Naver</Center>

                <InputGroup>
                    <Input/>
                    <InputRightAddon>@naver.com</InputRightAddon>
                </InputGroup>

                <InputGroup>
                    <Input type='password'/>
                    <InputRightElement><ViewOffIcon/></InputRightElement>
                </InputGroup>

                <InputGroup>
                    <Input type='password'/>
                    <InputRightElement><ViewIcon/></InputRightElement>
                </InputGroup>
            
                <HStack>
                    <Input type='date'/>
                    <Input type='tel'/>
                </HStack>

                <Button w='100%' mt={10}>버튼</Button>
            </VStack>
        </Center>
    </div>
}