import { FileUploadProps } from '@/types/createTrack';
import React, { useRef } from 'react';

const FileUpload = ({ setFile, accept, children }: FileUploadProps) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target?.files ? e.target?.files[0] : null);
  }
  return (
    <div onClick={() => ref.current?.click()}>
      <input type="file" accept={accept} style={{ display: 'none' }} ref={ref} onChange={onChange} />
      {children}
    </div>
  );
};

export default FileUpload;