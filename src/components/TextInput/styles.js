import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-column: 1 / 3;
  gap: 16px;

  & input,
  & textarea {
    font-family: 'Work Sans', sans-serif;
    font-size: calc(14px + 0.1vw);
    font-weight: 400;
    letter-spacing: calc((14px + 0.1vw) * -0.04);
    line-height: 125%;
    height: 48px;
    border: 2px solid #fff9;
    border-radius: 0;
    background-color: #0e081e;
    color: #fff;
    padding: 8px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }

  & textarea {
    min-height: calc(48px * 3);
    resize: none;
  }

  & input:focus,
  & textarea:focus {
    border-color: #fff;
    background-color: #0003;
  }
`;

export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin-top: 64px;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }

  &.formStatus {
    height: 48px;
    grid-column: 1 / 3;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    animation: appearAnimation 500ms;
  }

  @keyframes appearAnimation {
    from {
      scale: 0;
      height: 0;
    }
    to {
      scale: 1;
      height: 48px;
    }
  }

  &.formStatus.success {
    color: hsl(100, 60%, 65%);
  }

  &.formStatus.error {
    color: hsl(10, 90%, 75%);
  }
`;
