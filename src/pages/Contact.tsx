import React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { formatDateNow } from "@/lib/utils";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string(),
});

const Contact: React.FC = () => {
  const { toast } = useToast();
  const formRef = React.useRef<HTMLFormElement>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  const onSubmit = async () => {
    if (!formRef.current) {
      toast({
        title: "Error!",
        description: "Form reference is missing.",
      });
      return;
    }
    try {
      const emailResponse = await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID!,
        import.meta.env.VITE_TEMPLATE_ID!,
        formRef.current,
        import.meta.env.VITE_EMAILJS_API_KEY!
      );
      if (emailResponse.status === 200) {
        toast({
          title: "Email message sent!",
          description: formatDateNow(),
        });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error!",
        description: "Your message has not been sent.",
      });
    }
  };
  return (
    <div className="flex flex-col items-center  mt-10">
      <Card className="w-7/12 border border-purple-500 shadow-2xl rounded-lg p-8 max-w-prose mx-auto">
        <CardHeader className="text-5xl flex flex-row justify-center items-center">
          <h1 className="text-5xl font-semibold pb-10">
            Contact <b className=" text-purple-500">Me</b>
          </h1>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              ref={formRef}
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-2 flex flex-col justify-center items-center"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <div className="w-full">
                    <FormItem className="flex flex-col items-center">
                      <FormLabel className="pb-3">Email</FormLabel>
                      <FormControl>
                        <Input
                          className="w-1/3 dark:border-purple-500 "
                          placeholder="luffy@strawhat.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  </div>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <div className="w-full">
                    <FormItem className="flex flex-col items-center mt-10">
                      <FormLabel className="pb-3">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          className="w-2/3 h-48 dark:border-purple-500"
                          placeholder="Hello. I know where the One Piece is..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  </div>
                )}
              />
              <Button
                className="bg-black text-white hover:bg-purple-500 dark:bg-purple-500 dark:hover:bg-white  dark:hover:text-purple-500"
                type="submit"
              >
                Submit
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;
