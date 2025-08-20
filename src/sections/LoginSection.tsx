"use client";

// MODULES //
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// COMPONENTS //
import Input from "@/components/Input";
// import Button from "@/components/Button";

// STYLES //

// SECTIONS //

// PLUGINS //
// import toastr from "toastr";
// IMAGES //

// ICONS //

// FUNCTIONS //

// DATA //
// import { login } from "@/server/controller/user.controller";

import Button from "@/components/Button";
import Link from "next/link";

export default function LoginSection() {
  //   const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{
    username: string;
    password: string;
    all: string;
  }>({ username: "", password: "", all: "" });
  const [formData, setFormData] = useState<{
    username: string;
    password: string;
  }>({ username: "", password: "" });
  const router = useRouter();
  const setFormValues = (value: string, key: string) => {
    setFormData({ ...formData, ...{ [key]: value } });
  };
  // const handleErrorData = (key: string, value: string) => {
  //   setErrors((oldError) => {
  //     const newError = { ...oldError, [key]: value };
  //     return newError;
  //   });
  // };
  const validateFormData = () => {
    const tempError = { username: "", password: "", all: "" };
    if (!formData.username) {
      tempError.username = "Please provide valid username.";
    }
    if (!formData.password) {
      tempError.password = "Please provide valid password";
    }
    // handleErrorState(tempError);
    setErrors(tempError);
    return !tempError.username && !tempError.password;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({ username: "", password: "", all: "" }); // Reset errors before starting
    // setLoading(true);

    try {
      if (!validateFormData()) {
        // setLoading(false);
        return;
      }

      // if (!formData.username) {
      //   return;
      // }

      //   const loginResp = await login(formData);
      //   console.log("loginResp", loginResp);
      //   if (!loginResp.success) {
      //     // toastr.error(loginResp.message);
      //   } else if (loginResp.success && loginResp.data) {
      //     sessionStorage.setItem("token", loginResp.data);
      //     toastr.success(loginResp.message);
      //     router.push(`/bet-ticker`);
      //   }
      // setErrorData("all", loginResp.message);
    } catch (err) {
      let errorMessage = "An unknown error occurred.";
      if (err instanceof Error) {
        errorMessage = err.message;
      }

      //   toastr.error(errorMessage);
      setErrors({
        username: "",
        password: "",
        all: errorMessage,
      });
    } finally {
      //   setLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-headerBackground">
      <form
        onSubmit={handleSubmit}
        className="px-16 pt-8 pb-16 w-1/3 bg-primary-600 bg-shadow-2xl border-primary-200 rounded-3xl"
      >
        <div className="flex justify-center">
          <Image
            src="/icons/franck-muller.png"
            alt="Franck Muller Logo"
            width={300}
            height={140}
          />
        </div>

        <div className="mt-6 ">
          <label htmlFor="username" className="font-light text-secondary-900 ">
            <span className="">Enter Username:</span>
          </label>
          <Input
            inputPlace="passwordClass"
            placeholder=""
            type="text"
            value={formData.username}
            error={errors.username}
            name="username"
            onChange={(e) => setFormValues(e.target.value, "username")}
          />
        </div>

        <div className="mt-6">
          <label htmlFor="password" className="font-light text-secondary-900">
            <span className="">Enter Password:</span>
          </label>
          <Input
            inputPlace="passwordClass"
            placeholder=""
            type="password"
            value={formData?.password}
            error={errors?.password}
            name="password"
            onChange={(e) => setFormValues(e.target.value, "password")}
          />
        </div>
        <div className="mt-8 w-full">
          <Link href="/inventory-list">
            <Button color="blackLogin" onClick={() => {}} text="Login" />{" "}
          </Link>
          {/* <button
            type="submit"
            disabled={loading}
            className={`${
              loading ? "bg-[#557086]" : "bg-[#2f4553] hover:bg-[#557086]"
            } text-white font-bold py-1 px-5 rounded w-full focus:outline-none focus:shadow-outline cursor-pointer transition ${
              loading ? "cursor-not-allowed" : ""
            }`}
          >
            Login
            {loading ? (
              <FontAwesomeIcon icon={faSpinner} spin className="mx-2" /> // Loader icon with spin effect
            ) : null}
          </button> */}
        </div>
      </form>
    </div>
  );
}
