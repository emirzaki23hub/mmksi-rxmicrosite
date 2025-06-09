"use client"

import FormCheckbox from "@/components/form/form-checkbox"
import FormInput from "@/components/form/form-input"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"

import { valibotResolver } from "@hookform/resolvers/valibot"
import { useForm } from "react-hook-form"
import * as v from "valibot"
import SectionTitle from "./section-title"

const schema = v.object({
  name: v.pipe(v.string(), v.minLength(1, "Required")),
  telp: v.pipe(v.string(), v.minLength(1, "Required")),
  email: v.pipe(
    v.string(),
    v.minLength(1, "Required"),
    v.email("Invalid email"),
  ),
  consent: v.literal(true, "Required"),
})

const SectionForm = () => {
  const form = useForm({
    resolver: valibotResolver(schema),
  })

  const handleSubmit = form.handleSubmit(async (data) => {
    console.log(data)
  })

  return (
    <section className="py-12 max-w-[601px] mx-auto">
      <SectionTitle centered>Be The First to Know</SectionTitle>

      <Form {...form}>
        <form onSubmit={handleSubmit} className="p-4 space-y-8 mt-8">
          <FormInput control={form.control} name="name" label="Nama" />

          <FormInput control={form.control} name="telp" label="Telepon" />

          <FormInput control={form.control} name="email" label="E-Mail" />

          <FormCheckbox
            control={form.control}
            name="consent"
            label="Dengan menekan tombol Kirim, saya setuju untuk memberikan data pribadi sata dan mengizinkan Mitusbishi Motors dan mitranya untuk menyampaikannya serta untuk dipergunakan dalam membantu proses pembelian kendaraan."
            className="mt-12"
          />

          <Button type="submit" className="w-full">
            Kirim
          </Button>
        </form>
      </Form>
    </section>
  )
}

export default SectionForm
