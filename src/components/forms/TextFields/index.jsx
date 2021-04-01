import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

import Text from '../../foundation/Text';

const InputWrapper = styled.div`
  margin-bottom: 17px;
`;

const Input = styled(Text)`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.tertiary.light.color};
  /* border: 1px solid
    ${(props) =>
    props.isFieldInvalid
      ? ({ theme }) => theme.colors.error.main.color
      : ({ theme }) => theme.colors.tertiary.light.color}; */
  padding: 12px 16px;
  outline: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: 1s;

  ${({ theme, isFieldInvalid }) =>
    isFieldInvalid &&
    css`
      border-color: ${theme.colors.error.main.color};
      & + span {
        color: ${theme.colors.error.main.color};
        font-size: 11px;
      }
      background: linear-gradient(
        90deg,
        #ffffff 0%,
        #ffffff 95%,
        ${theme.colors.error.main.color} 100%
      );
    `}/* box-shadow: inset 0px 0px 10px -5px ${(props) =>
    props.isFieldInvalid
      ? ({ theme }) => theme.colors.error.main.color
      : ({ theme }) => theme.colors.tertiary.light.color};

  background: inset 0px 0px 10px -5px ${(props) =>
    props.isFieldInvalid
      ? ({ theme }) => theme.colors.error.main.color
      : ({ theme }) => theme.colors.tertiary.light.color};
*/
`;

Input.defaultProps = {
  tag: 'input',
  variant: 'paragraph1',
};

export default function TextField({
  placeholder,
  name,
  onChange,
  value,
  error,
  isTouched,
  ...props
}) {
  const hasError = Boolean(error);
  const isFieldInvalid = hasError && isTouched;

  return (
    <InputWrapper>
      <Input
        type="text"
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        isFieldInvalid={isFieldInvalid}
        {...props}
      />
      {isFieldInvalid && (
        <Text variant="smallestException" color="error.main" role="alert">
          {error}
        </Text>
      )}
    </InputWrapper>
  );
}

TextField.defaultProps = {
  error: '',
  isTouched: false,
};

TextField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  isTouched: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
