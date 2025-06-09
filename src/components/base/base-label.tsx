import { cn } from "@/lib/tailwind";
import { Label, LabelProps } from "../ui/label";

const BaseLabel = ({className, ...props}:LabelProps) => {
    return <Label {...props} className={cn('uppercase text-anthracite-grey tracking-[15%] font-normal',className)} />;
}
 
export default BaseLabel;