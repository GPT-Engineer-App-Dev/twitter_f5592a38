import React, { useState } from "react";
import { Box, VStack, HStack, Avatar, Text, Heading, Textarea, Button, Divider, IconButton, Input } from "@chakra-ui/react";
import { FaTwitter, FaHome, FaBell, FaEnvelope, FaUser } from "react-icons/fa";

const Index = () => {
  const [tweets, setTweets] = useState([]);
  const [newTweet, setNewTweet] = useState("");

  const handleTweetSubmit = () => {
    if (newTweet.trim() !== "") {
      setTweets([...tweets, { id: Date.now(), content: newTweet }]);
      setNewTweet("");
    }
  };

  return (
    <Box maxW="1200px" mx="auto" py={8}>
      <HStack spacing={8}>
        <Box w="25%" bg="gray.100" p={4} borderRadius="md">
          <VStack align="stretch" spacing={6}>
            <IconButton icon={<FaTwitter />} aria-label="Twitter Logo" fontSize="3xl" variant="ghost" />
            <IconButton icon={<FaHome />} aria-label="Home" fontSize="2xl" />
            <IconButton icon={<FaBell />} aria-label="Notifications" fontSize="2xl" />
            <IconButton icon={<FaEnvelope />} aria-label="Messages" fontSize="2xl" />
            <IconButton icon={<FaUser />} aria-label="Profile" fontSize="2xl" />
            <Button colorScheme="twitter" size="lg">
              Tweet
            </Button>
          </VStack>
        </Box>
        <Box w="50%">
          <VStack align="stretch" spacing={4}>
            <Box p={4} borderWidth={1} borderRadius="md">
              <HStack spacing={4}>
                <Avatar name="John Doe" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcwOTczMzE2Nnww&ixlib=rb-4.0.3&q=80&w=1080" />
                <Textarea placeholder="What's happening?" resize="none" rows={3} value={newTweet} onChange={(e) => setNewTweet(e.target.value)} />
              </HStack>
              <HStack justify="flex-end" mt={2}>
                <Button colorScheme="twitter" onClick={handleTweetSubmit}>
                  Tweet
                </Button>
              </HStack>
            </Box>
            <Divider />
            {tweets.map((tweet) => (
              <Box key={tweet.id} p={4} borderWidth={1} borderRadius="md">
                <HStack spacing={4}>
                  <Avatar name="John Doe" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcwOTczMzE2Nnww&ixlib=rb-4.0.3&q=80&w=1080" />
                  <VStack align="start" spacing={1}>
                    <Heading size="sm">John Doe</Heading>
                    <Text>{tweet.content}</Text>
                  </VStack>
                </HStack>
              </Box>
            ))}
          </VStack>
        </Box>
        <Box w="25%" bg="gray.100" p={4} borderRadius="md">
          <Heading size="md" mb={4}>
            Who to follow
          </Heading>
          {/* Add suggested users to follow */}
        </Box>
      </HStack>
    </Box>
  );
};

export default Index;
