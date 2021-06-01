import { css } from 'lit-element';

export const buttonStyles = css`
    .btn {
        display: inline-block;
        font-weight: 400;
        line-height: 1.5;
        color: #212529;
        text-align: center;
        text-decoration: none;
        vertical-align: middle;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
        background-color: transparent;
        border: 1px solid transparent;
        padding: .375rem .75rem;
        font-size: 1rem;
        border-radius: .25rem;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }
    .primary {
        color: var(--font-color-light);
        background-color: var(--color-primary);
        border-color: var(--color-primary);
    }
    .secondary {
        color: var(--font-color-light);
        background-color: var(--color-secondary);
        border-color: var(--color-secondary);
    }
    .success {
        color: var(--font-color-light);
        background-color: var(--color-success);
        border-color: var(--color-success);
    }
    .danger {
        color: var(--font-color-light);
        background-color: var(--color-danger);
        border-color: var(--color-danger);
    }
    .warning {
        color: var(--font-color-dark);
        background-color: var(--color-warning);
        border-color: var(--color-warning);
    }
    .info {
        color: var(--font-color-dark);
        background-color: var(--color-info);
        border-color: var(--color-info);
    }
    .light {
        color: var(--font-color-dark);
        background-color: var(--color-light);
        border-color: var(--color-light);
    }
    .dark {
        color: var(--font-color-light);
        background-color: var(--color-dark);
        border-color: var(--color-dark);
    }
    .link {
        font-weight: 400;
        color: var(--font-color-link);
        text-decoration: underline;
    }
    
`