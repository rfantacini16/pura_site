"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, CheckCircle2, RefreshCw } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

// Validações com Zod
const contactSchema = z.object({
  nome: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("Endereço de e-mail institucional inválido"),
  telefone: z
    .string()
    .min(10, "Telefone deve conter DDD e no mínimo 10 dígitos")
    .regex(/^[0-9\s()+-]+$/, "Formato de telefone inválido"),
  ies: z.string().min(3, "Identifique a instituição de ensino superior"),
  cargo: z.string().min(2, "Informe seu cargo regulatório ou função acadêmica"),
  mensagem: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Track event in analytics layer
    trackEvent("contact_form_submit", {
      nome: data.nome,
      email: data.email,
      ies: data.ies,
      cargo: data.cargo
    });

    // Preparação para futura integração com CRM (HubSpot, Pipedrive, webhook, etc.)
    console.log("Future CRM Payload Integration:", {
      lead_source: "website_contact_form",
      submitted_at: new Date().toISOString(),
      lead_data: data,
    });

    // Simulando chamada de API de CRM/Email
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center p-8 rounded-[var(--site-radius-lg)] border border-site-border bg-white shadow-lg">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-500 mb-4 animate-bounce">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="text-xl font-bold text-site-text mb-2">Mensagem Enviada!</h3>
        <p className="text-sm text-site-text-secondary max-w-sm">
          Agradecemos pelo cadastro. A equipe da PURA entrará em contato com você o mais breve possível.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 p-8 rounded-[var(--site-radius-lg)] border border-site-border bg-white shadow-lg text-left"
    >
      <div className="flex flex-col gap-1.5">
        <label htmlFor="nome" className="text-xs font-bold text-site-text uppercase tracking-wider">
          Nome Completo *
        </label>
        <input
          type="text"
          id="nome"
          placeholder="Ex: Dr. Marcelo Souza"
          {...register("nome")}
          className={`w-full px-4 py-3 rounded-[var(--site-radius-sm)] border bg-site-bg-subtle text-sm focus:outline-none focus:bg-white transition-colors ${
            errors.nome ? "border-red-400 focus:border-red-500" : "border-site-border focus:border-site-primary"
          }`}
        />
        {errors.nome && (
          <span className="text-xs font-semibold text-red-500">{errors.nome.message}</span>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs font-bold text-site-text uppercase tracking-wider">
            E-mail Institucional *
          </label>
          <input
            type="email"
            id="email"
            placeholder="instituto@ies.edu.br"
            {...register("email")}
            className={`w-full px-4 py-3 rounded-[var(--site-radius-sm)] border bg-site-bg-subtle text-sm focus:outline-none focus:bg-white transition-colors ${
              errors.email ? "border-red-400 focus:border-red-500" : "border-site-border focus:border-site-primary"
            }`}
          />
          {errors.email && (
            <span className="text-xs font-semibold text-red-500">{errors.email.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="telefone" className="text-xs font-bold text-site-text uppercase tracking-wider">
            Telefone / WhatsApp *
          </label>
          <input
            type="tel"
            id="telefone"
            placeholder="(11) 99999-9999"
            {...register("telefone")}
            className={`w-full px-4 py-3 rounded-[var(--site-radius-sm)] border bg-site-bg-subtle text-sm focus:outline-none focus:bg-white transition-colors ${
              errors.telefone ? "border-red-400 focus:border-red-500" : "border-site-border focus:border-site-primary"
            }`}
          />
          {errors.telefone && (
            <span className="text-xs font-semibold text-red-500">{errors.telefone.message}</span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="ies" className="text-xs font-bold text-site-text uppercase tracking-wider">
            Nome da IES *
          </label>
          <input
            type="text"
            id="ies"
            placeholder="Ex: Faculdade Metropolitana..."
            {...register("ies")}
            className={`w-full px-4 py-3 rounded-[var(--site-radius-sm)] border bg-site-bg-subtle text-sm focus:outline-none focus:bg-white transition-colors ${
              errors.ies ? "border-red-400 focus:border-red-500" : "border-site-border focus:border-site-primary"
            }`}
          />
          {errors.ies && (
            <span className="text-xs font-semibold text-red-500">{errors.ies.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="cargo" className="text-xs font-bold text-site-text uppercase tracking-wider">
            Cargo / Função *
          </label>
          <input
            type="text"
            id="cargo"
            placeholder="Ex: Procurador Institucional (PI)"
            {...register("cargo")}
            className={`w-full px-4 py-3 rounded-[var(--site-radius-sm)] border bg-site-bg-subtle text-sm focus:outline-none focus:bg-white transition-colors ${
              errors.cargo ? "border-red-400 focus:border-red-500" : "border-site-border focus:border-site-primary"
            }`}
          />
          {errors.cargo && (
            <span className="text-xs font-semibold text-red-500">{errors.cargo.message}</span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="mensagem" className="text-xs font-bold text-site-text uppercase tracking-wider">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          rows={4}
          placeholder="Conte-nos sobre a necessidade da sua IES..."
          {...register("mensagem")}
          className="w-full px-4 py-3 rounded-[var(--site-radius-sm)] border border-site-border bg-site-bg-subtle text-sm focus:outline-none focus:border-site-primary focus:bg-white transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-[var(--site-radius-sm)] bg-site-primary px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-site-primary/10 hover:bg-site-primary-hover transition-colors disabled:opacity-75 disabled:pointer-events-none"
      >
        {isSubmitting ? (
          <>
            Enviando...
            <RefreshCw className="h-4 w-4 animate-spin" />
          </>
        ) : (
          <>
            Enviar Mensagem
            <Send className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}

// Simple Callback request form schema
const callbackSchema = z.object({
  nome: z.string().min(3, "Nome completo requerido"),
  telefone: z.string().min(10, "Telefone inválido"),
});
type CallbackFormData = z.infer<typeof callbackSchema>;

export function CallbackForm() {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<CallbackFormData>({
    resolver: zodResolver(callbackSchema),
  });

  const onSubmit = async (data: CallbackFormData) => {
    setLoading(true);
    // Track event in analytics layer
    trackEvent("demo_request", {
      nome: data.nome,
      telefone: data.telefone,
      type: "callback_request"
    });
    console.log("Future CRM Callback Payload:", data);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setLoading(false);
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="p-6 rounded-[var(--site-radius)] border border-emerald-200 bg-emerald-50 text-emerald-800 text-sm">
        Solicitação de ligação enviada! Retornaremos o contato em breve.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 p-6 rounded-[var(--site-radius)] border border-site-border bg-white shadow-sm text-left">
      <div>
        <h4 className="text-sm font-bold text-site-text">Solicitar Ligação</h4>
        <p className="text-xs text-site-text-secondary mt-1">Preencha e ligamos para você em minutos.</p>
      </div>

      <div className="flex flex-col gap-1">
        <input
          type="text"
          placeholder="Seu nome"
          {...register("nome")}
          className="px-3 py-2 border border-site-border rounded-[var(--site-radius-sm)] text-xs focus:outline-none focus:border-site-primary bg-site-bg-subtle focus:bg-white"
        />
        {errors.nome && <span className="text-[10px] font-semibold text-red-500">{errors.nome.message}</span>}
      </div>

      <div className="flex flex-col gap-1">
        <input
          type="tel"
          placeholder="DDD + Telefone"
          {...register("telefone")}
          className="px-3 py-2 border border-site-border rounded-[var(--site-radius-sm)] text-xs focus:outline-none focus:border-site-primary bg-site-bg-subtle focus:bg-white"
        />
        {errors.telefone && <span className="text-[10px] font-semibold text-red-500">{errors.telefone.message}</span>}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-2.5 rounded-[var(--site-radius-sm)] bg-site-primary text-xs font-semibold text-white hover:bg-site-primary-hover transition-colors disabled:opacity-75"
      >
        {loading ? "Processando..." : "Quero que me liguem"}
      </button>
    </form>
  );
}
