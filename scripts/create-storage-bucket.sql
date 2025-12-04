-- Script para criar um bucket público no Supabase Storage para os e-books
-- Execute este script no SQL Editor do Supabase

-- Criar o bucket público
INSERT INTO storage.buckets (id, name, public)
VALUES ('public-files', 'public-files', false)
ON CONFLICT (id) DO NOTHING;

-- Permitir acesso de leitura a todos (arquivos com URL assinada)
CREATE POLICY "Allow authenticated downloads"
ON storage.objects FOR SELECT
TO authenticated
USING (bucket_id = 'public-files');

-- Permitir upload apenas para usuários autenticados (para admin)
CREATE POLICY "Allow authenticated uploads"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'public-files');
