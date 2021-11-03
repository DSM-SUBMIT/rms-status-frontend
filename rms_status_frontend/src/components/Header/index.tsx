import React from 'react';
import * as S from './style';
import { PAGE } from '../../constance/header';
import { openSite } from '../../assets/header';
import { useHistory } from 'react-router-dom';

const Header = () => {
  const history = useHistory();

  const textClickHandler = (event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
    const dataId = event.currentTarget.dataset.id;
    if (dataId === 'user') window.location.href = PAGE[0].uri;
    else if (dataId === 'admin') window.location.href = PAGE[1].uri;
    else if (dataId === 'error') history.push(PAGE[2].uri);
  };

  const logoClickHandler = () => {
    history.push('/');
  };

  return (
    <S.Header>
      <S.HeaderContent>
        <S.Logo onClick={logoClickHandler} />
        <div>
          {PAGE.map(data => {
            return (
              <div key={data.id}>
                <p key={data.id} data-id={data.id} onClick={textClickHandler}>
                  {data.content}
                </p>
                <img src={openSite} data-id={data.id} alt='open-site' onClick={textClickHandler} />
              </div>
            );
          })}
        </div>
      </S.HeaderContent>
    </S.Header>
  );
};

export default Header;
