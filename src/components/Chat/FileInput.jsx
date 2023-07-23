import { useRef } from "react";
import Button from '@mui/material/Button';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import {
  fileButtonStyle,
  iconStyle,
  fileInputStyle
} from './styling';

const FileInput = ({ file, setFile }) => {

  const fileInputRef = useRef();

  const handleFileButton = () => {
    if (!file) {
      fileInputRef.current.click();
    } else if (file) {
      fileInputRef.current.value = '';
      setFile(null);
    };
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFile(file)
  };

  const renderIcon = () => {
    if (file) {
      return <DeleteIcon {...iconStyle}/>
    };
    return <AttachFileIcon {...iconStyle}/>
  };

  return (
    <Button
      {...fileButtonStyle}
      onClick={handleFileButton}
    >
      <input
        ref={fileInputRef}
        accept="*"
        type="file"
        {...fileInputStyle}
        onChange={handleFileUpload}
      />
      {renderIcon()}
    </Button>
  );
};

export default FileInput;