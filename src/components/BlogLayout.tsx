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
