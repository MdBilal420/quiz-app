
import { Flex, Table, Thead, Tbody, Tr, Th, Td, Tfoot, Heading } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useAuth } from '../context/auth-context'

const Score = () => {

    const { getAllScore } = useAuth()
    const [scores, setScores] = useState<any>([])

    useEffect(() => {
        (async () => {
            const res = await getAllScore()
            console.log(res)
            setScores(res)
        })()
    }, [getAllScore])

    console.log(scores)
    return (
        <Flex direction="column" justifyContent="center" alignItems="center" padding={5}>
            <Heading mt={10}>Leaderboard</Heading>
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
                            return (<Tr>
                                <Td>{score.username}</Td>
                                <Td>{score.genre}</Td>
                                <Td isNumeric>{score.score}</Td>
                            </Tr>)
                        })
                    }
                </Tbody>
            </Table>

        </Flex >
    )
}

export default Score