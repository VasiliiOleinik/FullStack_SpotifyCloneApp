import { StepWrapperProps } from '@/types/createTrack';
import React from 'react';
import { steps } from '@/constants';
import { Step, Grid, Stepper, Container, StepLabel, Card } from '@mui/material'

const StepWrapper = ({ activeStep, children }: StepWrapperProps) => {
  return (
    <Container>
      <Stepper activeStep={activeStep}>
        {steps.map((step, i) =>
          <Step key={i} completed={activeStep > i}>
            <StepLabel>{step}</StepLabel>
          </Step>
        )}
      </Stepper>
      <Grid
        container
        justifyContent="center"
        style={{ margin: '70px 0px', height: 270 }}
      >
        <Card style={{ width: 500 }}>
          {children}
        </Card>
      </Grid>
    </Container>
  );
};

export default StepWrapper;