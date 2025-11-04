import React from "react";
import { cn } from "@/lib/utils";

type CalloutType = "info" | "warning" | "success" | "error" | "note";

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
  emoji?: string;
}

/*
- info - Blue background with 💡 emoji (default)
- warning - Yellow background with ⚠️ emoji
- success - Green background with ✅ emoji
- error - Red background with ❌ emoji
- note - Gray background with 📝 emoji
*/
const calloutStyles: Record<
  CalloutType,
  { bg: string; border: string; text: string; emoji: string }
> = {
  info: {
    bg: "bg-blue-50 dark:bg-blue-950/30",
    border: "border-blue-200 dark:border-blue-900",
    text: "text-blue-900 dark:text-blue-100",
    emoji: "💡",
  },
  warning: {
    bg: "bg-yellow-50 dark:bg-yellow-950/30",
    border: "border-yellow-200 dark:border-yellow-900",
    text: "text-yellow-900 dark:text-yellow-100",
    emoji: "⚠️",
  },
  success: {
    bg: "bg-green-50 dark:bg-green-950/30",
    border: "border-green-200 dark:border-green-900",
    text: "text-green-900 dark:text-green-100",
    emoji: "✅",
  },
  error: {
    bg: "bg-red-50 dark:bg-red-950/30",
    border: "border-red-200 dark:border-red-900",
    text: "text-red-900 dark:text-red-100",
    emoji: "❌",
  },
  note: {
    bg: "bg-gray-50 dark:bg-gray-950/30",
    border: "border-gray-200 dark:border-gray-900",
    text: "text-gray-900 dark:text-gray-100",
    emoji: "📝",
  },
};

export const Callout: React.FC<CalloutProps> = ({
  type = "info",
  title,
  children,
  emoji,
}) => {
  const styles = calloutStyles[type];
  const displayEmoji = emoji || styles.emoji;

  return (
    <div
      className={cn(
        "my-6 rounded-lg border-l-4 p-4",
        styles.bg,
        styles.border,
        styles.text
      )}
    >
      <div className="flex items-start gap-3">
        <span className="text-xl flex-shrink-0 mt-0.5">{displayEmoji}</span>
        <div className="flex-1">
          {title && (
            <div className="font-semibold mb-1 text-sm uppercase tracking-wide">
              {title}
            </div>
          )}
          <div className="text-sm leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
};
