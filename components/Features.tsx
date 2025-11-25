import { FeatureProps } from "@/types";

export const Feature: React.FC<FeatureProps> = ({ title, desc, Icon }) => {
  return (
    <div className="flex flex-col space-y-4 rounded-xl border bg-card p-6 text-card-foreground shadow-lg transition-all duration-300 hover:shadow-xl hover:border-primary/50 md:p-8">
      <div className="p-3 w-fit rounded-full bg-primary/10 text-primary">
        {/* Icon prop is rendered here */}
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
      <p className="text-muted-foreground text-base leading-relaxed">{desc}</p>
    </div>
  );
};
