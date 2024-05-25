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
import { signIn } from "next-auth/react";

const SignInPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;

    const signInResponse = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (signInResponse && !signInResponse.error) {
      router.push("/");
      toast("logged in user successfully");
    } else {
      console.log("Error :", signInResponse);
      toast("Your Email or Password is Wrong Please Check");
    }
  };

  return (
    <div className="container relative flex flex-col pt-20 justify-center items-center lg:px-0">
      <div className="w-full mx-auto flex flex-col justify-center space-y-6 sm:w-[350px] ">
        <div className="flex flex-col items-center ">
          <Clapperboard />

          <h1 className="text-2xl font-bold font ">Welcome Back</h1>
          <Link
            className={buttonVariants({
              variant: "link",
            })}
            href="/sign-up"
          >
            Don&apos;t have an account? sign up
            <ArrowRight className="w-3 ml-0.5" />
          </Link>
        </div>

        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
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

            <Button className="w-full mt-6 ">Sign in</Button>
          </form>
        </div>

        <div>
          <Separator className="my-4" />
          <Button
            onClick={() => {
              signIn("google");

              // error solve
              router.push("/");
            }}
            variant="ghost"
            className="w-full border "
          >
            <img src="/search.png" className="mr-2" alt="" />
            Sign in with Google{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
