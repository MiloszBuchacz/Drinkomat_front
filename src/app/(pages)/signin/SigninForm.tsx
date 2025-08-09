"use client";
import React, { useState } from "react";

import Link from "next/link";

import Button from "@/app/components/formComponents/Button";
import Input from "@/app/components/formComponents/Input";

const SigninForm = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {};

  return (
    <form
      className="w-full h-full pr-10 pl-10 flex flex-col justify-center relative"
      onSubmit={() => handleSubmit()}
    >
      <Input
        onChange={(e) => setLogin(e.target.value)}
        type="text"
        icon="person"
        placeholder="Username"
        style={{ marginBottom: "1rem" }}
      />
      <Input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        icon="password"
        placeholder="Password"
      />
      <div className="text-white flex flex-row justify-between mt-7">
        <div className="flex flex-row">
          <input type="checkbox" className="mr-2" />
          <p>Remember me</p>
        </div>
        <p>Forget the password?</p>
      </div>
      <Button className="mt-7">Login</Button>
      <p className="text-white flex justify-center mt-2">
        Dont have account?{" "}
        <Link href="/signup" className="ml-1 ">
          {" "}
          <u>Register</u>
        </Link>
      </p>
    </form>
  );
};
export default SigninForm;
