import { DateArg, format, isValid } from "date-fns"
import { id } from "date-fns/locale"

export const dateFormat = (date: DateArg<Date> & {}, formatStr: string) => {
  if (!isValid(new Date(date))) return ""
  return format(date, formatStr, { locale: id })
}
