"use client";
// Go here for help if needed:
// https://formspr.ee/react-help
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const formSpreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

  // send error early so it doesn't unintentionally trick the user into using the form
  if (!formSpreeId) {
    return (
      <div className="flex items-center border border-red-400/30 bg-red-400/10 p-6 text-center text-red-400">
        <span>
          Formspree ID is not set. Please check your environment variables!
        </span>
      </div>
    );
  }

  const [state, handleSubmit, reset] = useForm(formSpreeId);

  return (
    <>
      {state.succeeded ? (
        <div className="space-y-6">
          <div className="flex items-center border border-green-400/30 bg-green-400/10 p-6 text-center text-green-400">
            <span>
              Message sent successfully! Thank you for reaching out! :)
            </span>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => reset()}
              className="group inline-flex items-center border border-zinc-600 bg-zinc-700 px-4 py-2 text-zinc-200 transition-colors duration-200 hover:bg-zinc-600">
              <span>SEND ANOTHER MESSAGE</span>
            </button>
          </div>{" "}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-1 block font-mono text-sm text-zinc-400">
                NAME *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-zinc-700 bg-zinc-900 px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-zinc-500"
                required
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
                className="mt-1 text-sm text-red-400"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1 block font-mono text-sm text-zinc-400">
                EMAIL *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-zinc-700 bg-zinc-900 px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-zinc-500"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="mt-1 text-sm text-red-400"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="subject"
              className="mb-1 block font-mono text-sm text-zinc-400">
              SUBJECT
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full border border-zinc-700 bg-zinc-900 px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-zinc-500"
            />
            <ValidationError
              prefix="Subject"
              field="subject"
              errors={state.errors}
              className="mt-1 text-sm text-red-400"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-1 block font-mono text-sm text-zinc-400">
              MESSAGE *
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full resize-none border border-zinc-700 bg-zinc-900 px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-zinc-500"
              required></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              className="mt-1 text-sm text-red-400"
            />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className={`group inline-flex items-center border border-zinc-600 bg-zinc-700 px-4 py-2 text-zinc-200 transition-colors duration-200 hover:bg-zinc-600 ${state.submitting ? "cursor-not-allowed opacity-70" : ""} `}>
            {state.submitting ? (
              <>
                <span className="mr-2">SENDING</span>
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-zinc-400 border-t-transparent"></div>
              </>
            ) : (
              <>
                <span>SEND MESSAGE</span>
              </>
            )}
          </button>

          <ValidationError
            errors={state.errors}
            className="mt-4 block border border-red-400/30 bg-red-400/10 p-3 text-red-400"
          />
        </form>
      )}
    </>
  );
}
