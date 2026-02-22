"use client";

import Button from "@/components/utils/Button";

import { z } from "zod";
import { toast } from "sonner";
import { ChangeEvent, DragEvent, useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Field, FieldError, FieldGroup } from "@/components/ui/field";

const formSchema = z.object({
  name: z.string().trim().min(1, "Nom requis"),
  firstname: z.string().trim().min(1, "Nom requis"),
  email: z.email("Email requis"),
  file: z
    .instanceof(File, { message: "Fichier requis" })
    .refine((file) => file.type === "application/pdf", "Format invalide"),
});

type FormInput = z.input<typeof formSchema>;

export default function JoinUs() {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormInput>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      firstname: "",
      email: "",
    },
  });

  const handleChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleDrop = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      setFile(event.dataTransfer.files[0]);
    }
  };

  const onSubmit: SubmitHandler<FormInput> = async (values) => {
    try {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success("Candidature envoyée", {
        description: "Nous reviendrons vers vous.",
      });

      form.reset();
      setFile(null);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full flex justify-center">
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="relative w-full max-w-2xl"
      >
        <FieldGroup className="gap-5">
          <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <Label htmlFor="name" className="text-lg">
                  Nom
                </Label>
                <Input
                  {...field}
                  id="name"
                  aria-invalid={fieldState.invalid}
                  placeholder="Votre Nom"
                  className="h-12"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="firstname"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <Label htmlFor="firstname" className="text-lg">
                  Prénom
                </Label>
                <Input
                  {...field}
                  id="firstname"
                  aria-invalid={fieldState.invalid}
                  placeholder="Votre Prénom"
                  className="h-12"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <Label htmlFor="email" className="text-lg">
                  E-mail
                </Label>
                <Input
                  {...field}
                  id="email"
                  aria-invalid={fieldState.invalid}
                  placeholder="Adresse e-mail"
                  className="h-12"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="file"
            control={form.control}
            render={({
              field: { value, onChange, ...fieldProps },
              fieldState,
            }) => (
              <Field data-invalid={fieldState.invalid}>
                <Label
                  htmlFor="file"
                  className="flex flex-col items-start gap-3"
                  onDrop={handleDrop}
                  onDragOver={(e) => e.preventDefault()}
                >
                  <span className="text-lg">CV</span>
                  <span
                    className={cn(
                      "w-full h-48 flex flex-col gap-4 justify-center items-center rounded-xl cursor-pointer border-2 border-dashed",
                      fieldState.invalid
                        ? "border-destructive"
                        : "border-neutral-400",
                    )}
                  >
                    <Input
                      {...fieldProps}
                      id="file"
                      type="file"
                      accept=".pdf"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        onChange(file || null);
                        handleChangeFile(e);
                      }}
                      aria-invalid={fieldState.invalid}
                      className="hidden"
                    />

                    {file ? (
                      <span className="text-neutral-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="size-16"
                        >
                          <path
                            d="M19.965 8.521C19.988 8.347 20 8.173 20 8C20 5.621 17.857 3.712 15.479 4.035C14.786 2.802 13.466 2 12 2C10.534 2 9.214 2.802 8.521 4.035C6.138 3.712 4 5.621 4 8C4 8.173 4.012 8.347 4.035 8.521C2.802 9.215 2 10.535 2 12C2 13.465 2.802 14.785 4.035 15.479C4.01193 15.6517 4.00024 15.8258 4 16C4 18.379 6.138 20.283 8.521 19.965C9.214 21.198 10.534 22 12 22C13.466 22 14.786 21.198 15.479 19.965C17.857 20.283 20 18.379 20 16C20 15.827 19.988 15.653 19.965 15.479C21.198 14.785 22 13.465 22 12C22 10.535 21.198 9.215 19.965 8.521ZM10.955 16.416L7.288 12.702L8.712 11.298L10.969 13.584L15.296 9.29L16.704 10.71L10.955 16.416Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    ) : (
                      <span className="text-neutral-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="size-16"
                        >
                          <path
                            d="M5.83885 10.1357C3.63738 10.6593 2 12.6385 2 15.0002C2 17.7616 4.23857 20.0002 7 20.0002C7.4737 20.0002 7.932 19.9344 8.36625 19.8113"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M18.0274 10.1357C20.2289 10.6593 21.8662 12.6385 21.8662 15.0002C21.8662 17.7616 19.6277 20.0002 16.8662 20.0002C16.3925 20.0002 15.9342 19.9344 15.5 19.8113"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M18 10C18 6.6863 15.3137 4 12 4C8.6863 4 6 6.6863 6 10"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8.53271 13.9406L12 10.4619L15.5659 14.0001"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 19.0001V12.231"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    )}

                    {file ? (
                      <p className="text-center text-lg text-neutral-500 max-w-md">
                        {file.name}
                      </p>
                    ) : (
                      <p className="text-center text-lg text-neutral-400 max-w-md">
                        Déposez votre CV ici ou cliquez pour sélectionner
                        Fichier: PDF
                      </p>
                    )}
                  </span>
                </Label>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>

        <div className="absolute bottom-0 -left-75">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="260"
            height="34"
            viewBox="0 0 260 34"
            fill="none"
          >
            <line
              x1="10"
              y1="28.5188"
              x2="260"
              y2="28.5188"
              stroke="url(#paint0_linear_102_45)"
            />
            <line
              x1="63"
              y1="4.5"
              x2="193"
              y2="4.5"
              stroke="url(#paint1_linear_102_45)"
            />
            <path
              d="M1.81198e-05 29C1.81198e-05 26.2386 2.2386 24 5.00002 24C7.76144 24 10 26.2386 10 29C10 31.7614 7.76144 34 5.00002 34C2.2386 34 1.81198e-05 31.7614 1.81198e-05 29Z"
              fill="url(#paint2_linear_102_45)"
            />
            <path
              d="M58 9.5C55.5147 9.49999 53.5 7.48527 53.5 5C53.5 2.51473 55.5147 0.50001 58 0.5C60.4853 0.5 62.5 2.51472 62.5 5C62.5 7.48528 60.4853 9.5 58 9.5Z"
              stroke="url(#paint3_linear_102_45)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_102_45"
                x1="10"
                y1="29.5188"
                x2="260"
                y2="29.5188"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#D11F22" />
                <stop offset="1" stop-color="#3E090A" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_102_45"
                x1="63"
                y1="5.5"
                x2="193"
                y2="5.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#D11F22" />
                <stop offset="1" stop-color="#3E090A" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_102_45"
                x1="10"
                y1="29"
                x2="0"
                y2="29"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#D11F22" />
                <stop offset="1" stop-color="#3E090A" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_102_45"
                x1="63"
                y1="5"
                x2="53"
                y2="5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#D11F22" />
                <stop offset="1" stop-color="#3E090A" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <Button
          type="submit"
          label={"Envoyer"}
          isLoading={isLoading}
          className="mt-16 w-full py-3 text-xl"
        />

        <div className="absolute bottom-0 -right-75">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="260"
            height="36"
            viewBox="0 0 260 36"
            fill="none"
          >
            <line
              y1="30.5"
              x2="250"
              y2="30.5"
              stroke="url(#paint0_linear_102_46)"
            />
            <path d="M45 5H175" stroke="url(#paint1_linear_102_46)" />
            <path
              d="M175 5C175 2.23858 177.239 1.90735e-06 180 1.90735e-06C182.761 1.90735e-06 185 2.23858 185 5C185 7.76142 182.761 10 180 10C177.239 10 175 7.76142 175 5Z"
              fill="url(#paint2_linear_102_46)"
            />
            <path
              d="M255 35.5C252.515 35.5 250.5 33.4853 250.5 31C250.5 28.5147 252.515 26.5 255 26.5C257.485 26.5 259.5 28.5147 259.5 31C259.5 33.4853 257.485 35.5 255 35.5Z"
              stroke="url(#paint3_linear_102_46)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_102_46"
                x1="0"
                y1="31.5"
                x2="250"
                y2="31.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#D11F22" />
                <stop offset="1" stop-color="#3E090A" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_102_46"
                x1="45"
                y1="5.5"
                x2="175"
                y2="5.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#D11F22" />
                <stop offset="1" stop-color="#3E090A" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_102_46"
                x1="185"
                y1="5"
                x2="175"
                y2="5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#D11F22" />
                <stop offset="1" stop-color="#3E090A" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_102_46"
                x1="260"
                y1="31"
                x2="250"
                y2="31"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#D11F22" />
                <stop offset="1" stop-color="#3E090A" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </form>
    </div>
  );
}
