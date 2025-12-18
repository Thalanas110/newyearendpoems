import { c as createServerRpc, a as createServerFn, g as getCookie, s as setCookie$1, b as setResponseStatus, d as deleteCookie$1 } from '../virtual/entry.mjs';
import { c as createSessionClient, a as createAdminClient } from './appwrite-MsY53L6a.mjs';
import { redirect } from '@tanstack/react-router';
import z$1 from 'zod';
import { ID } from 'node-appwrite';
import './nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'react/jsx-runtime';
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

var getAppwriteSessionFn_createServerFn_handler = createServerRpc("a71b2d242e677da21a9b49fc012bb4897134df5c876d0db5c49429e623ce605e", (opts, signal) => {
  return getAppwriteSessionFn.__executeServer(opts, signal);
});
var getAppwriteSessionFn = createServerFn({ method: "GET" }).handler(getAppwriteSessionFn_createServerFn_handler, async () => {
  const session = getCookie(`appwrite-session-secret`);
  if (!session) return null;
  return session;
});
var setAppwriteSessionCookiesFn_createServerFn_handler = createServerRpc("15f08b3d6d132e0e3e7a191a76aec017928e1e6319c39b50ebea162e8a542822", (opts, signal) => {
  return setAppwriteSessionCookiesFn.__executeServer(opts, signal);
});
var setAppwriteSessionCookiesFn = createServerFn({ method: "POST" }).inputValidator(z$1.object({
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
var signUpFn_createServerFn_handler = createServerRpc("8d08449bae12e9488f534f836f3792ed5da6a42e92cff6580e2a6751b6a136ad", (opts, signal) => {
  return signUpFn.__executeServer(opts, signal);
});
var signUpFn = createServerFn({ method: "POST" }).inputValidator(signUpInSchema).handler(signUpFn_createServerFn_handler, async ({ data }) => {
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
var signInFn_createServerFn_handler = createServerRpc("b076cb75c3e5b346087aaca55fd05f552ee647e26fe91888fcf9d4c17d47939f", (opts, signal) => {
  return signInFn.__executeServer(opts, signal);
});
var signInFn = createServerFn({ method: "POST" }).inputValidator(signUpInSchema).handler(signInFn_createServerFn_handler, async ({ data }) => {
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
var signOutFn_createServerFn_handler = createServerRpc("c87d01763c380aa6e92391027d4c543d8ec65158be93bb184a4a116702451815", (opts, signal) => {
  return signOutFn.__executeServer(opts, signal);
});
var signOutFn = createServerFn({ method: "POST" }).handler(signOutFn_createServerFn_handler, async () => {
  deleteCookie$1(`appwrite-session-secret`);
  deleteCookie$1(`appwrite-session-id`);
});
var authMiddleware_createServerFn_handler = createServerRpc("224e3725f631022542b50386b57b0c4e501810608d50bc677a2e5448a3b823db", (opts, signal) => {
  return authMiddleware.__executeServer(opts, signal);
});
var authMiddleware = createServerFn({ method: "GET" }).handler(authMiddleware_createServerFn_handler, async () => {
  return { currentUser: await getCurrentUser() };
});
var getCurrentUser_createServerFn_handler = createServerRpc("04cab093470b32062d3dc577fbb85096ba73e976b4b9baf559bccf5d7ac33553", (opts, signal) => {
  return getCurrentUser.__executeServer(opts, signal);
});
var getCurrentUser = createServerFn({ method: "GET" }).handler(getCurrentUser_createServerFn_handler, async () => {
  const session = await getAppwriteSessionFn();
  if (!session) return null;
  else return await (await createSessionClient(session)).account.get();
});

export { authMiddleware_createServerFn_handler, getAppwriteSessionFn_createServerFn_handler, getCurrentUser_createServerFn_handler, setAppwriteSessionCookiesFn_createServerFn_handler, signInFn_createServerFn_handler, signOutFn_createServerFn_handler, signUpFn_createServerFn_handler };
//# sourceMappingURL=auth-B1u2jsgB.mjs.map
