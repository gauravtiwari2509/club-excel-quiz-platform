import React from 'react';
import { Html, Head, Preview, Body, Container, Text } from "@react-email/components";

const  Reminder = ({name}: {name: string}) => {
  return (
    <Html>
      <Head />
      <Preview>Welcome to Club Excel Quiz</Preview>
      <Body style={{ fontFamily: "DM Sans, serif", padding: "20px" }}>
        <Container>
          <Text>Hello {name},</Text>
          <Text>Just A Reminder For Your Quiz</Text>
        </Container>
      </Body>
    </Html>
  )
}

export default Reminder;