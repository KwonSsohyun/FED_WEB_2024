import React from 'react';
import { Center, HStack, VStack, InputGroup, Input, InputRightElement, InputLeftElement, Button, FormLabel, Text, Checkbox } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

export default function App() {
    return <div>
        <Center> 
            <VStack w={500} pt={10}>
                <Center fontSize="2xl">회원가입</Center>
                
                <InputGroup mb={5}>
                    <VStack align={'start'} w='100%'>
                        <FormLabel>이름</FormLabel>
                        <HStack w='100%'>
                            <Input placeholder='성' w='30%'></Input>
                            <Input placeholder='이름' w='70%'></Input>
                        </HStack>
                    </VStack>
                </InputGroup>

                <InputGroup mb={5}>
                    <VStack align={'start'} w='100%'>
                        <FormLabel>이메일 주소</FormLabel>
                        <HStack w='100%'>
                            <Input/>
                        </HStack>
                        <Text color='blue' fontSize='sm'>새 이메일을 만들고 싶습니다.</Text>
                    </VStack>
                </InputGroup>

                <InputGroup mb={5}>
                    <VStack align={'start'} w='100%'>
                        <FormLabel>비밀번호 만들기</FormLabel>
                        <HStack w='100%'>
                            <Input type='password' />
                        </HStack>
                    </VStack>
                </InputGroup>

                <InputGroup mb={5}>
                    <VStack align={'start'} w='100%'>
                        <FormLabel>비밀번호 확인</FormLabel>
                        <HStack w='100%'>
                            <Input type='password' />
                        </HStack>
                    </VStack>
                </InputGroup>

                <InputGroup mb={5}>
                    <VStack align={'start'} w='100%'>
                        <FormLabel>생년월일</FormLabel>
                        <HStack w='100%'>
                            <Input placeholder='연도' />
                            <InputGroup>
                                <Input placeholder='월' />
                                <InputRightElement children={<ChevronDownIcon/>} />
                            </InputGroup>
                            <InputGroup>
                                <Input placeholder='일' />
                                <InputRightElement children={<ChevronDownIcon/>} />
                            </InputGroup>
                        </HStack>
                    </VStack>
                </InputGroup>

                <InputGroup mb={5}>
                    <VStack align={'start'} w='100%'>
                        <FormLabel>성별</FormLabel>
                        <HStack w='100%'>
                            <InputGroup>
                                <Input placeholder='성별' />
                                <InputRightElement children={<ChevronDownIcon/>} />
                            </InputGroup>
                        </HStack>
                    </VStack>
                </InputGroup>

                <InputGroup mb={5}>
                    <VStack align={'start'} w='100%'>
                        <FormLabel>휴대전화</FormLabel>
                        <HStack w='100%'>
                            <InputGroup>
                                <InputLeftElement>+82</InputLeftElement>
                                <Input/>
                            </InputGroup>
                        </HStack>
                    </VStack>
                </InputGroup>

                <InputGroup mb={5}>
                    <VStack align={'start'} w='100%'>
                        <FormLabel>지역</FormLabel>
                        <HStack w='100%'>
                            <InputGroup>
                                <Input placeholder='대한민국' />
                                <InputRightElement children={<ChevronDownIcon/>} />
                            </InputGroup>
                        </HStack>
                    </VStack>
                </InputGroup>

                <VStack align={'start'} w='100%' mt={5}>
                    <Checkbox>
                        개인정보취급방침 및 개인정보수집항목 동의합니다.
                    </Checkbox>
                </VStack>

                <Button w='100%' mt={10} mb={20}>다음 단계</Button>
            </VStack>
        </Center>
    </div>
}