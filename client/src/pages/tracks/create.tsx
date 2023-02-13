import MainLayout from '@/components/MainLayout';
import React, { useState } from 'react';
import { Grid, Button } from '@mui/material';
import { useRouter } from 'next/router';
import StepWrapper from '@/components/StepWrapper';
import TrackInfo from '@/components/StepsComponents/TrackInfo';
import FileUpload from '@/components/StepsComponents/FileUpload';
import { createTrack } from '@/store/actions/createTrack';

const Create = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [trackInfo, setTrackInfo] = useState({ name: "", artist: "", text: "" });
  const [picture, setPicture] = useState<string | Blob>("");
  const [audio, setAudio] = useState<string | Blob>("");
  const router = useRouter();

  const next = () => {
    if (activeStep !== 2) {
      setActiveStep(prev => prev + 1);
    } else {
      const formData = new FormData();
      formData.append('name', trackInfo.name);
      formData.append('artist', trackInfo.artist);
      formData.append('text', trackInfo.text);
      formData.append('picture', picture);
      formData.append('audio', audio);
      createTrack(formData, router);
    }
  }
  const prev = () => {
    setActiveStep(prev => prev - 1);
  }

  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep}>
        {
          activeStep === 0
            ? <TrackInfo setTrackInfo={setTrackInfo} />
            : activeStep === 1
              ? <FileUpload setFile={setPicture} accept="image/*">
                <Button variant="text" color="primary">
                  Upload image
                </Button>
              </FileUpload>
              : <FileUpload setFile={setAudio} accept="audio/*">
                <Button variant="text" color="primary">
                  Upload audio
                </Button>
              </FileUpload>
        }
      </StepWrapper>
      <Grid container justifyContent={'space-between'}>
        <Button disabled={activeStep === 0} variant="text" color="primary" onClick={prev}>
          Prev
        </Button>
        <Button variant="text" color="primary" onClick={next}>
          Next
        </Button>
      </Grid>
    </MainLayout >
  );
};

export default Create;