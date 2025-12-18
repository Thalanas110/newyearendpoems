import { a as createServerFn, T as TSS_SERVER_FUNCTION, d as deleteCookie$1, g as getCookie, e as getServerFnById, b as setResponseStatus, s as setCookie$1 } from '../virtual/entry.mjs';
import { c as createSessionClient, a as createAdminClient } from './appwrite-MsY53L6a.mjs';
import { redirect, createRouter, createRootRouteWithContext, createFileRoute, useLocation, HeadContent, Scripts, lazyRouteComponent } from '@tanstack/react-router';
import z$1, { z } from 'zod';
import { ID } from 'node-appwrite';
import { jsx, jsxs } from 'react/jsx-runtime';
import { setupRouterSsrQueryIntegration } from '@tanstack/react-router-ssr-query';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useTheme, ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';
import { useRef, useEffect } from 'react';

var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    functionId,
    [TSS_SERVER_FUNCTION]: true
  });
};
var getAppwriteSessionFn_createServerFn_handler = createSsrRpc("a71b2d242e677da21a9b49fc012bb4897134df5c876d0db5c49429e623ce605e");
const getAppwriteSessionFn = createServerFn({ method: "GET" }).handler(getAppwriteSessionFn_createServerFn_handler, async () => {
  const session = getCookie(`appwrite-session-secret`);
  if (!session) return null;
  return session;
});
var setAppwriteSessionCookiesFn_createServerFn_handler = createSsrRpc("15f08b3d6d132e0e3e7a191a76aec017928e1e6319c39b50ebea162e8a542822");
const setAppwriteSessionCookiesFn = createServerFn({ method: "POST" }).inputValidator(z$1.object({
  id: z$1.string(),
  secret: z$1.string()
})).handler(setAppwriteSessionCookiesFn_createServerFn_handler, async ({ data }) => {
  const { id, secret } = data;
  setCookie$1(`appwrite-session-secret`, secret, {
    httpOnly: true,
    secure: true,
    sameSite: "none"
  });
  setCookie$1(`appwrite-session-id`, id, {
    httpOnly: true,
    secure: true,
    sameSite: "none"
  });
});
var signUpInSchema = z$1.object({
  email: z$1.email("Please enter a valid email address"),
  password: z$1.string().min(8, "Password must be at least 8 characters"),
  redirect: z$1.string().optional()
});
var signUpFn_createServerFn_handler = createSsrRpc("8d08449bae12e9488f534f836f3792ed5da6a42e92cff6580e2a6751b6a136ad");
const signUpFn = createServerFn({ method: "POST" }).inputValidator(signUpInSchema).handler(signUpFn_createServerFn_handler, async ({ data }) => {
  const { email, password, redirect: redirectUrl } = data;
  const { account } = createAdminClient();
  try {
    await account.create({
      userId: ID.unique(),
      email,
      password
    });
    const session = await account.createEmailPasswordSession({
      email,
      password
    });
    await setAppwriteSessionCookiesFn({ data: {
      id: session.$id,
      secret: session.secret
    } });
  } catch (_error) {
    const error = _error;
    setResponseStatus(error.code);
    throw {
      message: error.message,
      status: error.code
    };
  }
  if (redirectUrl) throw redirect({ to: redirectUrl });
  else throw redirect({ to: "/" });
});
var signInFn_createServerFn_handler = createSsrRpc("b076cb75c3e5b346087aaca55fd05f552ee647e26fe91888fcf9d4c17d47939f");
const signInFn = createServerFn({ method: "POST" }).inputValidator(signUpInSchema).handler(signInFn_createServerFn_handler, async ({ data }) => {
  const { email, password, redirect: redirectUrl } = data;
  try {
    const { account } = createAdminClient();
    const session = await account.createEmailPasswordSession({
      email,
      password
    });
    await setAppwriteSessionCookiesFn({ data: {
      id: session.$id,
      secret: session.secret
    } });
  } catch (_error) {
    const error = _error;
    setResponseStatus(error.code);
    throw {
      message: error.message,
      status: error.code
    };
  }
  if (redirectUrl) throw redirect({ to: redirectUrl });
  else throw redirect({ to: "/" });
});
var signOutFn_createServerFn_handler = createSsrRpc("c87d01763c380aa6e92391027d4c543d8ec65158be93bb184a4a116702451815");
const signOutFn = createServerFn({ method: "POST" }).handler(signOutFn_createServerFn_handler, async () => {
  deleteCookie$1(`appwrite-session-secret`);
  deleteCookie$1(`appwrite-session-id`);
});
var authMiddleware_createServerFn_handler = createSsrRpc("224e3725f631022542b50386b57b0c4e501810608d50bc677a2e5448a3b823db");
const authMiddleware = createServerFn({ method: "GET" }).handler(authMiddleware_createServerFn_handler, async () => {
  return { currentUser: await getCurrentUser() };
});
var getCurrentUser_createServerFn_handler = createSsrRpc("04cab093470b32062d3dc577fbb85096ba73e976b4b9baf559bccf5d7ac33553");
const getCurrentUser = createServerFn({ method: "GET" }).handler(getCurrentUser_createServerFn_handler, async () => {
  const session = await getAppwriteSessionFn();
  if (!session) return null;
  else return await (await createSessionClient(session)).account.get();
});

function getContext() {
  return { queryClient: new QueryClient() };
}
function Provider({ children, queryClient }) {
  return /* @__PURE__ */ jsx(QueryClientProvider, {
    client: queryClient,
    children
  });
}
var styles_default = "/assets/styles-BBuBjlqj.css";
var Toaster$1 = ({ ...props }) => {
  const { theme = "system" } = useTheme();
  return /* @__PURE__ */ jsx(Toaster, {
    theme,
    className: "toaster group",
    style: {
      "--normal-bg": "var(--popover)",
      "--normal-text": "var(--popover-foreground)",
      "--normal-border": "var(--border)"
    },
    ...props
  });
};
var scripts = [];
const Route = createRootRouteWithContext()({
  loader: async () => {
    const { currentUser } = await authMiddleware();
    return { currentUser };
  },
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      { title: "Major top secret!" }
    ],
    links: [{
      rel: "stylesheet",
      href: styles_default
    }],
    scripts: [...scripts]
  }),
  shellComponent: RootDocument
});
function RootDocument({ children }) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    suppressHydrationWarning: true,
    children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [/* @__PURE__ */ jsxs(ThemeProvider, {
      attribute: "class",
      defaultTheme: "light",
      enableSystem: true,
      disableTransitionOnChange: true,
      children: [children, /* @__PURE__ */ jsx(Toaster$1, {})]
    }), /* @__PURE__ */ jsx(Scripts, {})] })]
  });
}
const Route$1 = createFileRoute("/_public")({ loader: async () => {
  const { currentUser } = await authMiddleware();
  return { currentUser };
} });
const Route$2 = createFileRoute("/_protected")({ loader: async ({ location }) => {
  const { currentUser } = await authMiddleware();
  if (!currentUser) {
    if (location.pathname !== "/sign-in" && location.pathname !== "/sign-up") throw redirect({
      to: "/sign-in",
      search: { redirect: location.href }
    });
  }
  return { currentUser };
} });
const Route$3 = createFileRoute("/_auth")({ loader: async ({ location }) => {
  const currentUser = await getCurrentUser();
  if (currentUser && location.pathname !== "/sign-out") throw redirect({ to: "/" });
  return { currentUser };
} });
var $$splitComponentImporter$3 = () => import('./_public-EWc5Z18G.mjs');
const Route$4 = createFileRoute("/_public/")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import('./example-protected-route-CAsPZ0n1.mjs');
const Route$5 = createFileRoute("/_protected/example-protected-route")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import('./sign-up-BdLMKehI.mjs');
var searchSchema$1 = z.object({ redirect: z.string().optional() });
const Route$6 = createFileRoute("/_auth/sign-up")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component"),
  validateSearch: searchSchema$1
});
const Route$7 = createFileRoute("/_auth/sign-out")({ beforeLoad: async () => {
  await signOutFn();
  throw redirect({ to: "/" });
} });
var $$splitComponentImporter = () => import('./sign-in-D-SlRaul.mjs');
var searchSchema = z.object({ redirect: z.string().optional() });
const Route$8 = createFileRoute("/_auth/sign-in")({
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  validateSearch: searchSchema
});
const Route$9 = createFileRoute("/_api/hello")({ server: { handlers: { GET: async ({ request }) => {
  return new Response("Hello, World! from " + request.url);
} } } });
var PublicRoute = Route$1.update({
  id: "/_public",
  getParentRoute: () => Route
});
var ProtectedRoute = Route$2.update({
  id: "/_protected",
  getParentRoute: () => Route
});
var AuthRoute = Route$3.update({
  id: "/_auth",
  getParentRoute: () => Route
});
var PublicIndexRoute = Route$4.update({
  id: "/",
  path: "/",
  getParentRoute: () => PublicRoute
});
var ProtectedExampleProtectedRouteRoute = Route$5.update({
  id: "/example-protected-route",
  path: "/example-protected-route",
  getParentRoute: () => ProtectedRoute
});
var AuthSignUpRoute = Route$6.update({
  id: "/sign-up",
  path: "/sign-up",
  getParentRoute: () => AuthRoute
});
var AuthSignOutRoute = Route$7.update({
  id: "/sign-out",
  path: "/sign-out",
  getParentRoute: () => AuthRoute
});
var AuthSignInRoute = Route$8.update({
  id: "/sign-in",
  path: "/sign-in",
  getParentRoute: () => AuthRoute
});
var ApiHelloRoute = Route$9.update({
  id: "/_api/hello",
  path: "/hello",
  getParentRoute: () => Route
});
var AuthRouteChildren = {
  AuthSignInRoute,
  AuthSignOutRoute,
  AuthSignUpRoute
};
var AuthRouteWithChildren = AuthRoute._addFileChildren(AuthRouteChildren);
var ProtectedRouteChildren = { ProtectedExampleProtectedRouteRoute };
var ProtectedRouteWithChildren = ProtectedRoute._addFileChildren(ProtectedRouteChildren);
var PublicRouteChildren = { PublicIndexRoute };
var rootRouteChildren = {
  AuthRoute: AuthRouteWithChildren,
  ProtectedRoute: ProtectedRouteWithChildren,
  PublicRoute: PublicRoute._addFileChildren(PublicRouteChildren),
  ApiHelloRoute
};
const routeTree = Route._addFileChildren(rootRouteChildren)._addFileTypes();
function ErrorComponent({ error, info }) {
  const randomErrorId = useRef(Math.random().toString(36).substring(2, 15));
  const { theme } = useTheme();
  const location = useLocation();
  const message = {
    type: "NOTIFY_ERROR",
    data: {
      errorId: randomErrorId.current,
      href: location.href,
      errorMessage: error.message,
      errorStack: error.stack,
      errorCause: error.cause,
      errorComponentStack: info?.componentStack
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      window.parent.postMessage(message);
    }, 2e3);
    return () => clearInterval(interval);
  }, []);
  return /* @__PURE__ */ jsxs("div", {
    className: "flex-grow flex flex-col justify-center items-center gap-6 text-center my-20",
    children: [
      /* @__PURE__ */ jsx("img", {
        src: theme === "dark" ? "/imagine-logo-dark.svg" : "/imagine-logo-light.svg",
        alt: "Imagine Logo",
        className: "size-14"
      }),
      /* @__PURE__ */ jsx("h1", {
        className: "text-2xl font-medium",
        children: "Oops! Something went wrong."
      }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("pre", {
        className: "text-xs border border-red-500 p-2 text-red-500 overflow-auto rounded-md",
        children: error.message ? /* @__PURE__ */ jsx("code", { children: error.message }) : null
      }) })
    ]
  });
}
const getRouter = () => {
  const rqContext = getContext();
  const router = createRouter({
    routeTree,
    context: { ...rqContext },
    defaultPreload: "intent",
    defaultErrorComponent: ({ error, info, reset }) => /* @__PURE__ */ jsx(ErrorComponent, {
      error,
      info,
      reset
    }),
    Wrap: (props) => {
      return /* @__PURE__ */ jsx(Provider, {
        ...rqContext,
        children: props.children
      });
    }
  });
  setupRouterSsrQueryIntegration({
    router,
    queryClient: rqContext.queryClient
  });
  return router;
};

const routerDneg7yWn = /*#__PURE__*/Object.freeze({
	__proto__: null,
	getRouter: getRouter
});

export { signUpFn as a, signInFn as b, routerDneg7yWn as r, signOutFn as s };
//# sourceMappingURL=router-Dneg7yWn.mjs.map
