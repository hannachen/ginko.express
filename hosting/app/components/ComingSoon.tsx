'use client';

import { Container, Center, Title, Image, Grid } from '@mantine/core';
import Countdown, { type CountdownRendererFn } from 'react-countdown';
import classes from './ComingSoon.module.css';

export default function ComingSoon() {
  const renderer: CountdownRendererFn = ({ days, hours, minutes, seconds }) => {
    return (
      <>
        <div className={classes.countdownInfo}>
          <strong>{days}</strong> Days
        </div>
        <div className={classes.countdownInfo}>
          <strong>{hours}</strong> Hours
        </div>
        <div className={classes.countdownInfo}>
          <strong>{minutes}</strong> Minutes
        </div>
        <div className={classes.countdownInfo}>
          <strong>{seconds}</strong> Seconds
        </div>
      </>
    );
  };

  return (
    <Center bg="var(--mantine-color-gray-light)" className="full-height">
      <Container size="md">
        <div className={classes.heroContainer}>
          <div className={classes.colTitle}>
            <Title order={1} className="title">
              <span className={classes.subtitle}>Countdown to</span>
              <br />
              Ginko <span className="white">Anime North 2025</span>
            </Title>
          </div>
          <div className={classes.countdown}>
            <Countdown
              date={new Date('May 23, 2025 16:00:00')}
              renderer={renderer}
            />
          </div>
          <div className={classes.image}>
            <Image
              src="/images/ginko-anime-north-mascot-square.png"
              h="auto"
              w={250}
              fit="contain"
            />
          </div>
        </div>
      </Container>
    </Center>
  );
}
