export interface ServiceProps {
  service: {
    icon: React.ReactNode;
    title: string;
    description: string;
  };
}
function Service({ service: { icon, title, description } }: ServiceProps) {
  return (
    <div className="service">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Service;
