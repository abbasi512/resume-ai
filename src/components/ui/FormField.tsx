// src/components/ui/FormField.tsx
import { cn } from "@/lib/utils";

interface FormFieldProps {
  label: string;
  children: React.ReactNode;
  className?: string;
}

export function FormField({ label, children, className }: FormFieldProps) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label className="text-[11px] font-semibold text-gray-400 tracking-widest uppercase">
        {label}
      </label>
      {children}
    </div>
  );
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "w-full px-3 py-2.5 border border-black/10 rounded-lg text-sm font-sans bg-white text-brand-900 outline-none transition-colors focus:border-accent-purple placeholder:text-gray-300",
        className
      )}
      {...props}
    />
  );
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        "w-full px-3 py-2.5 border border-black/10 rounded-lg text-[13px] font-sans bg-white text-brand-900 outline-none transition-colors focus:border-accent-purple placeholder:text-gray-300 resize-none min-h-[80px] leading-relaxed",
        className
      )}
      {...props}
    />
  );
}

interface AiButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  loadingText?: string;
  children: React.ReactNode;
}

export function AiButton({ loading, loadingText = "AI is thinking…", children, className, ...props }: AiButtonProps) {
  return (
    <button
      disabled={loading}
      className={cn(
        "w-full py-2.5 rounded-lg text-sm font-medium text-white flex items-center justify-center gap-2 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed",
        "bg-gradient-to-r from-accent-purple to-[#5a4fcf]",
        !loading && "hover:opacity-90",
        className
      )}
      {...props}
    >
      {loading ? (
        <>
          <DotLoader />
          <span>{loadingText}</span>
        </>
      ) : (
        <>
          <span className="text-base">✦</span>
          {children}
        </>
      )}
    </button>
  );
}

export function DotLoader() {
  return (
    <div className="flex gap-1">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-white animate-[dotBounce_1.2s_infinite]"
          style={{ animationDelay: `${i * 0.2}s` }}
        />
      ))}
    </div>
  );
}
