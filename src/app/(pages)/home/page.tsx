"use client"

import { Button, Card, Container, Flex, Image } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export default function HomePage() {
  const navigate = useRouter()

  const onConfirm = useCallback(() => {
    navigate.push("/confirmation")
  }, [navigate])

  return (
    <Container height="full">
      <Flex justify="center" align="center" height="full">
        <Card.Root>
          <Card.Body>
            <Image
              width={300}
              fit="contain"
              src="cha_ayla.webp"
              alt="imagem do convite do chá de bebê"
              alignSelf="center"
            />
          </Card.Body>
          <Card.Footer>
            <Button width="100%" onClick={onConfirm}>
              Confirmar presença
            </Button>
          </Card.Footer>
        </Card.Root>
      </Flex>
    </Container>
  )
}