import { ControllerProps, FieldPath, FieldValues } from "react-hook-form"
import BaseCheckbox, { BaseCheckboxProps } from "../base/base-checkbox"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"

const FormCheckbox = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  className,
  control,
  name,
  label,
  ...rest
}: Required<Pick<ControllerProps<TFieldValues, TName>, "control" | "name">> & {
  label: string
  classNames?: {
    checkbox?: string
    label?: string
  }
} & Pick<BaseCheckboxProps, "className">) => {
  return (
    <FormField
      control={control}
      name={name}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      defaultValue={"" as any}
      render={({ field }) => (
        <FormItem className={className}>
          <div className="flex items-center gap-5">
            <FormLabel>
              <FormControl>
                <BaseCheckbox
                  checked={field.value}
                  onCheckedChange={(checked) => field.onChange(checked)}
                  label={label}
                  className={rest.classNames?.checkbox}
                  {...rest}
                />
              </FormControl>
            </FormLabel>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default FormCheckbox
