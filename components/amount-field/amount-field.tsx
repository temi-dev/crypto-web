import React from "react"

export interface InputDynamicWidthProps extends React.HTMLProps<HTMLInputElement> {
    initialValue?: any
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const AmountInputField = ({
    initialValue = "0.00",
    onChange,
    ...props
}: InputDynamicWidthProps) => {
    const [value, setValue] = React.useState(initialValue);
    const [visible, setVisible] = React.useState(false);
    const [width, setWidth] = React.useState<number>(0);
    const measurer = React.useRef<HTMLElement>(null);

    React.useEffect(() => {
        setVisible(true);
    }, [value]);

    React.useLayoutEffect(() => {
        if (visible && measurer?.current) {
            const rect = measurer.current.getBoundingClientRect();
            setWidth(rect.width + 10);
            setVisible(false);
        }
    }, [visible]);

    return (
        <>
            <span ref={measurer}>{visible && value}</span>
            <input
            className="custom-amount-input-field"
                {...props}
                placeholder="0.00"
                type="text"
                value={value}
                style={{ width: width }}
                onChange={(event) => {
                    const { value } = event.target;
                    setValue(value);
                    if (onChange) onChange(event);
                }}
            />
        </>
    );
};

export default AmountInputField