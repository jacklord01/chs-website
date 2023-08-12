interface ApplySectionProps {
  htmlContent: string;
}

const ApplySection: React.FC<ApplySectionProps> = ({
  htmlContent,
}: ApplySectionProps) => {
  return (
    <div className="apply-section">
      <div
        className="container mx-auto px-[16px]"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      ></div>
    </div>
  );
};

export default ApplySection;
