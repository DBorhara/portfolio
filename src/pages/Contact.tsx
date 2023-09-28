import React from "react";
import { useForm } from "react-hook-form";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { useToast } from "@/components/ui/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string(),
});

function formatDateNow() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const now = new Date(Date.now());

  const day = daysOfWeek[now.getDay()];
  const month = monthsOfYear[now.getMonth()];
  const date = now.getDate();
  const year = now.getFullYear();
  const hour = now.getHours();
  const minute = now.getMinutes();

  const formattedHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour; // convert to 12-hour format
  const formattedMinute = minute.toString().padStart(2, "0"); // ensure minute is always two digits
  const ampm = hour >= 12 ? "PM" : "AM";

  return `${day}, ${month} ${date}, ${year} at ${formattedHour}:${formattedMinute} ${ampm}`;
}

const Contact: React.FC = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("values", values);
    toast({
      title: "Email message submitted",
      description: formatDateNow(),
    });
  };
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <Card className="w-7/12 border-purple-500">
        <CardHeader className="text-5xl flex flex-row justify-center items-center">
          <h1 className="text-5xl font-semibold pb-10">
            Contact <b className=" text-purple-500">Me</b>
          </h1>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
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
                          className="w-1/3 border-purple-500 "
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
                          className="w-2/3 h-48 border-purple-500"
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
                className="bg-purple-500 text-white hover:bg-white hover:text-purple-500"
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
