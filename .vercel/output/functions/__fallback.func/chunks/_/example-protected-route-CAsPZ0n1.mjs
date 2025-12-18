import { s as signOutFn } from './router-Dneg7yWn.mjs';
import { u as useServerFn } from './useServerFn-V9p42L9k.mjs';
import { jsxs } from 'react/jsx-runtime';
import { useLoaderData } from '@tanstack/react-router';
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
import 'zod';
import '@tanstack/react-router-ssr-query';
import '@tanstack/react-query';
import 'next-themes';
import 'sonner';
import 'react';

function useAuth() {
  const { currentUser } = useLoaderData({ from: "__root__" });
  return {
    currentUser,
    signOut: useServerFn(signOutFn)
  };
}
function RouteComponent({}) {
  const { currentUser } = useAuth();
  return /* @__PURE__ */ jsxs("div", { children: ["Protected ", currentUser?.email] });
}

export { RouteComponent as component };
//# sourceMappingURL=example-protected-route-CAsPZ0n1.mjs.map
