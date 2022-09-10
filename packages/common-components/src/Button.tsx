import { forwardRef, Ref } from 'react';
import type { ButtonHTMLAttributes } from 'react';
import { css } from '@emotion/react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, Props>((props, forwardedRef) => {
  const { isLoading, children, ...otherProps } = props;

  return (
    <button
      ref={forwardedRef}
      css={css`
        color: red;
        background-color: blue;
      `}
      {...otherProps}
    >
      {isLoading ? '로딩중...' : children}
    </button>
  );
});

export default Button;
