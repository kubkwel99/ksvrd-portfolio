
import React, { useEffect, useState } from 'react';

const UploadComponent: React.FC = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [uploadMessage, setUploadMessage] = useState<string | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);

  useEffect(() => {
    const loadCloudinaryScript = () => {
      const existingScript = document.getElementById('cloudinary-script');
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = 'https://upload-widget.cloudinary.com/global/all.js';
        script.id = 'cloudinary-script';
        script.onload = () => setScriptLoaded(true);
        document.body.appendChild(script);
      } else {
        setScriptLoaded(true);
      }
    };

    loadCloudinaryScript();
  }, []);

  const handleUpload = () => {
    if (window.cloudinary && scriptLoaded) {
      setUploading(true);
      setUploadMessage(null);

      window.cloudinary.openUploadWidget(
        {
          cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
          uploadPreset: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
        },
        (error: any, result: any) => {
          setUploading(false);
          if (error) {
            setUploadMessage('Súbor zlzhal. Skús znova.');
          } else {
            setUploadMessage(`Súbor nahratý!`);
          }
        }
      );
    } else {
      setUploadMessage('Prihlás sa ak chceš nahrať súbor.');
    }
  };

  return (
    <div className='flex flex-col items-center justify-center mx-auto'>
      <button
        className='bg-yellow-500 px-6 pt-1 rounded-md hover:bg-yellow-600 transition-all'
        type='button'
        onClick={handleUpload}
        disabled={!scriptLoaded || uploading}>
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
      {uploadMessage && <p className='px-6 pt-1 rounded-md '>{uploadMessage}</p>}
    </div>
  );
};

export default UploadComponent;
