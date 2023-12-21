import React, { useState } from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  Avatar,
  Stack,
} from "@chakra-ui/react";
import { FiArrowRightCircle, FiCheck, FiMail } from "react-icons/fi";

interface User {
  id: number;
  avatar: string;
  name: string;
  city: string;
  approved: boolean;
}

interface UserInfoProps {
  user: User;
  onApprove: (userId: number, approved: boolean) => void;
}

const UserInfo = ({ user, onApprove }: UserInfoProps) => {
  const { avatar, name, city, approved } = user;

  return (
    <Flex alignItems="center" mb={4} w="100%" justifyContent={"space-between"}>
      <Flex alignItems="center" gap={2}>
        <Avatar src={avatar} name={name} boxSize={8} />
        <Text lineHeight="1em" fontWeight={"500"} fontSize={"14px"}>
          {name}
        </Text>
      </Flex>
      <Flex alignItems="center" gap="15px">
        <Box
          bg={approved ? "green" : "gray"}
          color={approved ? "white" : "white"}
          p="8px 8px"
          fontWeight={"600"}
          fontSize={"14px"}
          borderRadius={"5px"}
          lineHeight={"1em"}
          onClick={() => onApprove(user.id, !approved)}
        >
          {approved ? "Guestlist" : "Select"}
        </Box>
      </Flex>
    </Flex>
  );
};

const SelectGuest = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      avatar: "https://bit.ly/kent-c-dodds",
      name: "John Doe",
      city: "New York",
      approved: true,
    },
    {
      id: 2,
      avatar: "https://bit.ly/dan-abramov",
      name: "Jane Smith",
      city: "Los Angeles",
      approved: false,
    },
  ]);

  const handleApprove = (userId: number, approved: boolean) => {
    setUsers((prev) =>
      prev.map((user) => (user.id === userId ? { ...user, approved } : user))
    );
  };

  return (
    <Flex flexDir={"column"}>
      {users.map((user) => (
        <UserInfo key={user.id} user={user} onApprove={handleApprove} />
      ))}
      <Flex justifyContent={"flex-start"} gap="15px">
        <Button gap={2} alignSelf={"flex-start"} mt={4} colorScheme="blue">
          Confirm Guests
        </Button>
        <Button
          isDisabled
          gap={2}
          alignSelf={"flex-start"}
          mt={4}
          colorScheme="blue"
        >
          <FiMail /> Send Notifications
        </Button>
      </Flex>
    </Flex>
  );
};

export default SelectGuest;
