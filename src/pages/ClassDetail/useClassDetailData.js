import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../config';

const useClassDetailData = () => {
  const [detailData, setDetailData] = useState({});
  const classId = useParams().classId;

  useEffect(() => {
    const getDetailData = async () => {
      const json = await (await fetch(api.products + '/' + classId)).json();
      setDetailData(json.product_result);
    };
    getDetailData();
  }, [classId]);

  const levelArr = ['입문자', '초급자', '중급자', '준전문가', '전문가'];
  const level = levelArr[detailData.level - 1];

  return { detailData, level };
};

export default useClassDetailData;
