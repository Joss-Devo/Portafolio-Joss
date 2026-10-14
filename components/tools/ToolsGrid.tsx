import ToolCard from "./ToolCard";
import { tools } from "./toolsData";

const ToolsGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {tools.map((tool) => (
        <ToolCard
          key={tool.id}
          name={tool.name}
          description={tool.description}
          icon={tool.icon}
        />
      ))}
    </div>
  );
};

export default ToolsGrid;
