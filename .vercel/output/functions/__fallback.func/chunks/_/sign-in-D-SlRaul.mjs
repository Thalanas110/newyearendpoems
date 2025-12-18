import { b as signInFn } from './router-Dneg7yWn.mjs';
import { u as useServerFn } from './useServerFn-V9p42L9k.mjs';
import { A as AuthCard, a as AuthForm, b as AuthField } from './auth-field-R6_uHCnN.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useSearch, useNavigate, useRouter, Link } from '@tanstack/react-router';
import { useMutation } from '@tanstack/react-query';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import '../virtual/entry.mjs';
import './nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '@tanstack/react-router/ssr/server';
import '@tanstack/history';
import '@tanstack/router-core/ssr/client';
import '@tanstack/router-core';
import 'node:async_hooks';
import '@tanstack/router-core/ssr/server';
import 'rou3';
import 'srvx';
import 'tiny-invariant';
import 'seroval';
import './appwrite-MsY53L6a.mjs';
import 'node-appwrite';
import '@tanstack/react-router-ssr-query';
import 'next-themes';
import 'sonner';
import 'react';
import './input-BYXOaM1y.mjs';
import 'clsx';
import 'tailwind-merge';
import '@radix-ui/react-slot';
import 'class-variance-authority';
import '@radix-ui/react-label';
import 'lucide-react';

var signInSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required")
});
function SignInPage() {
  const search = useSearch({ from: "/_auth/sign-in" });
  const navigate = useNavigate();
  const router = useRouter();
  const signIn = useServerFn(signInFn);
  const form = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });
  const signInMutation = useMutation({
    mutationFn: async (data) => {
      await signIn({ data: {
        ...data,
        redirect: search.redirect
      } });
    },
    onSuccess: async () => {
      await router.invalidate();
      if (search.redirect) navigate({ to: search.redirect });
    },
    onError: async (error) => {
      if (error?.status === 302 || error?.redirect || error?.message?.includes("redirect")) {
        await router.invalidate();
        if (search.redirect) navigate({ to: search.redirect });
        return;
      }
      console.error("Sign in error:", error);
      form.setError("root", { message: error.message || "Failed to sign in" });
    }
  });
  return /* @__PURE__ */ jsxs(AuthCard, {
    title: "Sign in",
    description: "Enter your email and password to access your account",
    children: [/* @__PURE__ */ jsx(AuthForm, {
      schema: signInSchema,
      defaultValues: {
        email: "",
        password: ""
      },
      onSubmit: (data) => signInMutation.mutate(data),
      submitText: "Sign in",
      loadingText: "Signing in...",
      isLoading: signInMutation.isPending,
      form,
      children: (form$1) => /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(AuthField, {
        control: form$1.control,
        name: "email",
        label: "Email",
        placeholder: "john@doe.com",
        type: "email"
      }), /* @__PURE__ */ jsx(AuthField, {
        control: form$1.control,
        name: "password",
        label: "Password",
        placeholder: "Enter your password",
        type: "password"
      })] })
    }), /* @__PURE__ */ jsxs("div", {
      className: "text-center text-sm text-muted-foreground mt-4 space-x-1",
      children: [/* @__PURE__ */ jsx("div", {
        className: "inline-block",
        children: "Don't have an account? "
      }), /* @__PURE__ */ jsx("div", {
        className: "inline-block",
        children: /* @__PURE__ */ jsx(Link, {
          to: "/sign-up",
          search: search.redirect ? { redirect: search.redirect } : void 0,
          className: "font-medium text-primary underline-offset-4 hover:underline",
          children: "Sign up"
        })
      })]
    })]
  });
}

export { SignInPage as component };
//# sourceMappingURL=sign-in-D-SlRaul.mjs.map
