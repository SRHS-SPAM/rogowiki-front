import React from 'react';

interface StyledTextProps {
  text: string;
}

const StyledTextComponent: React.FC<StyledTextProps> = ({ text }) => {
  const renderStyledText = () => {
    if (text.includes('# ')) {
      const [beforeHash, afterHash] = text.split('# ');
      return (
        <div>
          <span>{beforeHash}</span>
          <span style={{ color: 'red', fontWeight: 'bold', cursor: 'pointer' }}>
            #{afterHash}
          </span>
        </div>
      );
    } else {
      return <div>{text}</div>;
    }
  };

  return <>{renderStyledText()}</>;
};

export default StyledTextComponent;
