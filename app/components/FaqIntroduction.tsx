import { Container, Button, Group, Title, Text, Image, List, ThemeIcon, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import classes from './Introduction.module.css';

const links = [
  { link: '/menu', label: 'Menu' },
  { link: '/faq', label: 'Frequently Asked Questions' },
];

export function FaqIntroduction() {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>Frequently Asked Questions</Title>
          <Text c="dimmed" mt="md">
            Our takeout Anime North table is back! These items are for sale in front of our restaurant during Anime North (they are NOT available for dine-in ordering).
          </Text>
          <Title order={3} mt={30}>Booth Hours</Title>
          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>Friday</b> – 4:00 pm - 12:00 am
            </List.Item>
            <List.Item>
              <b>Saturday</b> – 10:00 am - 12:00 am
            </List.Item>
            <List.Item>
              <b>Sunday</b> – 10:00 am - 6:00 pm
            </List.Item>
          </List>
        </div>
        <Image src="/images/ginko-anime-north-mascot-square.png" h={250} w="auto" fit="contain" />
      </div>
      <Group mt={30}>
        <Button radius="xl" size="md" className={classes.control}>
          All Food
        </Button>
        <Button variant="default" radius="xl" size="md" className={classes.control}>
          Onigiri
        </Button>
        <Button variant="default" radius="xl" size="md" className={classes.control}>
          Hot Food
        </Button>
        <Button variant="default" radius="xl" size="md" className={classes.control}>
          Dessert
        </Button>
        <Button variant="default" radius="xl" size="md" className={classes.control}>
          Drinks
        </Button>
      </Group>
    </Container>
  );
}