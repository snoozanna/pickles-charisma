type RecordingIndicatorProps = {
  service: string;
};

const RecordingIndicator = ({ service }: RecordingIndicatorProps) => {
  if (!service) {
    return null;
  }
  return (
    <>
      {" "}
      <i>Listening</i>
    </>
  );
};

export default RecordingIndicator;
