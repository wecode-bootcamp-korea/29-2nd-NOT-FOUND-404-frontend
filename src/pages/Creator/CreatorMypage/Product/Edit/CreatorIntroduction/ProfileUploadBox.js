import React, { useState } from 'react';
import styled from 'styled-components';
import Camera from '../../../../img/camera.svg';

function ProfileUploadBox() {
  const [fileImage, setFileImage] = useState('');

  const saveFileImage = e => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <form encType="multipart/form-data">
      <ImgBox for="file">
        {fileImage && <FileImg src={fileImage} />}
        <AddBtn for="file">
          <Icon src={Camera} />
        </AddBtn>
        <input
          type="file"
          accept="image/*"
          id="file"
          onChange={saveFileImage}
          style={{ display: 'none' }}
        />
      </ImgBox>
    </form>
  );
}

export default ProfileUploadBox;

const ImgBox = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 86px;
  height: 86px;
  border-radius: 100%;
  background-color: #efefef;
  cursor: pointer;
`;

const FileImg = styled.img`
  position: absolute;
  width: 86px;
  height: 86px;
  border-radius: 100%;
  object-fit: cover;
`;

const AddBtn = styled.label`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0px;
  bottom: 0px;
  width: 32px;
  height: 32px;
  border-radius: 100%;
  background-color: black;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 15px;
`;
