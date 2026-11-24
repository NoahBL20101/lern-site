// Supabase-Zugangsdaten für Login & Fortschritt-Speicherung.
// Zu finden im Supabase-Dashboard unter Project Settings → API (bzw. "Connect").
// Der anon/publishable Key ist öffentlich gedacht – die Daten schützt Row Level Security (siehe supabase-setup.sql).
window.SUPABASE_CONFIG = {
  url: '',      // z. B. 'https://abcdefghijklm.supabase.co'
  anonKey: '',  // z. B. 'eyJhbGciOi...' oder 'sb_publishable_...'
};
