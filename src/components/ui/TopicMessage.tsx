interface TopicMessageProps {
  message: string;
}
function TopicMessage({ message }: TopicMessageProps) {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        padding: ".8rem 1.4rem",
        border: "2px solid #000",
        borderRadius: "6px",
      }}
    >
      <p
        style={{
          fontFamily: "Outfit",
          fontWeight: 500,
          fontStyle: "Medium",
          fontSize: "1.6rem",
        }}
      >
        {message}
      </p>
    </div>
  );
}

export default TopicMessage;
