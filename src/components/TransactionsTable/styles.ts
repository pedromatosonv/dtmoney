import { darken, transparentize } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      border-radius: 0.25rem;

      &:first-child {
        color: var(--text-title);
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }
  }
`

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`

interface RadioBoxProps {
  isActive: boolean,
  activeColor: 'green' | 'red',
}

const colors = {
  green: '#33CC95',
  red: '#E52E4D',
}

export const RadioBox = styled.button<RadioBoxProps>`
  button {
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    background: ${props => props.isActive
      ? transparentize(0.9, colors[props.activeColor])
      : 'transparent'
    };

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      border-color: ${darken(0.1, '#d7d7d7')}

      img {
        width: 20px;
        height: 20px;
      }

      span {
        display: inline-block;
        margin-left: 1rem;
        font-size: 1rem;
        color: var(--text-title);
      }
    }
  }
`