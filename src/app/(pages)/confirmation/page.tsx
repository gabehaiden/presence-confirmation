"use client"

import { sendConfirmation, sendEmail } from "@/app/actions";
import { toaster } from "@/components/ui/toaster";
import { Button, Card, Container, Field, Flex, Input, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { FormEventHandler, useCallback, useState } from "react";

type FormSchema = {
  name: string;
  email: string
}

export default function ConfirmationPage() {

  const [loading, setLoading] = useState(false)

  const navigate = useRouter()

  const onSubmit = useCallback<FormEventHandler<HTMLFormElement>>(async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as FormSchema;

    setLoading(true)

    try {
      await sendConfirmation(data)

      await Promise.all([
        sendConfirmation(data),
        sendEmail({
          name: data.name,
          emailTo: data.email
        })
      ])

      toaster.create({
        type: 'success',
        description: 'Presença confirmada com sucesso!'
      })

      toaster.create({
        type: 'success',
        description: 'Enviado e-mail de confirmação!'
      })

      setTimeout(() => {
        navigate.push("/")
      }, 1000)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toaster.create({
        type: 'error',
        description: error?.message
      })
    } finally {
      setLoading(false)
    }
  }, [navigate])

  const onCancel = useCallback(() => {
    navigate.push('/')
  }, [navigate])

  return (
    <Container height="full">
      <Flex height="full" justify="center" align="center">
        <Card.Root>
          <form onSubmit={onSubmit}>
            <Card.Header>
              <Text>
                Dados de confirmação
              </Text>
            </Card.Header>
            <Card.Body>
              <Stack gap={8}>
                <Field.Root>
                  <Field.Label>Nome</Field.Label>
                  <Input required type="text" name="name" placeholder="Joãozinho Trombeta" />
                </Field.Root>
                <Field.Root>
                  <Field.Label>E-mail</Field.Label>
                  <Input required type="email" name="email" placeholder="joao.trombeta@gmail.com" />
                </Field.Root>
              </Stack>
            </Card.Body>
            <Card.Footer>
              <Flex gap={2} justify="space-between" width="100%">
                <Button onClick={onCancel}>Cancelar</Button>
                <Button type="submit" disabled={loading} loading={loading}>
                  Confirmar
                </Button>
              </Flex>
            </Card.Footer>
          </form>
        </Card.Root>
      </Flex>
    </Container>
  )
}