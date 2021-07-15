import React from 'react'
import {
    Flex, Menu, MenuButton, MenuList, MenuItem, MenuDivider,
} from "@chakra-ui/react"

import { ChevronDownIcon } from "@chakra-ui/icons"
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/auth-context'
import { Link } from 'react-router-dom'

const Header = () => {

    const navigate = useNavigate()
    const { authState, LogOut } = useAuth()

    const name = authState.user?.username
    return (
        <Flex direction="column" justifyContent="center" alignItems="center" width="100vw" background="gray.100" height="10vh" p={1}>
            <Flex justifyContent="space-around" width="100vw">
                <Flex p={3} fontSize={30}>
                    Quizzz
                </Flex>
                <Flex>

                    <Flex p={3} pt={5} fontSize={20}><Link to="/">Home</Link></Flex>


                    {
                        authState.isAuth ?
                            <Menu>
                                <MenuButton
                                    px={3}
                                    py={1}
                                    transition="all 0.2s"
                                    borderRadius="md"

                                    _hover={{ bg: "gray.100" }}
                                    _expanded={{ bg: "gray.100" }}
                                    fontSize={20}

                                >
                                    {name && name.charAt(0).toUpperCase() + name.slice(1)} <ChevronDownIcon />
                                </MenuButton>
                                <MenuList>
                                    <MenuItem onClick={() => navigate("/score")}>Score</MenuItem>
                                    <MenuDivider />
                                    <MenuItem onClick={LogOut}>Logout</MenuItem>
                                </MenuList>
                            </Menu>

                            :
                            <>

                                <Flex p={3} pt={5} fontSize={20}><Link to="/login">Login</Link></Flex>
                            </>

                    }
                </Flex>
            </Flex>
        </Flex >
    )
}


export default Header