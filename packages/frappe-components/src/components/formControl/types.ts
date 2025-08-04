import type { ReactNode } from 'react';
import type { TextInputTypes } from '../../types'

export interface FormControlProps {
    label?: string;
    description?: string;
    type?: TextInputTypes | 'textarea' | 'select' | 'checkbox' | 'autocomplete';
    size?: 'sm' | 'md';
    variant?: 'subtle' | 'outline';
    required?: boolean;
    prefix?: ReactNode;
    suffix?: ReactNode;
    children?: ReactNode;
    htmlId?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}