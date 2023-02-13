export interface StepWrapperProps {
  activeStep: number;
  children: JSX.Element | boolean;
}

export interface FileUploadProps {
  setFile: Function,
  accept: string;
  children: any;
}