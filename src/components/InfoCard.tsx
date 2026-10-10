type InfoCardProps = {
  id: number | string;
  title: string;
  description: string;
};

export const InfoCard = ({ id, title, description }: InfoCardProps) => {
  return (
    <div className="h-52.75">
      <div key={id} className="rounded-2xl bg-white p-6 shadow-sm">
        <span className="text-sm font-semibold text-blue-500">{id}</span>
        <div className="mt-4 text-xl font-semibold text-black">{title}</div>
        <p className="mt-3 text-sm leading-6 text-gray-400">{description}</p>
      </div>
    </div>
  );
};
