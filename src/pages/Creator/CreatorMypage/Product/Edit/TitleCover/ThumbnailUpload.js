import React, { useState } from 'react';
import styled from 'styled-components';
import addImg from '../../../../img/add-photo-portrait.png';
import Delete from '../../../../img/delete-2.svg';

function ThumbnailUpload() {
  const [fileImage, setFileImage] = useState('');

  const saveFileImage = e => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
  };

  const deleteFileImage = () => {
    URL.revokeObjectURL(fileImage);
    setFileImage('');
  };

  return (
    <ImgBox>
      {fileImage ? (
        <>
          <Img src={fileImage} />
          <DeleteBtn onClick={deleteFileImage}>
            <Icon src={Delete} />
          </DeleteBtn>
        </>
      ) : (
        <div>
          <Label>
            <AddImg src={addImg} />
            이미지를 첨부해주세요
            <input
              type="file"
              accept="image/*"
              id="check"
              style={{ display: 'none' }}
              onChange={saveFileImage}
            />
          </Label>
        </div>
      )}
    </ImgBox>
  );
}

export default ThumbnailUpload;

const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 294px;
  height: 220px;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  font-size: 14px;
  color: #cacaca;
  letter-spacing: -0.5px;
  cursor: pointer;
`;

const Img = styled.img`
  width: 294px;
  height: 220px;
  border-radius: 3px;
  object-fit: cover;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const AddImg = styled.img`
  margin-bottom: 10px;
  width: 72px;
  height: 72px;
`;

const DeleteBtn = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 10px;
  right: 10px;
  width: 28px;
  height: 28px;
  border-radius: 100%;
  background-color: #fff;

  &:hover {
    background-color: #e6e6e6;
  }
`;

const Icon = styled.img`
  width: 16px;
`;
