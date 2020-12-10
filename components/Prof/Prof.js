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
          家庭の事情により公立大学中退後、アルバイト経験を経てインフラエンジニアとして働く。{' '}
          <br />
          ネットワークの死活監視、サーバー構築業務を経験。その後、母親の危篤により地元茨城へ戻り、塾講師や学校事務、大手通信回線のオペレータ業務に携わる。{' '}
          <br />
          2020年8月中旬にReactを知り、只今猛勉強中。Webエンジニアへの転職を目指す。
          <br />
          趣味は武道（空手と少林寺拳法は有段）とガジェット系（主にApple）
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
