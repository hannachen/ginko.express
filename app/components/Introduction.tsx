import { Container, Button, Group, Title, Text, Image, List, ThemeIcon, rem } from '@mantine/core';
import { IconBellFilled } from '@tabler/icons-react';
import classes from './Introduction.module.css';

const links = [
  { link: '/menu', label: 'Menu' },
  { link: '/faq', label: 'Frequently Asked Questions' },
];

export function Introduction() {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title order={1} className={classes.title}>Ginko <span className={classes.highlight}>Anime North</span></Title>
          <Text c="dimmed" mt="md">
            Our takeout booth is back! These items are for sale in front of our restaurant during Anime North, they are NOT available for dine&#8209;in.
          </Text>
          <Title order={2} mt={30}>Booth Hours</Title>
          <List
            mt={15}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconBellFilled className={classes.icon} stroke={2} />
              </ThemeIcon>
            }
            center
          >
            <List.Item>
              <b>Friday</b> – 4:00 pm - Midnight
            </List.Item>
            <List.Item>
              <b>Saturday</b> – 10:00 am - Midnight
            </List.Item>
            <List.Item>
              <b>Sunday</b> – 10:00 am - 6:00 pm
            </List.Item>
          </List>
        </div>
        <Image src="/images/ginko-anime-north-mascot-square.png" h={300} w="auto" fit="contain" className={classes.image} />
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