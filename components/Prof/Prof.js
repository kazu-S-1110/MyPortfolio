import styled from 'styled-components';
import Style from './Prof.module.scss';

const Prof = () => {
  return (
    <div className={Style.section}>
      <Cont>
        <Img src="/prof.jpg" alt="" srcset="" />
        <p>
          名前：kazu
          <br />
          生まれ：1994年
          <br />
          公立大学中退後、東京のSESにてインフラエンジニアとして勤務。
          <br />
          その後、母親の危篤により地元茨城へ戻り、複数のアルバイト業務に携わる。
          <br />
          2020年8月頃Reactを知り、勉強開始。
          <br />
          2021年より某自治体のIT支援員として勤務。（≒社内エンジニア。業務自動化や無線環境整備など）
          <br />
          趣味は少林寺拳法やアニメやガジェットなど
        </p>
      </Cont>
      <div className={Style.wave}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={Style.content}></div>
    </div>
  );
};

const Cont = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 50px;

  font-size: 17px;
  z-index: 3;

  p {
    color: white;
  }

  @media screen and (max-width: 690px) {
    display: flex;
    flex-wrap: wrap;
    font-size: 17px;
    padding: 5px 20px;
    line-height: 1.7;
    margin-bottom: 20px;
  }
`;

const Img = styled.img`
  border: 7px white solid;
  border-radius: 50%;
  width: 200px;
  height: auto;
  margin-right: 50px;

  @media screen and (max-width: 690px) {
    margin: 20px auto;
  }
`;

export default Prof;
