"use client";

import { sendEmail } from "@/app/services/Contact";
import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const contactFormSchema = z.object({
  subject: z.string({ required_error: "Subject is required." }),
  name: z.string({ required_error: "Name is required." }),
  email: z
    .string({ required_error: "email is required." })
    .email({ message: "Invalid email." }),
  description: z.string({ required_error: "Description is required." }),
});

export type SendEmailPayload = z.infer<typeof contactFormSchema>;

export const ContactForm = () => {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
  });

  const { mutateAsync: handleSendEmail } = useMutation({
    mutationFn: (body: SendEmailPayload) => {
      return sendEmail(body);
    },
  });

  const [isLoadingSendEmail, setIsLoadingSendEmail] = useState(false);

  const onSubmit = async (values: z.infer<typeof contactFormSchema>) => {
    setIsLoadingSendEmail((prev) => prev === false && true);
    await handleSendEmail(values);
    setIsLoadingSendEmail((prev) => prev === true && false);
  };
  return (
    <div className="flex flex-col md:w-3/4 ml-auto justify-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 z-20">
          <div className="grid grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-zinc-300">Subject</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-[#231B33] text-gray-200 border-zinc-800"
                      placeholder="Insert the subject here."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-zinc-300">Your name</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-[#231B33] text-gray-200 border-zinc-800"
                      placeholder="Insert your name here."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-zinc-300">Email</FormLabel>
                <FormControl>
                  <Input
                    className="bg-[#231B33] text-gray-200 border-zinc-800"
                    placeholder="Insert your email here."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-zinc-300">Description</FormLabel>
                <FormControl>
                  <Textarea
                    className="bg-[#231B33] text-gray-200 border-zinc-800"
                    placeholder="Insert the description here."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end">
            <Button type="submit" disabled={isLoadingSendEmail}>
              {isLoadingSendEmail && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
