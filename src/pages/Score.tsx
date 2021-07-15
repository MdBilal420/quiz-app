
import { Table, Thead, Tbody, Tr, Th, Td, Heading, Container, Center } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useAuth } from '../context/auth-context'

const Score = () => {

    const { getAllScore } = useAuth()
    const [scores, setScores] = useState<any>([])
    const [load, setLoad] = useState<boolean>(true)

    useEffect(() => {
        (async () => {
            const res = await getAllScore()
            console.log(res)
            setScores(res)
            setLoad(false)
        })()
    }, [getAllScore])

    return (
        <Container justifyContent="center" alignItems="center" padding={5} >
            <Heading m={10}>
                <Center>Leaderboard</Center></Heading>
            {load && <h3>Loadingg</h3>}
            <Table size="md" padding={3}>
                <Thead>
                    <Tr>
                        <Th>Player</Th>
                        <Th>Genre</Th>
                        <Th isNumeric>Score</Th>
                    </Tr>
                </Thead>
                <Tbody>

                    {
                        scores.map((score: any) => {
                            return (<Tr key={score._id}>
                                <Td>{score.username}</Td>
                                <Td>{score.genre}</Td>
                                <Td isNumeric>{score.score}</Td>
                            </Tr>)
                        })
                    }
                </Tbody>
            </Table>

        </Container >
    )
}

export default Score