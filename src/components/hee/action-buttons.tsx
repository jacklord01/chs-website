interface ActionButtonsProps {
    label_1?: string;
    label_2?: string;
    showNext: boolean;
    showBack: boolean;
    currentStepIndex: number;
    onButtonClick(nextStepIndex: number, actionType?: string): void;
}

const ActionButtons = ({
    label_1,
    label_2,
    showNext,
    showBack,
    currentStepIndex,
    onButtonClick
}: ActionButtonsProps) => {

    const onAction = (step: string) => onButtonClick(
        (step === 'next' ? currentStepIndex + 1 : currentStepIndex - 1),
        step);

    return <>
        <div className="flex justify-between pt-[32px]">
            {
                showBack &&
                <button
                    className="btn btn-primary outline secondary-hover"
                    onClick={() => onAction('back',)}
                >
                    {label_1}
                </button>
            }
            {showNext &&
                <button className="btn btn-primary" onClick={() => onAction('next')}>
                    {label_2}
                </button>
            }
        </div>
    </>
}

export default ActionButtons;