"use client"

import { valibotResolver } from "@hookform/resolvers/valibot"
import { useForm } from "react-hook-form"
import * as v from "valibot"
import FormCheckbox from "../form/form-checkbox"
import FormInput from "../form/form-input"
import { Button } from "../ui/button"
import { Form } from "../ui/form"

const schema = v.object({
  email: v.pipe(
    v.string(),
    v.minLength(1, "Required"),
    v.email("Invalid email"),
  ),
  consent: v.literal(true, "Required"),
})

const BaseFooterNewsletter = () => {
  const form = useForm({
    resolver: valibotResolver(schema),
  })

  const handleSubmit = form.handleSubmit(async (data) => {
    console.log(data)
  })
  return (
    <Form {...form}>
      <form onSubmit={handleSubmit} className="space-y-6 md:mt-8">
        <FormInput
          control={form.control}
          name="email"
          label="E-Mail"
          className="border-white/80 text-white"
        />

        <FormCheckbox
          control={form.control}
          name="consent"
          label="Dengan menekan tombol Kirim, saya mengizinkan Mitsubishi Motors dan mitranya untuk menghubungi saya untuk membantu proses pembelian kendaraan."
          className="md:mt-12 items-start"
          classNames={{
            checkbox: "items-start gap-4",
            label: "text-white font-normal",
          }}
        />

        <Button variant="outline" type="submit">
          Berlangganan
        </Button>
      </form>
    </Form>
  )
}

export default BaseFooterNewsletter
