-- Tabela para capturar leads de download de ebooks
CREATE TABLE IF NOT EXISTS ebook_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  ebook_title TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar RLS
ALTER TABLE ebook_leads ENABLE ROW LEVEL SECURITY;

-- Política para permitir inserções públicas (leads podem se cadastrar sem auth)
CREATE POLICY "Allow public inserts" ON ebook_leads 
  FOR INSERT 
  WITH CHECK (true);

-- Política para leitura apenas por usuários autenticados (admin)
CREATE POLICY "Allow authenticated reads" ON ebook_leads 
  FOR SELECT 
  USING (auth.role() = 'authenticated');

-- Índice para busca por email
CREATE INDEX IF NOT EXISTS idx_ebook_leads_email ON ebook_leads(email);
CREATE INDEX IF NOT EXISTS idx_ebook_leads_created_at ON ebook_leads(created_at DESC);
