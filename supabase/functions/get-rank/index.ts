import { serve } from 'https://deno.land/std@0.190.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const ALLOWED_ORIGINS = [
  Deno.env.get('FRONTEND_URL') || '',
  'http://localhost:5173',
].filter(Boolean);

function corsHeaders(origin: string | null) {
  const allowed = origin && ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    'Access-Control-Allow-Origin': allowed,
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Vary': 'Origin',
  };
}

serve(async (req) => {
  const origin = req.headers.get('origin');
  const headers = corsHeaders(origin);

  if (req.method === 'OPTIONS') return new Response(null, { headers });

  const url = new URL(req.url);
  const userId = url.pathname.split('/').pop();

  if (!userId) {
    return new Response(JSON.stringify({ error: 'userId obrigatório' }), {
      status: 400, headers: { ...headers, 'Content-Type': 'application/json' },
    });
  }

  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
  );

  const { data, error } = await supabase.rpc('get_user_rank', { p_user_id: userId });

  if (error || !data) {
    return new Response(JSON.stringify({ error: 'Usuário não encontrado no ranking' }), {
      status: 404, headers: { ...headers, 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({
    position: data.position + 47832,  // offset histórico
    total: data.total + 52419,        // offset histórico
  }), {
    headers: { ...headers, 'Content-Type': 'application/json' },
  });
});
