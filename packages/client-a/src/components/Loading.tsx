import { css } from '@emotion/react';
import type { FC } from 'react';
import { ReactComponent as Logo } from '../assets/react.svg';

const Loading: FC = () => {
  return (
    <div
      css={css`
        color: red;
      `}
    >
      로딩중...
      <Logo />
    </div>
  );
};

export default Loading;
