"use client";

import { useMemo, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { site } from "@/data/site";

const topics = [
  { id: "partnership", label: "Partnership" },
  { id: "project", label: "A specific project" },
  { id: "report", label: "Reports and data" },
  { id: "other", label: "Something else" },
];

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export function ContactForm() {
  const params = useSearchParams();
  const requested = params.get("topic");
  const initialTopic = topics.some((item) => item.id === requested) ? requested ?? "project" : "project";
  const [topic, setTopic] = useState(initialTopic);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const interest = useMemo(() => topics.find((item) => item.id === topic)?.label ?? "Partnership", [topic]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const organisation = String(data.get("organisation") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const nextErrors: Errors = {};
    if (name.length < 2) nextErrors.name = "Please add your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Please add a valid email.";
    if (message.length < 12) nextErrors.message = "Please add a short note about your enquiry.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Organisation: ${organisation || "—"}`,
      `Phone: ${phone || "—"}`,
      `Interest: ${interest}`,
      "",
      message,
    ].join("\n");
    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(`Meensou enquiry — ${interest}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    window.location.href = mailto;
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" name="name" error={errors.name} autoComplete="name" />
        <Field label="Email" name="email" type="email" error={errors.email} autoComplete="email" />
        <Field label="Organisation" name="organisation" autoComplete="organization" />
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
      </div>
      <fieldset>
        <legend className="text-sm text-charcoal/70">What is this about?</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {topics.map((item) => (
            <label key={item.id} className="cursor-pointer">
              <input
                type="radio"
                name="topic"
                value={item.id}
                checked={topic === item.id}
                onChange={() => setTopic(item.id)}
                className="peer sr-only"
              />
              <span className="inline-flex border border-charcoal/20 px-3 py-2 text-xs tracking-[0.12em] uppercase peer-checked:border-forest peer-checked:bg-forest peer-checked:text-ivory peer-focus-visible:outline">
                {item.label}
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      <label className="block text-sm text-charcoal/70">
        Message
        <textarea
          name="message"
          rows={6}
          className="mt-2 w-full border border-charcoal/20 bg-white px-3 py-3 text-base text-charcoal outline-none focus:border-forest"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message ? (
          <span id="message-error" className="mt-1 block text-sm text-red-800">
            {errors.message}
          </span>
        ) : null}
      </label>
      <button type="submit" className="justify-self-start bg-forest px-6 py-3 text-xs tracking-[0.16em] text-ivory uppercase">
        Send enquiry
      </button>
      <p className="text-sm leading-6 text-charcoal/65">
        Sending opens your email app addressed to {site.email}. Nothing is stored on this website.
        {sent ? " If the mail app did not open, write to us directly." : ""}
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  autoComplete?: string;
}) {
  const errorId = `${name}-error`;
  return (
    <label className="block text-sm text-charcoal/70">
      {label}
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className="mt-2 w-full border border-charcoal/20 bg-white px-3 py-3 text-base text-charcoal outline-none focus:border-forest"
      />
      {error ? (
        <span id={errorId} className="mt-1 block text-sm text-red-800">
          {error}
        </span>
      ) : null}
    </label>
  );
}
