import React from "react";
import { Html, Head, Preview, Body, Container, Text } from "@react-email/components";

const Signup = ({ name }: { name: string }) => {
  return (
    <Html>
      <Head />
      <Preview>Welcome to Club Excel Quiz</Preview>
      <Body style={{ fontFamily: "DM Sans, serif", padding: "20px" }}>
        <Container>
          <Text>Hello {name},</Text>
          <Text>Thank you for signing up! We're excited to have you.</Text>
        </Container>
      </Body>
    </Html>
  );
};

export default Signup;