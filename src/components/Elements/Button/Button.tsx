import { ReactNode } from "react";
import styled, { css } from "styled-components";

const getSizesStyle = ({ size = "md" }) => {
  switch (size) {
    case "sm":
      return css`
        padding: 5px 10px;
      `;

    case "lg":
      return css`
        padding: 15px 30px;
      `;

    default:
      return css`
        padding: 10px 20px;
      `;
  }
};

type BaseButtonProps = {
  size?: "sm" | "md" | "lg";
};

const BaseButton = styled.button<BaseButtonProps>`
  text-align: center;
  color: #fff;
  border-radius: 5px;
  ${(props) => getSizesStyle(props)}

  cursor: pointer;
`;

const ButtonPrimary = styled(BaseButton)`
  background: #7C70D4;
  border: 1px solid#7C70D4;
`;

const ButtonSecondary = styled(BaseButton)`
  background: transparent;
  color: #7C70D4;
  border: 1px solid#7C70D4;
`;

const buttonStyleLists = {
  default: BaseButton,
  primary: ButtonPrimary,
  secondary: ButtonSecondary,
};

type PropsType = {
  styleType: "default" | "primary" | "secondary";
  children: ReactNode;
  size?: "sm" | "md" | "lg";
};

export const Button = ({ styleType, children, size }: PropsType) => {
  const Component = buttonStyleLists[styleType] || buttonStyleLists.default;
  return <Component size={size}>{children}</Component>;
};
