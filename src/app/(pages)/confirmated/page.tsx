import supabase from "@/infra/supabase";
import { Card, Container, Flex, Table } from "@chakra-ui/react";

type Guests = {
  id: number;
  created_at: string;
  name: string;
  email: string;
}

export const dynamic = "force-dynamic"

export default async function Confirmated() {

  const items = await supabase
    .from('guests')
    .select<"*", Guests>()

  return (
    <Container height="full">
      <Flex height="full" justify="center" align="center">
        <Card.Root>
          <Card.Body>
            <Table.Root size="sm" width={720}>
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeader>Nome</Table.ColumnHeader>
                  <Table.ColumnHeader>Data confirmação</Table.ColumnHeader>
                  <Table.ColumnHeader>E-mail</Table.ColumnHeader>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {items?.data?.map((item) => (
                  <Table.Row key={item.id}>
                    <Table.Cell>
                      {item.name}
                    </Table.Cell>
                    <Table.Cell>
                      {new Date(item.created_at).toLocaleString('pt-BR')}
                    </Table.Cell>
                    <Table.Cell>
                      {item.email}
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Root>
          </Card.Body>
        </Card.Root>
      </Flex>
    </Container>

  )
}