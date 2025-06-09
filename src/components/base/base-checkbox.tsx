import { cn } from "@/lib/tailwind"
import { Checkbox, CheckboxProps } from "../ui/checkbox"
import { Label } from "../ui/label"

export type BaseCheckboxProps = {
  label: React.ReactNode
} & CheckboxProps

const BaseCheckbox = ({ label, className, ...rest }: BaseCheckboxProps) => {
  return (
    <Label className={cn("flex items-center gap-5", className)}>
      <Checkbox {...rest} />

      <span className="text-xs font-medium leading-5">{label}</span>
    </Label>
  )
}

export default BaseCheckbox
