import './MyLabel.css';

interface Props {
    /**
     * text to display
     */
    label: string;

    /**
     * Label size
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
         * Capitalize all Labels
         */
    allCaps?: boolean;
    /**
         * Label Color
         */
    color?: 'text-primary' | 'text-secondary' | 'text-tertiary';
    /**
         * Font Color
         */
    fontColor?: string;
}

/**
 * ! todas son opcionales
 * allCaps?: boolean,
 * color?: 'text-primary' | 'text-secondary' | text-tertiary',
 * fontColor?: string, texto del span
 */

export const MyLabel = ({
    label,
    size = 'normal',
    allCaps = false,
    color,
    fontColor,

}: Props) => {
    return (
        <span className={`${size} ${color} label`}
            style={{ color: fontColor }}
        >
            {allCaps ? label.toUpperCase() : label}
        </span>
    )
}
