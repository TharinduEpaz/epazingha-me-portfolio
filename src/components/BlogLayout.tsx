"use client";
import Head from "next/head";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { formatDate } from "../../lib/formatDate";
import { Prose } from "@/components/Prose";
import { Container } from "./Container";
import { Heading } from "./Heading";
import Link from "next/link";
import { Paragraph } from "./Paragraph";
import { TableOfContents } from "./TableOfContents";

function ArrowLeftIcon(props: any) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BlogLayout({
  children,
  meta,
  isRssFeed = false,
  previousPathname,
}: any) {
  let router = useRouter();

  return (
    <Container >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 items-start">
        <article>
          <header className="flex flex-col">
            <Link
              type="button"
              href="/blog"
              aria-label="Go back to articles"
              className="group mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition  "
            >
              <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 d" />
            </Link>

            <Heading className=" py-4">{meta.title}</Heading>
            <time
              dateTime={meta.date}
              className="flex items-center text-base text-zinc-400 "
            >
              <Paragraph className=" text-zinc-700">
                {formatDate(meta.date)}
              </Paragraph>
            </time>

            <div className="flex flex-wrap gap-3 mt-4">
              {meta.mediumUrl && (
                <a
                  href={meta.mediumUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-black hover:bg-gray-800 text-white rounded-full font-normal text-sm transition-colors duration-200 w-fit"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                  </svg>
                  Read on Medium
                </a>
              )}

              {meta.linkedInUrl && (
                <a
                  href={meta.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#0A66C2] hover:bg-[#004182] text-white rounded-md font-medium text-sm transition-colors duration-200 w-fit"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Follow on LinkedIn
                </a>
              )}
            </div>
            <div className="w-full mt-4 bg-gray-100 rounded-lg overflow-hidden relative">
              <Image
                src={meta.image}
                alt="thumbnail"
                height={1200}
                width={1200}
                className={`object-cover w-full h-96`}
              />
            </div>
          </header>
          <Prose className="mt-8">{children}</Prose>
        </article>

        {/* Table of Contents - Hidden on mobile, sticky on desktop */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
            <TableOfContents />
          </div>
        </aside>
      </div>
    </Container>
  );
}
