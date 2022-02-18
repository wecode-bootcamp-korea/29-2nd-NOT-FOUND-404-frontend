import React from 'react';
import styled from 'styled-components';
import theme from '../../../../../../styles/theme';
import addImg from '../../../../img/add-photo-portrait.png';
import Delete from '../../../../img/delete-2.svg';

function LearnBox({
  files,
  setFiles,
  values,
  setValues,
  index,
  upLoadImg,
  setUpLoadImg,
  idx,
}) {
  const saveFileImage = e => {
    setFiles(prev => ({
      ...prev,
      [e.target.name]: URL.createObjectURL(e.target.files[0]),
    }));

    setUpLoadImg(prev => ({
      ...prev,
      [e.target.name]: e.target.files[0],
    }));
  };

  const deleteFileImage = () => {
    URL.revokeObjectURL(files[`img${index}`]);
    setFiles(prev => ({
      ...prev,
      [`img${index}`]: '',
    }));
  };

  const saveText = e => {
    const { id, value } = e.target;
    setValues(prev => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <BoxWarp>
      <ImgBox>
        {files[`img${index - 1}`] ? (
          <>
            <FileImg />
            <Img src={files[`img${index - 1}`]} />
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
                name={`img${index - 1}`}
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
      <TextBox
        type="text"
        placeholder="제목을 적어주세요."
        id={`title${index - 1}`}
        onChange={saveText}
      />
      <AccountBox
        type="text"
        placeholder="사진,영상에 대한 설명을 적어주세요."
        id={`account${index - 1}`}
        onChange={saveText}
      />
    </BoxWarp>
  );
}

export default LearnBox;

const BoxWarp = styled.section`
  margin: 0px 26px 26px 0px;
  display: flex;
  flex-direction: column;
`;

const ImgBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 294px;
  height: 165.38px;
  color: ${theme.silvergray};
  border: 1px solid ${theme.palegray};
  border-radius: 3px;
  font-size: 14px;
  letter-spacing: -0.5px;
`;

const Img = styled.img`
  width: 294px;
  height: 165.38px;
  border-radius: 3px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 16px;
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

const TextBox = styled.input`
  padding: 0px 16px;
  margin-top: 8px;
  width: 294px;
  height: 40px;
  border: 1px solid ${theme.palegray};
  border-radius: 3px;

  &:hover {
    border: 1px solid ${theme.softgray};
  }

  &:focus {
    border: 1px solid black;
  }

  &::placeholder {
    color: ${theme.silvergray};
  }
`;

const AccountBox = styled.textarea`
  padding: 12px 16px;
  margin-top: 8px;
  width: 294px;
  height: 104px;
  border: 1px solid ${theme.palegray};
  border-radius: 3px;
  letter-spacing: -0.5px;
  font-family: 'Noto Sans KR';

  &::placeholder {
    color: ${theme.silvergray};
  }

  &:hover {
    border: 1px solid ${theme.softgray};
  }

  &:focus {
    outline: none;
    border: 1px solid black;
  }
`;

const AddImg = styled.img`
  margin-bottom: 10px;
  width: 72px;
  height: 72px;
`;

const FileImg = styled.img`
  width: 294px;
  height: 165.38px;
  border: 1px solid ${theme.palegray};
  border-radius: 3px;
  object-fit: cover;
`;
