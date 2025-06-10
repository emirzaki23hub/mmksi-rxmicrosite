import { cn } from "@/lib/tailwind"
import { useState } from "react"
import { ControllerProps, FieldPath, FieldValues } from "react-hook-form"
import BaseLabel from "../base/base-label"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"
import { Input, InputProps } from "../ui/input"

const FormInput = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  control,
  name,
  label,
  ...rest
}: Required<Pick<ControllerProps<TFieldValues, TName>, "control" | "name">> & {
  label: string
} & Pick<
    InputProps,
    "type" | "autoFocus" | "accept" | "placeholder" | "className"
  >) => {
  const [focus, setFocus] = useState(false)

    return (
      <FormField
        control={control}
        name={name}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        defaultValue={"" as any}
        render={({ field }) => (
          <FormItem className="relative pt-4">
            <BaseLabel asChild>
              <FormLabel
                className={cn(
                  "absolute top-8 focus:top-0 transition-[top]",
                  (field.value || focus) && "top-0",
                )}
              >
                {label}
              </FormLabel>
            </BaseLabel>
            <FormControl>
              <Input
                autoComplete="off"
                {...field}
                {...rest}
                value={
                  rest.type === "file" ? field.value?.fileName : field.value
                }
                onChange={(e) => {
                  if (rest.type === "file") {
                    field.onChange(e.target.files?.[0])
                    return
                  }
                  field.onChange(e.target.value)
                }}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    )
}

export default FormInput
