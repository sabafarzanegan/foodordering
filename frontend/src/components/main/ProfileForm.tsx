import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// import { useAuth0 } from "@auth0/auth0-react";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { ButtonLoading } from "./LoadingButton";
import { Button } from "../ui/button";

const formSchma = z.object({
  email: z.string().optional(),
  name: z.string().min(1, { message: "name is required" }),
  address: z.string().min(1, { message: "وارد کردن نشانی محل زندگی لازم است" }),
  city: z.string().min(1, { message: "وارد کردن شهر محل زندگی لازم است" }),
  country: z.string().min(1, { message: "وارد کردن  کشور محل زندگی لازم است" }),
});
type userForm = z.infer<typeof formSchma>;

type props = {
  // submit button
  onSave: (userData: userForm) => void;
  isLoading: Boolean;
};

function ProfileForm({ onSave, isLoading }: props) {
  //   const { user } = useAuth0();
  const form = useForm({
    resolver: zodResolver(formSchma),
    defaultValues: {
      email: "",
    },
  });
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSave)}
        className="space-y-12 md:p-10 bg-gray-100 min-h-screen rounded-lg px-4 py-2">
        <div className="text-right font-vazir space-y-2">
          <h1 className=" text-lg  font-semibold">اطلاعات کاربری</h1>
          <p className="text-sm">امکان ویرایش و تغییر اطلاعات را دارید</p>
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="text-right font-vazir text-lg text-gray-800/85">
              <FormLabel className="">ایمیل</FormLabel>
              <FormControl>
                <Input
                  placeholder="@email.com"
                  disabled
                  {...field}
                  className="placeholder:text-right  placeholder:text-gray-500"
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="text-right font-vazir text-lg text-gray-800/85">
              <FormLabel>نام کاربری</FormLabel>
              <FormControl>
                <Input
                  placeholder="اسم خود را وارد کنید"
                  {...field}
                  className="placeholder:text-right text-gray-500  placeholder:text-base"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col gap-x-2  md:flex-row items-center justify-between  ">
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className="text-right font-vazir text-lg text-gray-800/85 w-full">
                <FormLabel>نشانی محل زندگی</FormLabel>
                <FormControl>
                  <Input
                    placeholder="نشانی خود را وارد کنید"
                    {...field}
                    className="placeholder:text-right text-gray-500  placeholder:text-base"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="text-right font-vazir text-lg text-gray-800/85 w-full">
                <FormLabel>شهر محل زندگی</FormLabel>
                <FormControl>
                  <Input
                    placeholder="شهر خود را وارد کنید"
                    {...field}
                    className="placeholder:text-right text-gray-500  placeholder:text-base"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem className="text-right font-vazir text-lg text-gray-800/85 w-full">
                <FormLabel>کشور محل زندگی</FormLabel>
                <FormControl>
                  <Input
                    placeholder="کشور خود را وارد کنید"
                    {...field}
                    className="placeholder:text-right text-gray-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full">
          {isLoading ? (
            <ButtonLoading />
          ) : (
            <Button
              type="submit"
              className="mx-auto font-vazir text-white bg-orange-500 hover:bg-black px-5 py-2 w-full transition-all duration-150">
              ارسال
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
}

export default ProfileForm;
