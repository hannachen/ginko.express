import { Container, Title, Text } from '@mantine/core';
import classes from './MenuItem.module.css';

interface MenuItemProps {
  name: string;
  description: string;
}

export function MenuItem({name, description}: MenuItemProps) {
  return (
    <Container>
      <Title order={5}>{name}</Title>
      <Text mt="md">{description}</Text>
    </Container>
  );
}