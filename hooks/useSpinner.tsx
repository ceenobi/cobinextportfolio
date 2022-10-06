import { MutatingDots } from 'react-loader-spinner'
import { Flex } from '@chakra-ui/react'

export default function Spinner() {
  return (
    <Flex justifyContent='center' align='center' h='100vh'>
      <MutatingDots
        height='150'
        width='150'
        color='#e10098'
        secondaryColor='#4fa94d'
        radius='18.5'
        ariaLabel='mutating-dots-loading'
        wrapperStyle={{}}
        wrapperClass=''
        visible={true}
      />
    </Flex>
  )
}
