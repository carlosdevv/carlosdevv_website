import { SendEmailPayload } from "@/components/Contact/components/contact-form";
import { toast } from "@/hooks/useToast";

export const sendEmail = async (body: SendEmailPayload) => {
  const url = "/api/send";

  try {
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
    });

    toast({
      title: "Success",
      description: "Message sent successfully.",
    });
  } catch (error) {
    if (error instanceof Error) {
      toast({
        title: "Something went wrong",
        description: "Email cannot be sent, please try again.",
        variant: "destructive",
      });
    }
  }
};
