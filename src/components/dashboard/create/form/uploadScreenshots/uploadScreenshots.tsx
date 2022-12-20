import classes from './uploadScreenshots.module.scss';
import { useEffect } from 'react';
import Image from 'next/image';
import { useDropzone } from 'react-dropzone';
import { FaCheckCircle } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

export function UploadScreenshots({
  screenshots,
  thumbnail,
  setFieldValue,
  handleChange
}) {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': []
    },
    multiple: true,
    onDrop: handleDrop
  });

  function handleDrop(acceptedFiles) {
    // ignore duplicate screenshots
    const newScreenshots = acceptedFiles.filter(f => !screenshots.map(f => f.name).includes(f.name)).map(f => Object.assign(f, {
      preview: URL.createObjectURL(f)
    }));
    setFieldValue('screenshots', [
      ...screenshots,
      ...newScreenshots
    ])
  };

  function onRemoveScreenshot(filename: string) {
    if(filename == thumbnail) {
      setFieldValue('preview', '');
    }
    setFieldValue('screenshots', screenshots.filter(f => f.name !== filename));
  }

  useEffect(() => {
    return () => screenshots.forEach(f => URL.revokeObjectURL(f.preview))
  }, [])

  return (
    <div>
      <div {...getRootProps({className: classes.dropzone})}>
        <input {...getInputProps()} />
        <p>Drag and drop files.</p>
      </div>
      {screenshots.length ? <p style={{margin: '1rem 0'}}>Please select one to use as thumbnail:</p> : null}
      <ul className={classes.screenshots}>
        {screenshots?.map(f => (
          <li key={f.preview} className={classes.radioWrapper}>
            <div className={classes.closeIcon} role="button" onClick={() => onRemoveScreenshot(f.name)}><IoClose /></div>
            <input type="radio" name="thumbnail" value={f.name} onChange={handleChange}/>
            <div className={classes.previewImage}>
              <Image src={f.preview} layout="fill" style={{
                opacity: thumbnail === f.name ? '0.4' : '1'
              }}/>
            </div>
            {thumbnail === f.name ? <span className={classes.checkIcon}><FaCheckCircle /></span> : null}
          </li>
        ))}
      </ul>
    </div>
  )
}