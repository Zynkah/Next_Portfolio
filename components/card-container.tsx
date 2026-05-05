import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface CardContainerProps {
  title: string;
  children: React.ReactNode;
}

export const CardContainer: React.FC<CardContainerProps> = ({
  title,
  children,
}) => {
  return (
    <Card className="min-w-[340px] max-w-full bg-card/80 border border-accent backdrop-blur-md rounded-xl flex flex-col justify-between overflow-auto shadow-[3px_3px_0px_3px_#ff1ff8]">
      <CardHeader className="pb-2">
        <CardTitle className="text-4xl font-extrabold tracking-wide text-primary drop-shadow-lg leading-tight">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-pretty flex-1 flex flex-col justify-between">
        {children}
      </CardContent>
    </Card>
  );
};
