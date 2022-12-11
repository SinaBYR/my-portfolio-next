import Router from 'next/router';
import { useEffect } from 'react';
import useSWR from 'swr';
import { User } from '../types/types';
import { fetchJson } from './fetchJson';

export function useUser({
  redirectTo = ''
}: {
  redirectTo: string
}) {
  const { data: user, mutate: mutateUser, error } = useSWR<User>('/api/user', fetchJson);

  useEffect(() => {
    // if user data not yet there (fetch in progress, logged in or not) then don't do anything yet.
    if(!user || !redirectTo) return;

    // redirect user if user not found (not logged in).
    if(!user && redirectTo) {
      Router.push(redirectTo);
    }
  }, [user, redirectTo]);

  return {
    user,
    mutateUser,
    error
  }
}