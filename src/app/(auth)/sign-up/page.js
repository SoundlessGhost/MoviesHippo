"use client";
/* eslint-disable @next/next/no-img-element */
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Clapperboard } from "lucide-react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { name, email, password } = data;

    const userInfo = {
      name,
      email,
      password,
    };

    console.log(userInfo);
    fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then(() => {
        toast("user created successfully");
        router.push("/sign-in");
      })
      .catch((err) => {
        toast(err);
      });
  };

  return (
    <div className="container relative flex flex-col pt-20 justify-center items-center lg:px-0">
      <div className="w-full mx-auto flex flex-col justify-center space-y-6 sm:w-[350px] ">
        <div className="flex flex-col items-center ">
          <Clapperboard />

          <h1 className="text-2xl font-bold font ">Create your account</h1>
          <Link
            className={buttonVariants({
              variant: "link",
            })}
            href="/sign-in"
          >
            Already have an account? sign in
            <ArrowRight className="w-3 ml-0.5" />
          </Link>
        </div>

        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                {...register("name", { required: true })}
                className="mt-2 inputClass"
                placeholder="Your name"
              />
              <p className="font text-[12px] mt-2 text-red-600">
                {errors.name?.message}
              </p>
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                {...register("email", { required: true })}
                className="mt-2"
                placeholder="You@example.com"
              />
              <p className="font text-[12px] mt-2 text-red-600">
                {errors.email?.message}
              </p>
            </div>

            <div className="mt-4">
              <Label htmlFor="password">Password</Label>
              <Input
                {...register("password", {
                  required: true,
                  minLength: {
                    value: 8,
                    message: "password must be 8 characters",
                  },
                })}
                className="mt-2"
                placeholder="Password"
              />
              <p className="font text-[12px] mt-2 text-red-600">
                {errors.password?.message}
              </p>
            </div>
            <Button className="w-full mt-6 ">Sign up</Button>
          </form>

          <div>
            <Separator className="my-4" />
            <Button variant="ghost" className="w-full border ">
              <img src="/search.png" className="mr-2" alt="" />
              Sign up with Google{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
