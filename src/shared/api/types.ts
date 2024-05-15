import { Session, Subscription, User } from '@supabase/supabase-js';

export type SupabaseSubscriptionListener = {
  subscription: Subscription;
};

export type SupabaseUser = User;

export type SupabaseSession = Session;
