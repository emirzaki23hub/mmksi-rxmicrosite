import { cn } from "@/lib/tailwind"
import { Checkbox, CheckboxProps } from "../ui/checkbox"
import { Label } from "../ui/label"

export type BaseCheckboxProps = {
  label: React.ReactNode
  classNames?: {
    label?: string
  }
} & CheckboxProps

const BaseCheckbox = ({
  label,
  className,
  classNames,
  ...rest
}: BaseCheckboxProps) => {
  return (
    <Label className={cn("flex items-center gap-5", className)}>
      <Checkbox {...rest} />

      <span className={cn("text-xs font-medium leading-5", classNames?.label)}>
        {label}
      </span>
    </Label>
  )
}

export default BaseCheckbox
