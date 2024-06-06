'use client'

import { Container, Center, Title, Image } from '@mantine/core';
import Countdown, { type CountdownRendererFn } from 'react-countdown';
import classes from './comingsoon.module.css';

export default function ComingSoon() {
  const renderer: CountdownRendererFn = ({ days, hours, minutes, seconds }) => {
    return (
      <>
        <Title order={3} mt={30}>
          <span>{days} Days</span>
        </Title>
        <Title order={3}>
          <span>{hours} Hours</span>
        </Title>
        <Title order={4} mt={15}>
          <span>{minutes} Minutes</span>
        </Title>
        <Title order={4}>
          <span>{seconds} Seconds</span>
        </Title>
      </>
    );
  };

  return (
    <Center bg="var(--mantine-color-gray-light)" className="full-height">
      <Container size="md">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title order={1} className="title">
              <span className={classes.subtitle}>Countdown to</span><br />
              Ginko <span className="white">Anime North 2025</span>
            </Title>
            <Countdown
              date={new Date('May 23, 2025 16:00:00')}
              renderer={renderer}
            />
          </div>
          <Image
            src="/images/ginko-anime-north-mascot-square.png"
            h={250}
            w="auto"
            fit="contain"
          />
        </div>
      </Container>
    </Center>
  );
}
